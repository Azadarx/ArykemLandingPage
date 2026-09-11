// Arykem Pharmaceuticals Product Portfolio
// Single source of truth for all product data
// EXACTLY 8 PRODUCTS
// Display Priority: COLLAGEN → X-GLUTA TAB → X-GLUTA IV variants → LA3C (Priority 1) | REPOB → KTOSEVEN (Priority 2)

export const products = [
  // TIER 1: PRIMARY FOCUS PRODUCTS (Priority 1 - Front of screen)
  // Order: COLLAGEN, X-GLUTA TAB, X-GLUTA IV 2000, X-GLUTA IV 1200, X-GLUTA IV 600, LA3C
  {
    id: 'collagen',
    name: 'COLLAGEN',
    category: 'Skin Health',
    slug: 'collagen',
    priority: 1,
    shortDescription: 'Pure marine collagen supplementation supporting skin structure and elasticity',
    description: 'Arykem Collagen provides targeted nutritional support for skin structure, elasticity, and overall dermal health through high-quality collagen peptides combined with complementary nutrients for comprehensive skin support.',
    positioning: 'Premium collagen supplement for skin health and structural support',
    composition: [
      { ingredient: 'Collagen Blend Pro (Marine)', amount: 'Proprietary blend', role: 'Primary structural protein supporting skin framework and elasticity' },
      { ingredient: 'Hyaluronic Acid', amount: '25 mg', role: 'Hydration and moisture retention in skin tissues' },
      { ingredient: 'Vitamin C', amount: '38-40 mg', role: 'Essential cofactor for normal collagen biosynthesis' },
      { ingredient: 'EPA & DHA', amount: '60 mg', role: 'Omega-3 fatty acids supporting overall skin health' },
      { ingredient: 'Retinol (Vitamin A)', amount: '60 mcg', role: 'Supports normal skin cell turnover and differentiation' },
      { ingredient: 'Biotin', amount: '30 mcg', role: 'Supports normal skin, hair, and nail health' },
    ],
    highlights: [
      'Pure marine collagen peptides',
      'Comprehensive skin support formula',
      'Includes hyaluronic acid for hydration',
      'Vitamin C for collagen synthesis support',
      'Omega-3 fatty acids (EPA & DHA)',
      'Biotin and retinol for overall skin health',
    ],
    scientificFocus: 'Collagen is the most abundant structural protein in the human body, forming approximately 30% of total protein mass. In skin, collagen provides the structural framework that contributes to firmness, elasticity, and overall architecture. Type I collagen, the predominant form in skin, forms thick fibers that provide tensile strength. With aging, collagen production decreases approximately 1% per year after age 30, and existing collagen undergoes structural changes including fragmentation and altered cross-linking patterns. Supplemental collagen peptides (hydrolyzed collagen) are broken down into smaller peptides and amino acids that may be absorbed and utilized by the body. While the exact mechanisms remain under investigation, proposed pathways include providing amino acid building blocks for endogenous collagen synthesis and potential signaling effects from collagen-derived peptides.',
    formulationLogic: 'This formulation combines collagen peptides with complementary nutrients that support various aspects of skin biology. Vitamin C is essential for normal collagen biosynthesis, serving as a required cofactor for prolyl and lysyl hydroxylase enzymes. Hyaluronic acid, naturally present in skin, supports hydration through its water-binding properties. EPA and DHA (omega-3 fatty acids) contribute to overall skin health and may influence inflammatory pathways. Retinol (vitamin A) supports normal epithelial cell differentiation, while biotin contributes to the maintenance of normal skin. This multi-component approach addresses collagen structure, synthesis support, and complementary skin health factors.',
    professionalUse: 'Collagen supplementation can be integrated into holistic skin health protocols alongside topical treatments, professional procedures, and lifestyle modifications. It may be considered for individuals seeking to support skin structure, elasticity, and overall dermal health as part of comprehensive aesthetic wellness programs. Professional guidance on appropriate duration, combination with other interventions, and realistic expectation setting remains important. Individual responses vary based on age, baseline collagen status, overall nutritional intake, and genetic factors.',
    form: 'Powder or capsule supplement',
    packaging: 'Professional packaging',
    relatedScience: ['collagen', 'skin-nutrition', 'vitamin-c'],
    relatedProducts: ['x-gluta-tab', 'la3c'],
  },
  {
    id: 'x-gluta-tab',
    name: 'X-GLUTA TAB',
    category: 'Aesthetic Nutrition',
    slug: 'x-gluta-tab',
    priority: 1,
    shortDescription: 'Multi-antioxidant effervescent formulation for comprehensive skin health support',
    description: 'X-GLUTA TAB combines premium antioxidants in an effervescent delivery system, supporting the body\'s natural defense mechanisms against oxidative stress while promoting skin vitality through a synergistic blend of glutathione, astaxanthin, NAC, and vitamin C.',
    positioning: 'Comprehensive oral antioxidant nutraceutical designed for skin health optimization',
    composition: [
      { ingredient: 'L-Glutathione', amount: '500 mg', role: 'Master antioxidant supporting cellular health and redox balance' },
      { ingredient: 'Astaxanthin', amount: '6 mg', role: 'Powerful carotenoid with antioxidant properties' },
      { ingredient: 'N-Acetyl Cysteine (NAC)', amount: '50 mg', role: 'Glutathione precursor supporting antioxidant recycling and synthesis' },
      { ingredient: 'Vitamin C (Ascorbic Acid)', amount: '40 mg', role: 'Essential antioxidant supporting collagen synthesis and glutathione regeneration' },
    ],
    highlights: [
      'Effervescent tablet format for enhanced bioavailability',
      'Synergistic multi-antioxidant formulation',
      'Supports natural antioxidant defense systems',
      'Combines glutathione with its biological cofactors',
      '30 tablets (15 tablets per tube)',
      'Pleasant effervescent delivery system',
    ],
    scientificFocus: 'Glutathione represents the body\'s primary endogenous antioxidant, existing in reduced (GSH) and oxidized (GSSG) forms. It participates in cellular redox homeostasis and protects against oxidative damage through multiple enzymatic pathways. The availability of cysteine, the rate-limiting amino acid in glutathione synthesis, influences glutathione levels. N-acetyl cysteine (NAC) provides a stable cysteine source, supporting endogenous glutathione production. Vitamin C works synergistically with glutathione, helping regenerate the reduced form and providing complementary antioxidant activity. Astaxanthin, a carotenoid antioxidant, adds an additional layer of defense against reactive oxygen species. This formulation brings together multiple antioxidant pathways that naturally interact in biological systems.',
    formulationLogic: 'X-GLUTA TAB is designed around the concept of supporting the body\'s endogenous antioxidant network. Rather than relying on a single antioxidant, it combines: (1) Direct glutathione supplementation, (2) NAC to support ongoing glutathione synthesis, (3) Vitamin C for antioxidant synergy and glutathione recycling, and (4) Astaxanthin for complementary antioxidant activity. The effervescent format aims to enhance dissolution and potentially improve absorption, though individual responses vary based on factors including baseline nutritional status, oxidative stress burden, and overall health.',
    professionalUse: 'X-GLUTA TAB is designed for integration into comprehensive aesthetic and dermatological practice protocols focused on skin health optimization and antioxidant support. It may be considered for individuals seeking to support their antioxidant defenses, particularly in contexts of environmental oxidative stress, aesthetic procedures, or as part of holistic skin health maintenance. Professional guidance on dosing, duration, and combination with other interventions remains essential. Individual responses depend on multiple factors including genetics, baseline glutathione status, diet, lifestyle, and overall health.',
    form: 'Effervescent Tablets',
    packaging: '30 tablets (2 tubes of 15 tablets each)',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress', 'skin-nutrition'],
    relatedProducts: ['x-gluta-iv-600', 'x-gluta-iv-1200', 'x-gluta-iv-2000', 'la3c'],
  },
  {
    id: 'x-gluta-iv-2000',
    name: 'X-GLUTA IV 2000 mg',
    category: 'IV Nutrition',
    slug: 'x-gluta-iv-2000',
    priority: 1,
    shortDescription: 'High-dose glutathione IV formulation for professional use',
    description: 'X-GLUTA IV 2000 mg delivers high-concentration L-Glutathione with Vitamin C in a single-dose vial designed for intravenous administration in clinical settings under qualified healthcare professional supervision.',
    positioning: 'High-dose professional IV antioxidant formulation for clinical aesthetic and wellness protocols',
    composition: [
      { ingredient: 'L-Glutathione', amount: '2000 mg', role: 'Primary antioxidant supporting cellular function and redox homeostasis' },
      { ingredient: 'Vitamin C (Ascorbic Acid)', amount: '500 mg', role: 'Antioxidant synergist supporting glutathione stability and regeneration' },
    ],
    highlights: [
      'High-dose glutathione formulation',
      'Single-dose vial for professional use',
      'IV administration only',
      'Pharmaceutical-grade purity',
      'For use under qualified healthcare professional guidance',
    ],
    scientificFocus: 'Intravenous glutathione administration bypasses first-pass metabolism and gastrointestinal absorption limitations, allowing direct systemic delivery. This route may achieve higher plasma concentrations compared to oral administration, though the clinical significance and duration of elevated levels vary among individuals. The addition of vitamin C supports glutathione stability in solution and provides complementary antioxidant activity. Vitamin C also participates in the regeneration of oxidized glutathione back to its reduced form.',
    formulationLogic: 'The 2000mg dose represents the high end of the X-GLUTA IV range, designed for protocols requiring substantial antioxidant supplementation. The inclusion of 500mg vitamin C serves multiple purposes: solution stabilization, antioxidant synergy, and support for glutathione recycling. This formulation is intended for use within comprehensive aesthetic or wellness protocols under appropriate professional supervision.',
    professionalUse: 'X-GLUTA IV 2000 mg is exclusively for use by qualified healthcare professionals in clinical settings. Proper administration protocols, patient assessment, and monitoring are essential. Individual protocols should consider factors including patient goals, baseline health status, concurrent treatments, and appropriate dosing intervals. This product should not be self-administered and requires professional clinical oversight.',
    form: 'Injectable Solution',
    packaging: 'Single-dose vial',
    warning: 'For professional use only. IV administration must be performed by qualified healthcare professionals in appropriate clinical settings.',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress'],
    relatedProducts: ['x-gluta-tab', 'x-gluta-iv-1200', 'x-gluta-iv-600'],
  },
  {
    id: 'x-gluta-iv-1200',
    name: 'X-GLUTA IV 1200 mg',
    category: 'IV Nutrition',
    slug: 'x-gluta-iv-1200',
    priority: 1,
    shortDescription: 'Mid-dose glutathione IV formulation for clinical applications',
    description: 'X-GLUTA IV 1200 mg provides pharmaceutical-grade L-Glutathione with Vitamin C for intravenous administration in professional healthcare settings, offering a balanced dose for aesthetic and wellness protocols.',
    positioning: 'Mid-range professional IV antioxidant formulation for balanced clinical protocols',
    composition: [
      { ingredient: 'L-Glutathione', amount: '1200 mg', role: 'Primary antioxidant supporting cellular health and redox balance' },
      { ingredient: 'Vitamin C (Ascorbic Acid)', amount: '500 mg', role: 'Antioxidant cofactor supporting glutathione function and stability' },
    ],
    highlights: [
      'Mid-concentration IV glutathione',
      'Professional-grade formulation',
      'Single-dose vial',
      'Clinical use only',
      'Balanced dose for moderate protocols',
    ],
    scientificFocus: 'This formulation provides a moderate dose of glutathione with vitamin C support, designed for protocols requiring balanced antioxidant supplementation. The 1200mg glutathione dose represents an intermediate option within the X-GLUTA IV range, suitable for progressive protocols or maintenance phases.',
    formulationLogic: 'The mid-range 1200mg dose offers flexibility for healthcare professionals developing individualized treatment protocols. It may be appropriate for patients transitioning from lower doses, those requiring moderate antioxidant support, or as part of maintenance regimens. The consistent 500mg vitamin C across the range ensures antioxidant synergy at all dose levels.',
    professionalUse: 'Designed for integration into aesthetic and wellness protocols under proper clinical supervision. Healthcare professionals should evaluate patient-specific factors including treatment goals, response to previous interventions, and overall health status when selecting appropriate glutathione doses.',
    form: 'Injectable Solution',
    packaging: 'Single-dose vial',
    warning: 'For professional use only. IV administration must be performed by qualified healthcare professionals.',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress'],
    relatedProducts: ['x-gluta-tab', 'x-gluta-iv-2000', 'x-gluta-iv-600'],
  },
  {
    id: 'x-gluta-iv-600',
    name: 'X-GLUTA IV 600 mg',
    category: 'IV Nutrition',
    slug: 'x-gluta-iv-600',
    priority: 1,
    shortDescription: 'Entry-level glutathione IV formulation for clinical use',
    description: 'X-GLUTA IV 600 mg offers a foundational dose of L-Glutathione with Vitamin C for intravenous administration in professional settings, suitable for initial protocols or patients new to IV glutathione therapy.',
    positioning: 'Entry-level professional IV antioxidant formulation for initial and foundational protocols',
    composition: [
      { ingredient: 'L-Glutathione', amount: '600 mg', role: 'Master antioxidant for cellular support and redox homeostasis' },
      { ingredient: 'Vitamin C (Ascorbic Acid)', amount: '500 mg', role: 'Complementary antioxidant activity and glutathione support' },
    ],
    highlights: [
      'Entry-level IV glutathione dose',
      'Suitable for initial protocols',
      'Professional use only',
      'Single-dose format',
      'Foundation for progressive treatment plans',
    ],
    scientificFocus: 'This formulation provides foundational antioxidant support suitable for patients beginning IV glutathione protocols. The 600mg dose represents a conservative starting point that allows healthcare professionals to assess individual patient response and tolerance before progressing to higher doses if clinically appropriate.',
    formulationLogic: 'The entry-level 600mg dose is designed with gradual protocol initiation in mind. Starting with a moderate dose allows for evaluation of individual response, tolerance, and outcomes before escalating to higher concentrations. This approach aligns with prudent clinical practice of beginning with conservative interventions.',
    professionalUse: 'Appropriate for healthcare professionals developing individualized patient protocols with gradual antioxidant support. May be particularly suitable for patients new to IV glutathione therapy, those with conservative treatment goals, or as part of combination protocols where multiple interventions are employed.',
    form: 'Injectable Solution',
    packaging: 'Single-dose vial',
    warning: 'For professional use only. IV administration must be performed by qualified healthcare professionals.',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress'],
    relatedProducts: ['x-gluta-tab', 'x-gluta-iv-1200', 'x-gluta-iv-2000'],
  },
  {
    id: 'la3c',
    name: 'LA3C',
    category: 'Dermatology',
    slug: 'la3c',
    priority: 1,
    shortDescription: '15% Liposomal Vitamin C face serum with complementary antioxidant system',
    description: 'LA3C represents Arykem\'s advanced approach to topical antioxidant delivery, combining 15% Liposomal Vitamin C with a synergistic blend of complementary actives designed to support skin health, barrier function, and natural radiance.',
    positioning: 'Premium topical antioxidant serum for professional and consumer dermatological care',
    composition: [
      { ingredient: '15% Liposomal Vitamin C', amount: '15%', role: 'Primary antioxidant active supporting normal collagen formation and oxidative stress defense' },
      { ingredient: 'Niacinamide', amount: '1%', role: 'Skin barrier support and overall skin quality maintenance' },
      { ingredient: 'Hyaluronic Acid', amount: '1%', role: 'Hydration support through water retention properties' },
      { ingredient: 'Ferulic Acid', amount: '0.5%', role: 'Complementary antioxidant supporting vitamin C stability' },
      { ingredient: 'Alpha-Tocopherol (Vitamin E)', amount: '1%', role: 'Lipid-soluble antioxidant working synergistically with vitamin C' },
    ],
    highlights: [
      'Advanced liposomal delivery system for vitamin C',
      'Synergistic multi-antioxidant formulation',
      'Combines water-soluble and lipid-soluble antioxidants',
      'Niacinamide for barrier support',
      'Hyaluronic acid for hydration',
      'Professional-grade concentration',
    ],
    scientificFocus: 'LA3C is formulated around the concept of antioxidant synergy. Vitamin C (ascorbic acid) functions as a primary water-soluble antioxidant and essential cofactor for enzymes involved in normal collagen biosynthesis. The addition of ferulic acid enhances the stability and antioxidant capacity of vitamin C, while alpha-tocopherol (vitamin E) provides complementary lipid-phase antioxidant activity. This combination reflects established principles of antioxidant cooperation. Niacinamide (nicotinamide) supports normal skin barrier function and has been studied for its role in maintaining overall skin quality. Hyaluronic acid, a glycosaminoglycan naturally present in skin, provides hydration support through its water-binding properties.',
    formulationLogic: 'The formulation combines complementary antioxidant pathways: Vitamin C + Vitamin E + Ferulic Acid create a multi-phase antioxidant system addressing both aqueous and lipid environments. Niacinamide addresses barrier integrity independently. Hyaluronic acid provides structural hydration support. The liposomal delivery system aims to enhance stability and skin compatibility, though individual responses may vary.',
    professionalUse: 'LA3C is designed for integration into comprehensive dermatological and aesthetic skincare protocols. It can be recommended as part of daily antioxidant defense strategies, particularly for individuals concerned with environmental oxidative stress, photoaging, or seeking to support normal skin appearance and barrier function. Professional guidance on application timing, frequency, and combination with other treatments remains important.',
    form: 'Topical Serum',
    packaging: 'Professional packaging',
    relatedScience: ['vitamin-c', 'antioxidants', 'skin-nutrition'],
    relatedProducts: ['x-gluta-tab', 'collagen'],
  },

  // TIER 2: SUPPORTING PRODUCTS (Priority 2 - End of screen)
  // Order: REPOB, KTOSEVEN
  {
    id: 'repob',
    name: 'REPOB',
    category: 'Dermatology',
    slug: 'repob',
    priority: 2,
    shortDescription: 'Probiotic formulation with prebiotic support',
    description: 'REPOB combines multiple probiotic strains with prebiotic fructooligosaccharides to support normal digestive microbiome balance, which may have indirect relevance to overall health and skin wellness.',
    positioning: 'Probiotic supplement for microbiome support',
    composition: [
      { ingredient: 'Lactobacillus acidophilus', amount: '0.48 billion CFU', role: 'Probiotic strain supporting intestinal microbiome' },
      { ingredient: 'Lactobacillus rhamnosus', amount: '0.48 billion CFU', role: 'Probiotic strain with digestive support properties' },
      { ingredient: 'Bifidobacterium longum', amount: '0.48 billion CFU', role: 'Probiotic strain supporting gut microbiome balance' },
      { ingredient: 'Saccharomyces boulardii', amount: '0.10 billion CFU', role: 'Beneficial yeast supporting digestive health' },
      { ingredient: 'Fructooligosaccharides (FOS)', amount: '100 mg', role: 'Prebiotic fiber supporting probiotic growth' },
    ],
    highlights: [
      'Multi-strain probiotic formulation',
      'Includes prebiotic FOS',
      'Supports digestive microbiome',
      'May contribute to overall wellness',
    ],
    scientificFocus: 'The human microbiome plays important roles in digestion, immune function, and overall health. Probiotic supplementation aims to support beneficial bacterial populations in the digestive tract. While the gut-skin axis (the relationship between intestinal health and skin condition) is an area of ongoing research, direct causal mechanisms remain under investigation.',
    professionalUse: 'REPOB may be recommended as part of holistic wellness approaches that consider digestive health as one component of overall well-being. Professional guidance on appropriate use context and duration is advisable.',
    form: 'Capsules',
    packaging: '1×10×10 blister pack',
    relatedScience: ['skin-nutrition'],
    relatedProducts: ['ktoseven'],
  },
  {
    id: 'ktoseven',
    name: 'KTOSEVEN',
    category: 'Dermatology',
    slug: 'ktoseven',
    priority: 2,
    shortDescription: 'Bone health formulation with calcium, vitamin D3, vitamin K2-7, and zinc',
    description: 'KTOSEVEN combines calcium, vitamin D3 (calcitriol), vitamin K2-7, and zinc to support normal bone health and calcium metabolism, which forms part of overall health maintenance.',
    positioning: 'Bone health supplement with calcium and vitamin D3',
    composition: [
      { ingredient: 'Calcium Carbonate', amount: 'As formulated', role: 'Primary calcium source for bone health' },
      { ingredient: 'Calcitriol (Vitamin D3)', amount: 'As formulated', role: 'Supports calcium absorption and bone metabolism' },
      { ingredient: 'Zinc', amount: 'As formulated', role: 'Essential mineral supporting multiple physiological functions' },
      { ingredient: 'Vitamin K2-7', amount: 'As formulated', role: 'Supports normal calcium metabolism and bone health' },
    ],
    highlights: [
      'Calcium and vitamin D3 for bone health',
      'Includes vitamin K2-7',
      'Zinc supplementation',
      'Supports normal calcium metabolism',
    ],
    scientificFocus: 'Calcium and vitamin D are essential for normal bone health and calcium homeostasis. Vitamin K2 (specifically the MK-7 form) has been studied for its role in calcium metabolism and bone health. Zinc is an essential trace mineral involved in numerous enzymatic processes.',
    professionalUse: 'KTOSEVEN may be recommended for individuals seeking to support bone health as part of comprehensive wellness protocols, particularly where calcium and vitamin D status may be of concern.',
    form: 'Tablets',
    packaging: '1×10×10 blister pack',
    relatedScience: ['skin-nutrition'],
    relatedProducts: ['repob'],
  },
];

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'Aesthetic Nutrition', label: 'Aesthetic Nutrition' },
  { id: 'IV Nutrition', label: 'IV Nutrition' },
  { id: 'Dermatology', label: 'Dermatology' },
  { id: 'Skin Health', label: 'Skin Health' },
];

export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
}

export function getProductsByPriority(priority) {
  return products.filter(product => product.priority === priority);
}

export function getPriorityProducts(limit = 6) {
  // Get priority 1 products first (will already be in desired order), then priority 2
  const priority1 = products.filter(p => p.priority === 1);
  const priority2 = products.filter(p => p.priority === 2);
  return [...priority1, ...priority2].slice(0, limit);
}

export function getRelatedProducts(currentProductId, limit = 3) {
  const currentProduct = products.find(p => p.id === currentProductId);
  if (!currentProduct) return [];
  
  // Prioritize products with same priority level first
  let related = products.filter(
    p => p.priority === currentProduct.priority && p.id !== currentProductId
  );
  
  // Then same category
  if (related.length < limit) {
    const sameCategory = products.filter(
      p => p.category === currentProduct.category && 
           p.id !== currentProductId && 
           !related.find(r => r.id === p.id)
    );
    related = [...related, ...sameCategory];
  }
  
  // Then any others
  if (related.length < limit) {
    const others = products.filter(
      p => p.id !== currentProductId && !related.find(r => r.id === p.id)
    );
    related = [...related, ...others];
  }
  
  return related.slice(0, limit);
}
