// Product Knowledge Search Utility
// Arykem Pharmaceuticals - Chat Support System

import knowledgeBase from '@/data/productKnowledge.json';

/**
 * Normalize text for comparison
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ');
}

/**
 * Calculate similarity score between two strings
 */
function calculateSimilarity(str1, str2) {
  const words1 = new Set(normalizeText(str1).split(' '));
  const words2 = new Set(normalizeText(str2).split(' '));
  
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);
  
  return intersection.size / union.size;
}

/**
 * Detect product mentions in query
 */
export function detectProducts(query) {
  const normalizedQuery = normalizeText(query);
  const detectedProducts = [];

  knowledgeBase.products.forEach(product => {
    // Check product name
    if (normalizedQuery.includes(normalizeText(product.name))) {
      detectedProducts.push(product.id);
      return;
    }

    // Check aliases
    if (product.aliases) {
      for (const alias of product.aliases) {
        if (normalizedQuery.includes(normalizeText(alias))) {
          detectedProducts.push(product.id);
          return;
        }
      }
    }

    // Check partial matches for common terms
    const productTerms = normalizeText(product.name).split(' ');
    const matchCount = productTerms.filter(term => 
      term.length > 3 && normalizedQuery.includes(term)
    ).length;
    
    if (matchCount >= 2 || (matchCount === 1 && productTerms.length === 1)) {
      detectedProducts.push(product.id);
    }
  });

  return [...new Set(detectedProducts)]; // Remove duplicates
}

/**
 * Detect if query is about removed products
 */
export function checkRemovedProducts(query) {
  const normalizedQuery = normalizeText(query);
  const removedProducts = knowledgeBase.brand.removedProducts;

  for (const removed of removedProducts) {
    if (normalizedQuery.includes(normalizeText(removed))) {
      return {
        isRemoved: true,
        productName: removed,
        response: knowledgeBase.fallbackAnswers.removedProduct
      };
    }
  }

  return { isRemoved: false };
}

/**
 * Categorize question type
 */
export function categorizeQuestion(query) {
  const normalizedQuery = normalizeText(query);
  
  const categories = {
    composition: ['ingredient', 'composition', 'contains', 'kya hai', 'what is in', 'formula'],
    benefits: ['benefit', 'advantage', 'good for', 'help', 'use for', 'fayde'],
    safety: ['safe', 'side effect', 'precaution', 'contraindication', 'pregnancy', 'warning'],
    directions: ['how to', 'kaise', 'usage', 'direction', 'take', 'use'],
    comparison: ['difference', 'compare', 'vs', 'better', 'fark'],
    mechanism: ['how does', 'work', 'mechanism', 'kaam kaise', 'function'],
    overview: ['what is', 'kya hai', 'tell me', 'about', 'explain'],
    pack: ['pack', 'size', 'quantity', 'kitne', 'how many']
  };

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => normalizedQuery.includes(keyword))) {
      return category;
    }
  }

  return 'general';
}

/**
 * Search FAQ for best match
 */
export function searchFAQ(query, productId = null) {
  const normalizedQuery = normalizeText(query);
  let bestMatch = null;
  let bestScore = 0;

  const searchProducts = productId 
    ? [knowledgeBase.products.find(p => p.id === productId)]
    : knowledgeBase.products;

  searchProducts.forEach(product => {
    if (!product || !product.faq) return;

    product.faq.forEach(faqItem => {
      // Check main question
      let score = calculateSimilarity(normalizedQuery, faqItem.question);

      // Check variations
      if (faqItem.variations) {
        faqItem.variations.forEach(variation => {
          const varScore = calculateSimilarity(normalizedQuery, variation);
          score = Math.max(score, varScore);
        });
      }

      if (score > bestScore && score > 0.3) {
        bestScore = score;
        bestMatch = {
          ...faqItem,
          productId: product.id,
          productName: product.name,
          confidence: score
        };
      }
    });
  });

  return bestMatch;
}

/**
 * Get product information by category
 */
export function getProductInfo(productId, category) {
  const product = knowledgeBase.products.find(p => p.id === productId);
  if (!product) return null;

  switch (category) {
    case 'composition':
      return {
        type: 'composition',
        product: product.name,
        data: product.composition,
        summary: `${product.name} contains: ${product.composition.map(c => `${c.ingredient} (${c.amount})`).join(', ')}.`
      };

    case 'benefits':
      return {
        type: 'benefits',
        product: product.name,
        data: product.benefits,
        summary: product.benefits ? product.benefits.join(' • ') : 'Benefits information available in product documentation.'
      };

    case 'safety':
      return {
        type: 'safety',
        product: product.name,
        data: product.safety,
        summary: product.safety ? 'Please review safety information and consult healthcare professional if needed.' : 'Consult healthcare professional for safety guidance.'
      };

    case 'directions':
      return {
        type: 'directions',
        product: product.name,
        data: product.directions,
        summary: product.directions?.usage || 'Follow label instructions or consult healthcare professional.'
      };

    case 'overview':
      return {
        type: 'overview',
        product: product.name,
        data: {
          name: product.name,
          category: product.category,
          positioning: product.positioning,
          form: product.verifiedFacts?.form
        },
        summary: product.positioning || product.shortDescription || `${product.name} is part of the Arykem product portfolio.`
      };

    default:
      return null;
  }
}

/**
 * Main search function
 */
export function searchKnowledge(query) {
  // Check for removed products first
  const removedCheck = checkRemovedProducts(query);
  if (removedCheck.isRemoved) {
    return {
      success: true,
      type: 'removed_product',
      response: removedCheck.response,
      confidence: 1.0
    };
  }

  // Detect products mentioned
  const detectedProducts = detectProducts(query);
  
  // Categorize question
  const category = categorizeQuestion(query);

  // Search FAQ
  const faqMatch = searchFAQ(query, detectedProducts[0]);
  
  if (faqMatch && faqMatch.confidence > 0.4) {
    return {
      success: true,
      type: 'faq',
      response: faqMatch.answer,
      productId: faqMatch.productId,
      productName: faqMatch.productName,
      category: faqMatch.category,
      confidence: faqMatch.confidence,
      relatedQuestions: getRelatedQuestions(faqMatch.productId, faqMatch.category, 3)
    };
  }

  // Try to get info by category
  if (detectedProducts.length > 0 && category !== 'general') {
    const info = getProductInfo(detectedProducts[0], category);
    if (info) {
      return {
        success: true,
        type: 'category_info',
        response: info.summary,
        data: info.data,
        productId: detectedProducts[0],
        category: category,
        confidence: 0.6
      };
    }
  }

  // Check if it's a general science question
  const scienceMatch = searchGeneralScience(query);
  if (scienceMatch) {
    return {
      success: true,
      type: 'general_science',
      response: scienceMatch.simpleExplanation,
      professionalExplanation: scienceMatch.professionalExplanation,
      sources: scienceMatch.sources,
      confidence: 0.7
    };
  }

  // No good match found
  return {
    success: false,
    type: 'unknown',
    response: knowledgeBase.fallbackAnswers.unknownQuestion,
    suggestions: getSuggestedQuestions(),
    confidence: 0
  };
}

/**
 * Search general science topics
 */
function searchGeneralScience(query) {
  const normalizedQuery = normalizeText(query);
  
  for (const topic of knowledgeBase.generalScience) {
    const topicScore = calculateSimilarity(normalizedQuery, topic.topic);
    if (topicScore > 0.5) {
      return topic;
    }
  }
  
  return null;
}

/**
 * Get related questions from same category
 */
function getRelatedQuestions(productId, category, limit = 3) {
  const product = knowledgeBase.products.find(p => p.id === productId);
  if (!product || !product.faq) return [];

  return product.faq
    .filter(faq => faq.category === category)
    .slice(0, limit)
    .map(faq => faq.question);
}

/**
 * Get suggested questions for empty state
 */
export function getSuggestedQuestions() {
  return [
    "What is X-GLUTA TAB?",
    "Compare X-GLUTA IV strengths",
    "What is glutathione?",
    "Tell me about MarineX",
    "What is LA3C?",
    "Show all products",
    "Is glutathione safe?",
    "What is oxidative stress?"
  ];
}

/**
 * Get product overview for display
 */
export function getProductOverview(productId) {
  const product = knowledgeBase.products.find(p => p.id === productId);
  if (!product) return null;

  return {
    id: product.id,
    name: product.name,
    category: product.category,
    positioning: product.positioning,
    composition: product.composition,
    benefits: product.benefits,
    faqCount: product.faq?.length || 0
  };
}

/**
 * Get all products list
 */
export function getAllProducts() {
  return knowledgeBase.brand.currentProducts;
}

/**
 * Emergency check
 */
export function checkEmergency(query) {
  const emergencyKeywords = [
    'emergency', 'urgent', 'severe reaction', 'overdose', 
    'poisoning', 'cant breathe', 'chest pain', 'unconscious',
    'seizure', 'allergic reaction severe'
  ];

  const normalizedQuery = normalizeText(query);
  
  for (const keyword of emergencyKeywords) {
    if (normalizedQuery.includes(keyword)) {
      return {
        isEmergency: true,
        response: knowledgeBase.fallbackAnswers.emergency
      };
    }
  }

  return { isEmergency: false };
}
