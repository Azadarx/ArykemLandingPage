// Arykem Pharmaceuticals Product Portfolio
// Single source of truth for all product data
// EXACTLY 8 PRODUCTS
// Display Priority: COLLAGEN → X-GLUTA TAB → X-GLUTA IV variants → LA3C (Priority 1) | REPOB → KTOSEVEN (Priority 2)

// DATA INTEGRITY NOTE:
// MarineX Retinol quantity conflict:
// - Detailed visual: 30 mcg
// - Product list visual: 60 mcg
// Current value used: 30 mcg (pending company confirmation)
// TO UPDATE: Change MARINEX_RETINOL_MCG constant below

const MARINEX_RETINOL_MCG = 30; // TODO: Confirm with company - conflicting sources show 30 mcg or 60 mcg

export const products = [
  // TIER 1: PRIMARY FOCUS PRODUCTS (Priority 1 - Front of screen)
  // Order: MarineX, X-GLUTA TAB, X-GLUTA IV 2000, X-GLUTA IV 1200, X-GLUTA IV 600, LA3C
  {
    id: 'marinex',
    name: 'MarineX',
    fullName: 'PURE MARINE COLLAGEN BUILDER',
    category: 'Marine Nutrition / Beauty & Wellness',
    slug: 'marinex',
    priority: 1,
    shortDescription: 'Pure marine collagen builder with EPA & DHA, hyaluronic acid, and essential micronutrients',
    description: 'MarineX combines marine collagen peptides with EPA & DHA, hyaluronic acid, vitamin C, retinol, and biotin to provide complete nutrition supporting skin elasticity, hydration, hair and nail strength, and joint comfort.',
    positioning: 'Complete marine-based nutrition for comprehensive beauty and wellness support',
    form: 'Powder',
    packSize: '200 g',
    servingSize: '1 Scoop = 10 g',
    servingsPerPack: '20 scoops per 200 g pack',
    composition: [
      { 
        ingredient: 'EPA & DHA', 
        amount: '60 mg', 
        role: 'Omega-3 fatty acids supporting skin barrier function, hydration, and healthy cell membranes' 
      },
      { 
        ingredient: 'Collagen Blend (PRO) — Marine Collagen Peptides', 
        amount: 'As formulated', 
        role: 'Marine collagen peptides supporting skin structure, elasticity, hair and nail strength, and joint comfort' 
      },
      { 
        ingredient: 'Hyaluronic Acid', 
        amount: '25 mg', 
        role: 'Hydration and plumpness support; attracts and retains moisture; helps maintain skin hydration and elasticity' 
      },
      { 
        ingredient: 'Vitamin C', 
        amount: '38.40 mg', 
        role: 'Antioxidant support; helps protect cells from oxidative stress; supports collagen formation' 
      },
      { 
        ingredient: 'Retinol', 
        amount: `${MARINEX_RETINOL_MCG} mcg`, 
        role: 'Supports normal skin health and cellular processes' 
      },
      { 
        ingredient: 'Biotin', 
        amount: '30 mcg', 
        role: 'Supports healthy hair, skin, and nails' 
      },
    ],
    ingredientScience: {
      marineCollagen: {
        title: 'Marine Collagen Peptides',
        description: 'Marine collagen peptides are derived from a marine source. They provide building blocks (amino acids) that support the body\'s natural collagen structure. The peptides are described as having a bioavailability and absorption profile suitable for nutritional supplementation.',
        note: 'Oral collagen peptides provide nutritional support. Individual responses may vary.'
      },
      epaAndDha: {
        title: 'EPA & DHA',
        description: 'Omega-3 fatty acids that support skin barrier function and hydration. They help maintain healthy cell membranes and contribute to overall wellness.'
      },
      hyaluronicAcid: {
        title: 'Hyaluronic Acid',
        description: 'A naturally occurring substance that attracts and retains moisture. Supports skin hydration, plumpness, and overall skin texture.'
      },
      vitaminC: {
        title: 'Vitamin C',
        description: 'Antioxidant nutrient that helps protect cells from oxidative stress. Essential for supporting collagen formation and healthy skin structure.'
      },
      retinol: {
        title: 'Retinol',
        description: 'Vitamin A derivative supporting normal skin health and cellular processes.'
      },
      biotin: {
        title: 'Biotin',
        description: 'Essential micronutrient supporting healthy hair, skin, and nails.'
      }
    },
    highlights: [
      'Complete marine-based nutrition',
      'Marine collagen peptides for skin structure',
      'EPA & DHA omega-3 fatty acids',
      'Hyaluronic acid for hydration',
      'Vitamin C, retinol, and biotin',
      '200 g powder — 20 servings',
    ],
    benefits: [
      'Supports skin elasticity and firmness',
      'Helps maintain hydration and moisture balance',
      'Contributes to hair and nail strength',
      'Supports joint comfort and mobility',
      'Provides comprehensive beauty and wellness support'
    ],
    idealFor: [
      'Adults concerned about skin elasticity, dullness and loss of firmness',
      'Individuals with weak, brittle hair and nails',
      'Those with joint discomfort or reduced mobility',
      'People seeking comprehensive beauty and wellness support'
    ],
    directions: {
      howToUse: 'Take 1 scoop (10 g) of Pure Marine Collagen Builder powder. Add the powder into a glass first. Add water. Mix thoroughly until evenly dispersed. Consume.',
      recommended: '1 scoop in the morning on an empty stomach, before breakfast.',
      schedule: 'Consume 5 scoops per week with 2 days rest — approximately 1 month per 200 g pack.',
      note: 'This is a suggested usage pattern, not a medical treatment schedule.'
    },
    scientificFocus: 'Marine collagen peptides are derived from marine sources and processed into smaller peptide fragments. These peptides provide amino acid building blocks that the body may utilize for various structural and metabolic functions. Collagen is the most abundant protein in the body and plays a key structural role in skin, joints, and connective tissues. The formulation combines collagen peptides with complementary nutrients: EPA & DHA (omega-3 fatty acids), hyaluronic acid (a naturally occurring glycosaminoglycan), vitamin C (essential for collagen synthesis), and micronutrients supporting overall wellness. This multi-component approach addresses multiple pathways relevant to skin, hair, nail, and joint health.',
    formulationLogic: 'MarineX combines marine collagen peptides as the foundation with strategically selected complementary ingredients. Vitamin C is included as an essential cofactor for collagen biosynthesis. Hyaluronic acid supports hydration through its water-binding properties. EPA & DHA contribute to skin barrier function and overall health. Retinol and biotin support skin, hair, and nail health. This synergistic formulation concept brings together structural support (collagen), synthesis support (vitamin C), hydration (hyaluronic acid), and complementary nutritional factors (omega-3s, retinol, biotin) as "Complete Nutrition" for beauty and wellness.',
    professionalUse: 'MarineX may be recommended as part of comprehensive beauty and wellness protocols. It can be integrated with professional aesthetic treatments, topical skincare, and lifestyle modifications. Healthcare professionals should consider patient-specific factors including nutritional status, health goals, and overall treatment context when recommending collagen supplementation.',
    hcpDiscussionPoints: [
      'Complete marine-based nutrition with collagen peptides, EPA & DHA and essential micronutrients',
      'Supports skin, hair, nails, joints and overall wellness',
      'Positioned for individual nutritional needs and lifestyle',
      'Can be integrated into holistic aesthetic and wellness protocols'
    ],
    packaging: '200 g powder',
    relatedScience: ['collagen', 'skin-nutrition', 'vitamin-c'],
    relatedProducts: ['x-gluta-tab', 'la3c'],
    imageAlt: 'MarineX Pure Marine Collagen Builder — Arykem Pharmaceuticals'
  },
  {
    id: 'x-gluta-tab',
    name: 'X-GLUTA TAB',
    fullName: 'X-GLUTA TAB',
    category: 'Advanced Antioxidant Nutrition / Skin Nutrition',
    slug: 'x-gluta-tab',
    priority: 1,
    shortDescription: 'Advanced antioxidant nutrition for healthy, radiant and youthful-looking skin',
    description: 'X-GLUTA TAB combines L-Glutathione, Astaxanthin, N-Acetyl L-Cysteine (NAC), and Vitamin C in an effervescent tablet format, providing comprehensive antioxidant support to help neutralize free radicals and support overall skin health and radiance.',
    positioning: 'Advanced antioxidant nutrition for healthy, radiant and youthful-looking skin',
    form: 'Effervescent Tablet',
    packSize: '30 Effervescent Tablets',
    packaging: '15 Tablets per Tube (2 tubes)',
    composition: [
      { 
        ingredient: 'L-Glutathione', 
        amount: '500 mg', 
        role: 'Naturally occurring antioxidant; helps neutralize free radicals; supports overall skin health and radiance' 
      },
      { 
        ingredient: 'Astaxanthin', 
        amount: '6 mg', 
        role: 'Potent carotenoid antioxidant derived from microalgae; helps protect cells from oxidative damage; supports skin health and vitality' 
      },
      { 
        ingredient: 'N-Acetyl L-Cysteine (NAC)', 
        amount: '50 mg', 
        role: 'Provides a source of cysteine; supports the body\'s natural glutathione synthesis; supports antioxidant defence' 
      },
      { 
        ingredient: 'Vitamin C', 
        amount: '40 mg', 
        role: 'Antioxidant nutrient; helps protect cells from oxidative stress; supports collagen synthesis and healthy skin structure; enhances the antioxidant effect of glutathione' 
      },
    ],
    ingredientScience: {
      glutathione: {
        title: 'L-Glutathione — 500 mg',
        description: 'Naturally occurring antioxidant in the body. Helps neutralize free radicals. Supports overall skin health and radiance. Present as a major antioxidant component of the formulation.'
      },
      astaxanthin: {
        title: 'Astaxanthin — 6 mg',
        description: 'Potent carotenoid antioxidant. Derived from microalgae. Helps protect cells from oxidative damage. Supports skin health and vitality.'
      },
      nac: {
        title: 'N-Acetyl L-Cysteine (NAC) — 50 mg',
        description: 'Provides a source of cysteine. Supports the body\'s natural glutathione synthesis. Supports antioxidant defence.'
      },
      vitaminC: {
        title: 'Vitamin C — 40 mg',
        description: 'Antioxidant nutrient. Helps protect cells from oxidative stress. Supports collagen synthesis and healthy skin structure. Enhances the antioxidant effect of glutathione.'
      }
    },
    highlights: [
      'Multi-component antioxidant formulation',
      'L-Glutathione 500 mg + Astaxanthin 6 mg',
      'NAC to support glutathione synthesis',
      'Vitamin C for antioxidant synergy',
      'Effervescent tablet format — convenient and easy to consume',
      '30 tablets — 15 per tube',
    ],
    benefits: [
      'Supports brighter, more even-looking skin tone',
      'Helps maintain skin hydration and elasticity',
      'Supports detoxification processes',
      'Promotes healthy-looking skin',
      'Comprehensive skin support through antioxidant nutrition'
    ],
    idealFor: [
      'Dull and tired-looking skin',
      'Uneven skin tone and pigmentation concerns',
      'Ageing skin',
      'Individuals exposed to pollution, UV radiation and stress',
      'Those seeking antioxidant nutritional support for healthier skin'
    ],
    directions: {
      howToUse: 'Dissolve 1 effervescent tablet in a glass of water and consume daily, or as directed by a healthcare professional.'
    },
    productContext: 'Skin faces daily oxidative stress from factors such as pollution, UV exposure, stress and lifestyle factors. Antioxidant nutrition may help support the body\'s antioxidant defence and overall skin health.',
    scientificFocus: 'Glutathione represents the body\'s primary endogenous antioxidant, existing in reduced (GSH) and oxidized (GSSG) forms. It participates in cellular redox homeostasis and protects against oxidative damage through multiple enzymatic pathways. The availability of cysteine, the rate-limiting amino acid in glutathione synthesis, influences glutathione levels. N-acetyl cysteine (NAC) provides a stable cysteine source, supporting endogenous glutathione production. Vitamin C works synergistically with glutathione, helping regenerate the reduced form and providing complementary antioxidant activity. Astaxanthin, a carotenoid antioxidant, adds an additional layer of defense against reactive oxygen species. This formulation brings together multiple antioxidant pathways that naturally interact in biological systems.',
    formulationLogic: 'X-GLUTA TAB combines L-Glutathione, Astaxanthin, NAC and Vitamin C as a multi-component antioxidant nutritional formulation intended to support the body\'s natural defence against oxidative stress and support healthy skin. Rather than relying on a single antioxidant, it combines: (1) Direct glutathione supplementation, (2) NAC to support ongoing glutathione synthesis, (3) Vitamin C for antioxidant synergy and glutathione recycling, and (4) Astaxanthin for complementary antioxidant activity. The effervescent format dissolves quickly in water and is convenient and easy to consume.',
    professionalUse: 'X-GLUTA TAB is designed for integration into comprehensive aesthetic and dermatological practice protocols focused on skin health optimization and antioxidant support. It may be considered for individuals seeking to support their antioxidant defenses, particularly in contexts of environmental oxidative stress, aesthetic procedures, or as part of holistic skin health maintenance. Professional guidance on dosing, duration, and combination with other interventions remains essential. Individual responses depend on multiple factors including genetics, baseline glutathione status, diet, lifestyle, and overall health.',
    qualityInformation: [
      'Non-GMO',
      'Sugar Free',
      'Nutraceutical',
      'Pleasant taste',
      'Suitable for long-term use as per professional advice'
    ],
    disclaimer: 'For the use of healthcare professionals only. This is a nutraceutical and not intended to diagnose, treat, cure or prevent any disease.',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress', 'skin-nutrition'],
    relatedProducts: ['x-gluta-iv-600', 'x-gluta-iv-1200', 'x-gluta-iv-2000', 'marinex', 'la3c'],
    imageAlt: 'X-GLUTA TAB — Advanced Antioxidant Effervescent Tablets — Arykem Pharmaceuticals'
  },
  {
    id: 'x-gluta-iv-2000',
    name: 'X-GLUTA IV 2000 mg',
    fullName: 'X-GLUTA IV 2000 mg',
    category: 'Glutathione IV Therapy',
    slug: 'x-gluta-iv-2000',
    priority: 1,
    shortDescription: 'Powerful antioxidant synergy for cellular health and well-being',
    description: 'X-GLUTA IV 2000 mg delivers a high-strength combination of L-Glutathione and Vitamin C to support the body\'s natural antioxidant defence and promote cellular well-being. For intravenous administration under medical supervision.',
    positioning: 'Powerful antioxidant synergy for cellular health and well-being',
    form: 'Injection / IV — Lyophilized Powder',
    route: 'Intravenous (IV)',
    packSize: 'Single Dose Vial',
    composition: [
      { 
        ingredient: 'L-Glutathione', 
        amount: '2000 mg', 
        role: 'Potent intracellular antioxidant; helps neutralize free radicals; supports cellular redox balance; plays a role in maintaining cellular health' 
      },
      { 
        ingredient: 'Vitamin C (Ascorbic Acid)', 
        amount: '500 mg', 
        role: 'Reinforces antioxidant defence; regenerates oxidized glutathione; supports collagen and cellular integrity; helps protect against oxidative stress' 
      },
    ],
    ingredientScience: {
      glutathione: {
        title: 'Glutathione',
        description: 'Potent intracellular antioxidant. Helps neutralize free radicals. Supports cellular redox balance. Plays a role in maintaining cellular health.'
      },
      vitaminC: {
        title: 'Vitamin C',
        description: 'Reinforces antioxidant defence. Regenerates oxidized glutathione. Supports collagen and cellular integrity. Helps protect against oxidative stress.'
      }
    },
    antioxidantAction: {
      title: 'Antioxidant Action',
      description: 'The formulation combines glutathione and Vitamin C for antioxidant support. Reactive oxygen species (ROS) and free radicals are neutralized through the glutathione redox cycle. Glutathione exists in reduced (GSH) and oxidized (GSSG) forms. Vitamin C helps regenerate reduced glutathione and provides complementary antioxidant support. This synergy supports cellular antioxidant defence, maintenance of redox balance, and cellular protection.'
    },
    highlights: [
      'High-strength combination: 2000 mg Glutathione + 500 mg Vitamin C',
      'Lyophilized powder for reconstitution before use',
      'Single dose vial for professional use',
      'Pharmaceutical-grade formulation',
      'Trusted formulation from Arykem Pharmaceuticals Pvt. Ltd.'
    ],
    hcpDiscussionPoints: [
      'Mechanism: combines glutathione and Vitamin C for antioxidant support',
      'Role in cellular health and redox balance',
      'Consider patient-specific factors and clinical context while evaluating use',
      'Use only under medical supervision'
    ],
    clinicalConsiderations: 'Used as antioxidant support in clinical practice as per physician\'s judgement. May be considered for patients where antioxidant support is clinically appropriate. To be administered under medical supervision by a registered healthcare professional.',
    scientificFocus: 'Intravenous glutathione administration bypasses first-pass metabolism and gastrointestinal absorption limitations, allowing direct systemic delivery. This route may achieve higher plasma concentrations compared to oral administration. The addition of vitamin C supports glutathione stability in solution and provides complementary antioxidant activity. Vitamin C also participates in the regeneration of oxidized glutathione back to its reduced form. The formulation addresses cellular oxidative stress through complementary antioxidant pathways.',
    formulationLogic: 'The 2000mg dose represents the high end of the X-GLUTA IV range, designed for protocols requiring substantial antioxidant supplementation. The inclusion of 500mg vitamin C serves multiple purposes: solution stabilization, antioxidant synergy, and support for glutathione recycling. This formulation is intended for use within comprehensive aesthetic or wellness protocols under appropriate professional supervision.',
    professionalUse: 'X-GLUTA IV 2000 mg is exclusively for use by qualified healthcare professionals in clinical settings. Proper administration protocols, patient assessment, and monitoring are essential. Individual protocols should consider factors including patient goals, baseline health status, concurrent treatments, and appropriate dosing intervals. This product should not be self-administered and requires professional clinical oversight.',
    storage: 'Store at a temperature not exceeding 25°C. Protect from light and moisture. Keep out of reach of children.',
    prescriptionStatus: 'Prescription Only Medicine',
    warning: 'For IV use only. To be administered under medical supervision. For professional use only.',
    packaging: 'Single dose vial',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress'],
    relatedProducts: ['x-gluta-tab', 'x-gluta-iv-1200', 'x-gluta-iv-600'],
    imageAlt: 'X-GLUTA IV 2000 mg — High-Strength Glutathione IV Therapy — Arykem Pharmaceuticals'
  },
  {
    id: 'x-gluta-iv-1200',
    name: 'X-GLUTA IV 1200 mg',
    fullName: 'X-GLUTA IV 1200 mg',
    category: 'Glutathione IV Therapy',
    slug: 'x-gluta-iv-1200',
    priority: 1,
    shortDescription: 'Powerful antioxidant support for cellular health',
    description: 'X-GLUTA IV 1200 mg provides a synergistic combination of Glutathione and Vitamin C to support the body\'s natural antioxidant defence mechanisms and promote cellular well-being. For intravenous administration under medical supervision.',
    positioning: 'Powerful antioxidant support for cellular health',
    form: 'Injection / IV — Lyophilized Powder',
    route: 'Intravenous (IV)',
    packSize: 'Single Dose Vial',
    composition: [
      { 
        ingredient: 'L-Glutathione', 
        amount: '1200 mg', 
        role: 'Potent intracellular antioxidant; helps neutralize free radicals; supports cellular redox balance; plays a role in maintaining cellular health' 
      },
      { 
        ingredient: 'Vitamin C', 
        amount: '500 mg', 
        role: 'Reinforces antioxidant defence; regenerates oxidized glutathione; supports collagen and cellular integrity; helps protect against oxidative stress' 
      },
    ],
    ingredientScience: {
      glutathione: {
        title: 'Glutathione',
        description: 'Potent intracellular antioxidant. Helps neutralize free radicals. Supports cellular redox balance. Plays a role in maintaining cellular health.'
      },
      vitaminC: {
        title: 'Vitamin C',
        description: 'Reinforces antioxidant defence. Regenerates oxidized glutathione. Supports collagen and cellular integrity. Helps protect against oxidative stress.'
      }
    },
    antioxidantAction: {
      title: 'Mechanism of Action',
      description: 'ROS/free radicals are addressed through the glutathione redox cycle. Glutathione exists as GSH (reduced) and GSSG (oxidized). Vitamin C helps regenerate reduced glutathione and provides complementary antioxidant support. This supports redox balance, cellular antioxidant defence, and cellular protection through antioxidant synergy.'
    },
    highlights: [
      'Mid-strength combination: 1200 mg Glutathione + 500 mg Vitamin C',
      'Lyophilized powder for reconstitution before use',
      'Single dose vial for professional use',
      'Balanced dose for moderate protocols',
      'Trusted formulation from Arykem Pharmaceuticals Pvt. Ltd.'
    ],
    hcpDiscussionPoints: [
      'Combines Glutathione and Vitamin C for antioxidant support',
      'Role in cellular health and redox balance',
      'Consider patient-specific factors and clinical context',
      'Use only under medical supervision'
    ],
    clinicalConsiderations: 'Used as antioxidant support in clinical practice as per physician\'s judgement. May be considered where antioxidant support is clinically appropriate. To be administered under medical supervision by a registered healthcare professional.',
    scientificFocus: 'This formulation provides a moderate dose of glutathione with vitamin C support, designed for protocols requiring balanced antioxidant supplementation. The 1200mg glutathione dose represents an intermediate option within the X-GLUTA IV range, suitable for progressive protocols or maintenance phases.',
    formulationLogic: 'The mid-range 1200mg dose offers flexibility for healthcare professionals developing individualized treatment protocols. It may be appropriate for patients transitioning from lower doses, those requiring moderate antioxidant support, or as part of maintenance regimens. The consistent 500mg vitamin C across the range ensures antioxidant synergy at all dose levels.',
    professionalUse: 'Designed for integration into aesthetic and wellness protocols under proper clinical supervision. Healthcare professionals should evaluate patient-specific factors including treatment goals, response to previous interventions, and overall health status when selecting appropriate glutathione doses.',
    storage: 'Store at a temperature not exceeding 25°C. Protect from light and moisture. Keep out of reach of children.',
    prescriptionStatus: 'Prescription Only Medicine',
    warning: 'For IV use only. To be administered under medical supervision. For professional use only.',
    packaging: 'Single dose vial',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress'],
    relatedProducts: ['x-gluta-tab', 'x-gluta-iv-2000', 'x-gluta-iv-600'],
    imageAlt: 'X-GLUTA IV 1200 mg — Glutathione IV Therapy — Arykem Pharmaceuticals'
  },
  {
    id: 'x-gluta-iv-600',
    name: 'X-GLUTA IV 600 mg',
    fullName: 'X-GLUTA IV 600 mg',
    category: 'Glutathione IV Therapy',
    slug: 'x-gluta-iv-600',
    priority: 1,
    shortDescription: 'Powerful antioxidant support for cellular health',
    description: 'X-GLUTA IV 600 mg offers a synergistic combination of Glutathione and Vitamin C to support the body\'s natural antioxidant defence mechanisms and promote cellular well-being. For intravenous administration under medical supervision.',
    positioning: 'Powerful antioxidant support for cellular health',
    form: 'Injection / IV — Lyophilized Powder',
    route: 'Intravenous (IV)',
    packSize: 'Single Dose Vial',
    composition: [
      { 
        ingredient: 'L-Glutathione', 
        amount: '600 mg', 
        role: 'Potent intracellular antioxidant; helps neutralize free radicals; supports cellular redox balance; plays a role in maintaining cellular health' 
      },
      { 
        ingredient: 'Vitamin C', 
        amount: '500 mg', 
        role: 'Reinforces antioxidant defence; regenerates oxidized glutathione; supports collagen and cellular integrity; helps protect against oxidative stress' 
      },
    ],
    ingredientScience: {
      glutathione: {
        title: 'Glutathione',
        description: 'Potent intracellular antioxidant. Helps neutralize free radicals. Supports cellular redox balance. Plays a role in maintaining cellular health.'
      },
      vitaminC: {
        title: 'Vitamin C',
        description: 'Reinforces antioxidant defence. Regenerates oxidized glutathione. Supports collagen and cellular integrity. Helps protect against oxidative stress.'
      }
    },
    antioxidantAction: {
      title: 'Oxidative Stress & Cellular Defence',
      description: 'Free radicals and ROS are addressed through the glutathione redox cycle. Glutathione (GSH reduced / GSSG oxidized) provides cellular antioxidant defence. Vitamin C regenerates and supports glutathione function. This supports redox balance and cellular protection through antioxidant synergy.'
    },
    highlights: [
      'Foundation dose: 600 mg Glutathione + 500 mg Vitamin C',
      'Lyophilized powder for reconstitution',
      'Single dose vial for professional use',
      'Suitable for initial protocols and conservative approaches',
      'Trusted formulation from Arykem Pharmaceuticals Pvt. Ltd.'
    ],
    hcpDiscussionPoints: [
      'Combines Glutathione and Vitamin C for antioxidant support',
      'Role in cellular health and redox balance',
      'Consider patient-specific factors and clinical context',
      'Use only under medical supervision'
    ],
    clinicalConsiderations: 'Used as antioxidant support in clinical practice as per physician\'s judgement. May be considered where antioxidant support is clinically appropriate. To be administered under medical supervision by a registered healthcare professional.',
    scientificFocus: 'This formulation provides foundational antioxidant support suitable for patients beginning IV glutathione protocols. The 600mg dose represents a conservative starting point that allows healthcare professionals to assess individual patient response and tolerance before progressing to higher doses if clinically appropriate.',
    formulationLogic: 'The entry-level 600mg dose is designed with gradual protocol initiation in mind. Starting with a moderate dose allows for evaluation of individual response, tolerance, and outcomes before escalating to higher concentrations. This approach aligns with prudent clinical practice of beginning with conservative interventions.',
    professionalUse: 'Appropriate for healthcare professionals developing individualized patient protocols with gradual antioxidant support. May be particularly suitable for patients new to IV glutathione therapy, those with conservative treatment goals, or as part of combination protocols where multiple interventions are employed.',
    storage: 'Store at a temperature not exceeding 25°C. Protect from light and moisture. Keep out of reach of children.',
    prescriptionStatus: 'Prescription Only Medicine',
    warning: 'For IV use only. To be administered under medical supervision. For professional use only.',
    packaging: 'Single dose vial',
    relatedScience: ['glutathione', 'antioxidants', 'oxidative-stress'],
    relatedProducts: ['x-gluta-tab', 'x-gluta-iv-1200', 'x-gluta-iv-2000'],
    imageAlt: 'X-GLUTA IV 600 mg — Glutathione IV Therapy — Arykem Pharmaceuticals'
  },
  {
    id: 'la3c',
    name: 'LA3C',
    fullName: 'LA3C Face Serum',
    category: 'Advanced Vitamin C Skincare',
    slug: 'la3c',
    priority: 1,
    shortDescription: '15% liposomal Vitamin C face serum with complementary antioxidant system',
    description: 'LA3C is a powerful liposomal serum formulated with 15% liposomal Vitamin C, Niacinamide, Hyaluronic Acid and Ferulic Acid, designed to support bright, hydrated and healthy-looking skin.',
    positioning: 'Science + Skincare = Visible Confidence',
    form: 'Topical Serum',
    packSize: '30 ml / 1.01 fl. oz.',
    composition: [
      { 
        ingredient: '15% Liposomal Vitamin C', 
        amount: '15%', 
        role: 'Antioxidant & Brightening Support — Helps neutralize free radicals; supports collagen synthesis; contributes to a more radiant, even-looking complexion' 
      },
      { 
        ingredient: '1% Alpha-Tocopherol (Vitamin E)', 
        amount: '1%', 
        role: 'Protects & Nourishes — Works synergistically with Vitamin C; supports antioxidant protection; supports skin health' 
      },
      { 
        ingredient: '1% Niacinamide', 
        amount: '1%', 
        role: 'Barrier & Tone Support — Helps reduce the appearance of uneven tone; supports skin barrier function; improves overall skin texture' 
      },
      { 
        ingredient: '1% Hyaluronic Acid', 
        amount: '1%', 
        role: 'Hydration & Elasticity — Attracts and retains moisture; helps maintain skin plumpness; supports a smoother, more supple appearance' 
      },
      { 
        ingredient: '0.5% Ferulic Acid', 
        amount: '0.5%', 
        role: 'Stability & Antioxidant Boost — Works synergistically with Vitamin C to enhance antioxidant protection; helps improve the appearance of skin tone and texture' 
      },
    ],
    ingredientScience: {
      liposomalVitaminC: {
        title: '15% Liposomal Vitamin C',
        position: 'Antioxidant & Brightening Support',
        description: 'Helps neutralize free radicals. Supports collagen synthesis. Contributes to a more radiant, even-looking complexion.'
      },
      alphaTocopherol: {
        title: '1% Alpha-Tocopherol (Vitamin E)',
        position: 'Protects & Nourishes',
        description: 'Works synergistically with Vitamin C. Supports antioxidant protection. Supports skin health.'
      },
      niacinamide: {
        title: '1% Niacinamide',
        position: 'Barrier & Tone Support',
        description: 'Helps reduce the appearance of uneven tone. Supports skin barrier function. Improves overall skin texture.'
      },
      hyaluronicAcid: {
        title: '1% Hyaluronic Acid',
        position: 'Hydration & Elasticity',
        description: 'Attracts and retains moisture. Helps maintain skin plumpness. Supports a smoother, more supple appearance.'
      },
      ferulicAcid: {
        title: '0.5% Ferulic Acid',
        position: 'Stability & Antioxidant Boost',
        description: 'Works synergistically with Vitamin C to enhance antioxidant protection. Helps improve the appearance of skin tone and texture.'
      }
    },
    highlights: [
      'Advanced liposomal delivery system for Vitamin C',
      '15% liposomal Vitamin C with synergistic antioxidants',
      'Alpha-Tocopherol (Vitamin E) for antioxidant synergy',
      'Niacinamide for barrier support',
      'Hyaluronic acid for deep hydration',
      'Ferulic acid for stability and enhanced protection',
    ],
    benefits: [
      'Antioxidant support',
      'Skin radiance',
      'Hydration & elasticity',
      'Skin barrier support',
      'Uneven tone improvement'
    ],
    idealFor: [
      'Dull, tired and uneven skin',
      'Hyperpigmentation and dark spots',
      'Fine lines and early signs of ageing',
      'Dehydrated and stressed skin',
      'All skin types including sensitive skin'
    ],
    suitableFor: [
      'All skin types',
      'Sensitive skin',
      'Daily skincare routine'
    ],
    liposomalTechnology: 'The formulation uses liposomal technology, encapsulating Vitamin C in protective lipid spheres. This helps the Vitamin C remain stable and supports delivery to the skin.',
    scienceOfRadiantSkin: {
      title: 'The Science of Radiant Skin',
      points: [
        'Neutralizing free radicals — addresses oxidative stress and photoageing context',
        'Supporting even-looking skin tone',
        'Supporting collagen production',
        'Supporting hydration and skin barrier function',
        'Supporting skin resilience'
      ],
      note: 'These represent scientific and product support concepts, not guaranteed treatment outcomes.'
    },
    professionalRoutine: {
      morning: 'Apply and massage gently. After 20–30 minutes apply SPF.',
      evening: 'Before bedtime, after face wash, apply and gently massage.',
      note: 'For informational purposes. Not a medically prescribed treatment protocol.'
    },
    safety: [
      'For external use only',
      'Avoid contact with eyes',
      'Discontinue if irritation occurs'
    ],
    studyNote: 'Internal consumer study of 30 subjects over 8 weeks. Not a clinical efficacy claim.',
    scientificFocus: 'LA3C is formulated around the concept of antioxidant synergy. Vitamin C (ascorbic acid) functions as a primary water-soluble antioxidant and essential cofactor for enzymes involved in normal collagen biosynthesis. The addition of ferulic acid enhances the stability and antioxidant capacity of vitamin C, while alpha-tocopherol (vitamin E) provides complementary lipid-phase antioxidant activity. This combination reflects established principles of antioxidant cooperation. Niacinamide (nicotinamide) supports normal skin barrier function and has been studied for its role in maintaining overall skin quality. Hyaluronic acid, a glycosaminoglycan naturally present in skin, provides hydration support through its water-binding properties.',
    formulationLogic: 'The formulation combines complementary antioxidant pathways: Vitamin C + Vitamin E + Ferulic Acid create a multi-phase antioxidant system addressing both aqueous and lipid environments. Niacinamide addresses barrier integrity independently. Hyaluronic acid provides structural hydration support. The liposomal delivery system aims to enhance stability and skin compatibility.',
    professionalUse: 'LA3C is designed for integration into comprehensive dermatological and aesthetic skincare protocols. It can be recommended as part of daily antioxidant defense strategies, particularly for individuals concerned with environmental oxidative stress, photoaging, or seeking to support normal skin appearance and barrier function. Professional guidance on application timing, frequency, and combination with other treatments remains important.',
    packaging: '30 ml bottle',
    relatedScience: ['vitamin-c', 'antioxidants', 'skin-nutrition'],
    relatedProducts: ['x-gluta-tab', 'marinex'],
    imageAlt: 'LA3C Face Serum — 15% Liposomal Vitamin C — Arykem Pharmaceuticals'
  },

  // TIER 2: SUPPORTING PRODUCTS (Priority 2 - End of screen)
  // Order: REPOB, KTOSEVEN
  {
    id: 'repob',
    name: 'REPOB',
    fullName: 'REPOB',
    category: 'Pre & Probiotic Capsules',
    slug: 'repob',
    priority: 2,
    shortDescription: 'Pre & probiotic formulation with multiple beneficial strains',
    description: 'REPOB combines multiple probiotic strains with prebiotic fructooligosaccharides to support normal digestive microbiome balance, which may have relevance to overall health and wellness.',
    positioning: 'Pre & probiotic formulation',
    form: 'Capsules',
    packSize: '1 × 10 × 10 capsules',
    composition: [
      { 
        ingredient: 'Lactobacillus acidophilus', 
        amount: '0.48 billion CFU', 
        role: 'Probiotic strain supporting intestinal microbiome' 
      },
      { 
        ingredient: 'Lactobacillus rhamnosus', 
        amount: '0.48 billion CFU', 
        role: 'Probiotic strain with digestive support properties' 
      },
      { 
        ingredient: 'Bifidobacterium longum', 
        amount: '0.48 billion CFU', 
        role: 'Probiotic strain supporting gut microbiome balance' 
      },
      { 
        ingredient: 'Saccharomyces boulardii', 
        amount: '0.10 billion CFU', 
        role: 'Beneficial yeast supporting digestive health' 
      },
      { 
        ingredient: 'Fructooligosaccharides (FOS)', 
        amount: '100 mg', 
        role: 'Prebiotic fiber supporting probiotic growth' 
      },
    ],
    highlights: [
      'Multi-strain probiotic formulation',
      'Four probiotic strains totaling 1.54 billion CFU',
      'Includes prebiotic FOS (Fructooligosaccharides)',
      'Supports digestive microbiome balance',
      'May contribute to overall wellness'
    ],
    scientificFocus: 'The human microbiome plays important roles in digestion, immune function, and overall health. Probiotic supplementation aims to support beneficial bacterial populations in the digestive tract. While the gut-skin axis (the relationship between intestinal health and skin condition) is an area of ongoing research, direct causal mechanisms remain under investigation. REPOB provides a combination of probiotic strains along with prebiotic fiber to support microbiome balance.',
    professionalUse: 'REPOB may be recommended as part of holistic wellness approaches that consider digestive health as one component of overall well-being. Professional guidance on appropriate use context and duration is advisable. Individual responses to probiotic supplementation may vary based on baseline microbiome composition, diet, and overall health status.',
    packaging: '1×10×10 blister pack (100 capsules)',
    relatedScience: ['skin-nutrition'],
    relatedProducts: ['ktoseven'],
    imageAlt: 'REPOB Pre & Probiotic Capsules — Arykem Pharmaceuticals'
  },
  {
    id: 'ktoseven',
    name: 'KTOSEVEN',
    fullName: 'KTOSEVEN',
    category: 'Clinical Wellness Range',
    slug: 'ktoseven',
    priority: 2,
    shortDescription: 'Bone health formulation with calcium, vitamin D3, vitamin K2-7, and zinc',
    description: 'KTOSEVEN combines calcium, vitamin D3 (calcitriol), vitamin K2-7, and zinc to support normal bone health and calcium metabolism, which forms part of overall health maintenance.',
    positioning: 'Bone health supplement with calcium and vitamin D3',
    form: 'Tablets',
    packSize: '1 × 10 × 10 tablets',
    composition: [
      { 
        ingredient: 'Calcium Carbonate', 
        amount: 'As formulated', 
        role: 'Primary calcium source for bone health' 
      },
      { 
        ingredient: 'Calcitriol (Vitamin D3)', 
        amount: 'As formulated', 
        role: 'Supports calcium absorption and bone metabolism' 
      },
      { 
        ingredient: 'Zinc', 
        amount: 'As formulated', 
        role: 'Essential mineral supporting multiple physiological functions' 
      },
      { 
        ingredient: 'Vitamin K2-7', 
        amount: 'As formulated', 
        role: 'Supports normal calcium metabolism and bone health' 
      },
    ],
    highlights: [
      'Calcium and vitamin D3 for bone health',
      'Includes vitamin K2-7 (MK-7 form)',
      'Zinc supplementation',
      'Supports normal calcium metabolism',
      'Comprehensive bone health support'
    ],
    scientificFocus: 'Calcium and vitamin D are essential for normal bone health and calcium homeostasis. Calcium provides the primary mineral component of bone tissue. Vitamin D (specifically as calcitriol, the active form) supports intestinal calcium absorption and plays a regulatory role in bone metabolism. Vitamin K2 (specifically the MK-7 form) has been studied for its role in calcium metabolism and bone health, participating in the carboxylation of proteins involved in calcium regulation. Zinc is an essential trace mineral involved in numerous enzymatic processes throughout the body.',
    professionalUse: 'KTOSEVEN may be recommended for individuals seeking to support bone health as part of comprehensive wellness protocols, particularly where calcium and vitamin D status may be of concern. Healthcare professionals should consider individual factors including dietary calcium intake, vitamin D status, age, and overall health context when recommending bone health supplementation.',
    packaging: '1×10×10 blister pack (100 tablets)',
    relatedScience: ['skin-nutrition'],
    relatedProducts: ['repob'],
    imageAlt: 'KTOSEVEN Bone Health Tablets — Arykem Pharmaceuticals'
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
