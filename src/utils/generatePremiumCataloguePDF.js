// Premium Pharmaceutical Catalogue PDF Generator
// Arykem Pharmaceuticals Pvt. Ltd.

export async function generatePremiumCataloguePDF(products) {
  try {
    // Dynamic import of jsPDF
    const { default: jsPDF } = await import('jspdf');
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);

    // Color palette
    const colors = {
      ivory: [250, 248, 245],
      charcoal: [45, 45, 45],
      botanical: [88, 129, 87],
      mediumGrey: [115, 115, 115],
      softGrey: [220, 220, 220],
      white: [255, 255, 255],
      xglutaMagenta: [220, 95, 135],
      la3cBlue: [95, 155, 220]
    };

    // Helper function to set color
    const setColor = (colorArray) => {
      pdf.setTextColor(...colorArray);
    };

    const setFillColor = (colorArray) => {
      pdf.setFillColor(...colorArray);
    };

    // Helper function to add page with background
    const addPageWithBackground = () => {
      pdf.addPage();
      setFillColor(colors.ivory);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    };

    // Helper function for page footer
    const addFooter = (pageNum, totalPages, productName = '') => {
      pdf.setFontSize(8);
      setColor(colors.mediumGrey);
      
      // Left footer
      pdf.text('Arykem Pharmaceuticals Pvt. Ltd.', margin, pageHeight - 10);
      
      // Center footer
      if (productName) {
        pdf.text(productName, pageWidth / 2, pageHeight - 10, { align: 'center' });
      }
      
      // Right footer - page number
      pdf.text(`${pageNum}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
      
      setColor(colors.charcoal);
    };

    // ===== PAGE 1: PREMIUM COVER =====
    setFillColor(colors.ivory);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    // Decorative top border
    setFillColor(colors.botanical);
    pdf.rect(0, 0, pageWidth, 2, 'F');

    // Logo area (placeholder - in production, use actual logo)
    pdf.setFontSize(42);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('ARYKEM', pageWidth / 2, 80, { align: 'center' });

    // Company name
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    setColor(colors.mediumGrey);
    pdf.text('Pharmaceuticals Pvt. Ltd.', pageWidth / 2, 95, { align: 'center' });

    // Divider line
    setFillColor(colors.botanical);
    pdf.rect(pageWidth / 2 - 20, 105, 40, 0.5, 'F');

    // Tagline
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'italic');
    setColor(colors.charcoal);
    pdf.text('Science for a Healthier Tomorrow', pageWidth / 2, 120, { align: 'center' });

    // Main title
    pdf.setFontSize(36);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('PRODUCT', pageWidth / 2, 150, { align: 'center' });
    pdf.text('CATALOGUE', pageWidth / 2, 165, { align: 'center' });

    // Subtitle
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    setColor(colors.mediumGrey);
    pdf.text('Dermatology • Aesthetics • Clinical Wellness', pageWidth / 2, 180, { align: 'center' });

    // Decorative elements
    setFillColor(colors.botanical);
    pdf.circle(pageWidth / 2 - 60, 210, 1.5, 'F');
    pdf.circle(pageWidth / 2, 210, 1.5, 'F');
    pdf.circle(pageWidth / 2 + 60, 210, 1.5, 'F');

    // Bottom section
    pdf.setFontSize(9);
    setColor(colors.mediumGrey);
    const currentYear = new Date().getFullYear();
    pdf.text(`© ${currentYear} Arykem Pharmaceuticals Pvt. Ltd.`, pageWidth / 2, pageHeight - 30, { align: 'center' });
    pdf.text('Professional Product Portfolio', pageWidth / 2, pageHeight - 20, { align: 'center' });

    // ===== PAGE 2: TABLE OF CONTENTS =====
    addPageWithBackground();
    let yPos = 40;

    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('Contents', margin, yPos);
    yPos += 15;

    // Divider
    setFillColor(colors.botanical);
    pdf.rect(margin, yPos, 40, 1, 'F');
    yPos += 15;

    // Product categories and organization
    const catalogueStructure = [
      { title: 'About Arykem', page: 3 },
      { title: 'Portfolio Overview', page: 4 },
      { title: '', page: null }, // spacer
      { title: 'REDEFINE BEAUTY', page: null, isCategory: true },
      { title: '01. MarineX', page: 5 },
      { title: '02. X-GLUTA TAB', page: 7 },
      { title: '', page: null },
      { title: 'ADVANCED SKINCARE', page: null, isCategory: true },
      { title: '03. LA3C Face Serum', page: 9 },
      { title: '', page: null },
      { title: 'GLUTATHIONE IV THERAPY', page: null, isCategory: true },
      { title: '04. X-GLUTA IV 600 mg', page: 11 },
      { title: '05. X-GLUTA IV 1200 mg', page: 13 },
      { title: '06. X-GLUTA IV 2000 mg', page: 15 },
      { title: '', page: null },
      { title: 'CLINICAL WELLNESS', page: null, isCategory: true },
      { title: '07. REPOB', page: 17 },
      { title: '08. KTOSEVEN', page: 19 },
      { title: '', page: null },
      { title: 'Product Portfolio Summary', page: 21 },
    ];

    catalogueStructure.forEach(item => {
      if (item.title === '') {
        yPos += 5;
        return;
      }

      if (item.isCategory) {
        yPos += 5;
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        setColor(colors.botanical);
        pdf.text(item.title, margin + 5, yPos);
        yPos += 7;
      } else {
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        setColor(colors.charcoal);
        
        const dots = '.'.repeat(Math.floor((contentWidth - pdf.getTextWidth(item.title) - pdf.getTextWidth(item.page.toString())) / pdf.getTextWidth('.')));
        
        pdf.text(item.title, margin + 10, yPos);
        if (item.page) {
          pdf.text(item.page.toString(), pageWidth - margin, yPos, { align: 'right' });
        }
        yPos += 6;
      }
    });

    addFooter(2, 22);

    // ===== PAGE 3: ABOUT ARYKEM =====
    addPageWithBackground();
    yPos = 40;

    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('Arykem Pharmaceuticals', margin, yPos);
    yPos += 15;

    setFillColor(colors.botanical);
    pdf.rect(margin, yPos, 50, 1, 'F');
    yPos += 12;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    setColor(colors.charcoal);
    
    const introText = [
      'Arykem Pharmaceuticals Pvt. Ltd. develops and presents science-led products across',
      'dermatology, aesthetics, skin nutrition and clinical wellness, with a focus on professional',
      'use, formulation clarity and responsible product communication.',
      '',
      'Our portfolio reflects a commitment to scientific rigor, evidence-based formulation',
      'development, and transparent communication with healthcare professionals.',
    ];

    introText.forEach(line => {
      if (line === '') {
        yPos += 5;
      } else {
        pdf.text(line, margin, yPos);
        yPos += 6;
      }
    });

    yPos += 10;

    // Portfolio categories box
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('Portfolio Categories', margin, yPos);
    yPos += 8;

    const categories = [
      { name: 'Skin Nutrition & Beauty', desc: 'Marine collagen and antioxidant formulations' },
      { name: 'Antioxidant Support', desc: 'Glutathione-based oral and IV formulations' },
      { name: 'Advanced Skincare', desc: 'Topical vitamin C and antioxidant systems' },
      { name: 'Clinical Wellness', desc: 'Probiotic and bone health support' }
    ];

    categories.forEach(cat => {
      setFillColor([245, 245, 245]);
      pdf.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'F');
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      setColor(colors.botanical);
      pdf.text(cat.name, margin + 5, yPos + 5);
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      setColor(colors.mediumGrey);
      pdf.text(cat.desc, margin + 5, yPos + 10);
      
      yPos += 18;
    });

    addFooter(3, 22);

    // ===== PAGE 4: PORTFOLIO OVERVIEW =====
    addPageWithBackground();
    yPos = 40;

    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('Portfolio Overview', margin, yPos);
    yPos += 12;

    setFillColor(colors.botanical);
    pdf.rect(margin, yPos, 50, 1, 'F');
    yPos += 12;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    setColor(colors.mediumGrey);
    pdf.text('8 formulations across 4 therapeutic categories', margin, yPos);
    yPos += 12;

    // Product grid
    const productGrid = [
      ['MarineX', 'Marine Nutrition', 'Powder (200g)'],
      ['X-GLUTA TAB', 'Antioxidant Nutrition', 'Effervescent (30 tabs)'],
      ['LA3C', 'Advanced Skincare', 'Serum (30ml)'],
      ['X-GLUTA IV 600', 'IV Therapy', 'Injection (600mg)'],
      ['X-GLUTA IV 1200', 'IV Therapy', 'Injection (1200mg)'],
      ['X-GLUTA IV 2000', 'IV Therapy', 'Injection (2000mg)'],
      ['REPOB', 'Probiotic Wellness', 'Capsules (100)'],
      ['KTOSEVEN', 'Bone Health', 'Tablets (100)'],
    ];

    // Table header
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.white);
    setFillColor(colors.charcoal);
    pdf.rect(margin, yPos, contentWidth, 8, 'F');
    pdf.text('PRODUCT', margin + 3, yPos + 5.5);
    pdf.text('CATEGORY', margin + 60, yPos + 5.5);
    pdf.text('FORM', margin + 120, yPos + 5.5);
    yPos += 8;

    // Table rows
    productGrid.forEach((row, index) => {
      if (index % 2 === 0) {
        setFillColor([248, 248, 248]);
        pdf.rect(margin, yPos, contentWidth, 10, 'F');
      }

      pdf.setFont('helvetica', 'normal');
      setColor(colors.charcoal);
      pdf.text(row[0], margin + 3, yPos + 6.5);
      
      setColor(colors.mediumGrey);
      pdf.text(row[1], margin + 60, yPos + 6.5);
      pdf.text(row[2], margin + 120, yPos + 6.5);
      
      yPos += 10;
    });

    addFooter(4, 22);

    // ===== PRODUCT PAGES =====
    // For each product, create detailed pages
    let pageNumber = 5;

    const productOrder = [
      'marinex',
      'x-gluta-tab',
      'la3c',
      'x-gluta-iv-600',
      'x-gluta-iv-1200',
      'x-gluta-iv-2000',
      'repob',
      'ktoseven'
    ];

    productOrder.forEach((slug, index) => {
      const product = products.find(p => p.slug === slug);
      if (!product) return;

      // PRODUCT PAGE 1: Hero & Overview
      addPageWithBackground();
      yPos = 30;

      // Category label
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      setColor(colors.botanical);
      pdf.text(product.category.toUpperCase(), margin, yPos);
      yPos += 10;

      // Product name
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      setColor(colors.charcoal);
      const productNameLines = pdf.splitTextToSize(product.name, contentWidth);
      productNameLines.forEach(line => {
        pdf.text(line, margin, yPos);
        yPos += 10;
      });

      yPos += 3;

      // Divider
      setFillColor(colors.botanical);
      pdf.rect(margin, yPos, 60, 0.8, 'F');
      yPos += 8;

      // Positioning/tagline
      if (product.positioning) {
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'italic');
        setColor(colors.mediumGrey);
        const posLines = pdf.splitTextToSize(product.positioning, contentWidth);
        posLines.forEach(line => {
          pdf.text(line, margin, yPos);
          yPos += 6;
        });
        yPos += 5;
      }

      // Description
      if (product.description) {
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        setColor(colors.charcoal);
        const descLines = pdf.splitTextToSize(product.description, contentWidth);
        descLines.forEach(line => {
          pdf.text(line, margin, yPos);
          yPos += 5.5;
        });
        yPos += 8;
      }

      // AT A GLANCE box
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      setColor(colors.charcoal);
      pdf.text('AT A GLANCE', margin, yPos);
      yPos += 6;

      setFillColor([248, 248, 248]);
      const glanceBoxHeight = 25;
      pdf.roundedRect(margin, yPos, contentWidth, glanceBoxHeight, 2, 2, 'F');

      pdf.setFontSize(9);
      let xOffset = margin + 5;
      
      if (product.form) {
        pdf.setFont('helvetica', 'bold');
        setColor(colors.mediumGrey);
        pdf.text('FORM', xOffset, yPos + 6);
        pdf.setFont('helvetica', 'normal');
        setColor(colors.charcoal);
        pdf.text(product.form, xOffset, yPos + 11);
        xOffset += 50;
      }

      if (product.packSize) {
        pdf.setFont('helvetica', 'bold');
        setColor(colors.mediumGrey);
        pdf.text('PACK', xOffset, yPos + 6);
        pdf.setFont('helvetica', 'normal');
        setColor(colors.charcoal);
        const packText = pdf.splitTextToSize(product.packSize, 45);
        pdf.text(packText, xOffset, yPos + 11);
        xOffset += 50;
      }

      if (product.route) {
        pdf.setFont('helvetica', 'bold');
        setColor(colors.mediumGrey);
        pdf.text('ROUTE', xOffset, yPos + 6);
        pdf.setFont('helvetica', 'normal');
        setColor(colors.charcoal);
        pdf.text(product.route, xOffset, yPos + 11);
      }

      yPos += glanceBoxHeight + 10;

      // COMPOSITION
      if (product.composition && product.composition.length > 0) {
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        setColor(colors.charcoal);
        pdf.text('COMPOSITION', margin, yPos);
        yPos += 8;

        product.composition.forEach(comp => {
          if (yPos > pageHeight - 40) {
            addFooter(pageNumber, 22, product.name);
            pageNumber++;
            addPageWithBackground();
            yPos = 40;
          }

          // Ingredient box
          setFillColor([245, 245, 245]);
          const boxHeight = 18;
          pdf.roundedRect(margin, yPos, contentWidth, boxHeight, 1, 1, 'F');

          pdf.setFontSize(10);
          pdf.setFont('helvetica', 'bold');
          setColor(colors.charcoal);
          pdf.text(comp.ingredient, margin + 4, yPos + 6);

          pdf.setFontSize(9);
          pdf.setFont('helvetica', 'bold');
          setColor(colors.botanical);
          pdf.text(comp.amount, margin + 4, yPos + 11);

          pdf.setFontSize(8);
          pdf.setFont('helvetica', 'normal');
          setColor(colors.mediumGrey);
          const roleLines = pdf.splitTextToSize(comp.role, contentWidth - 10);
          let roleY = yPos + 15;
          roleLines.slice(0, 1).forEach(line => {
            pdf.text(line, margin + 4, roleY);
            roleY += 4;
          });

          yPos += boxHeight + 3;
        });

        yPos += 5;
      }

      addFooter(pageNumber, 22, product.name);
      pageNumber++;

      // PRODUCT PAGE 2: Benefits & Professional Info
      addPageWithBackground();
      yPos = 40;

      // Benefits
      if (product.benefits && product.benefits.length > 0) {
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        setColor(colors.charcoal);
        pdf.text('KEY SUPPORT AREAS', margin, yPos);
        yPos += 8;

        product.benefits.forEach(benefit => {
          if (yPos > pageHeight - 40) {
            addFooter(pageNumber, 22, product.name);
            pageNumber++;
            addPageWithBackground();
            yPos = 40;
          }

          pdf.setFontSize(9);
          pdf.setFont('helvetica', 'normal');
          setColor(colors.charcoal);
          
          // Bullet point
          setFillColor(colors.botanical);
          pdf.circle(margin + 2, yPos - 1.5, 1, 'F');
          
          const benefitLines = pdf.splitTextToSize(benefit, contentWidth - 8);
          benefitLines.forEach(line => {
            pdf.text(line, margin + 6, yPos);
            yPos += 5;
          });
          yPos += 2;
        });

        yPos += 8;
      }

      // HCP Discussion Points
      if (product.hcpDiscussionPoints && product.hcpDiscussionPoints.length > 0) {
        if (yPos > pageHeight - 60) {
          addFooter(pageNumber, 22, product.name);
          pageNumber++;
          addPageWithBackground();
          yPos = 40;
        }

        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        setColor(colors.charcoal);
        pdf.text('FOR HEALTHCARE PROFESSIONALS', margin, yPos);
        yPos += 8;

        product.hcpDiscussionPoints.forEach(point => {
          if (yPos > pageHeight - 35) {
            addFooter(pageNumber, 22, product.name);
            pageNumber++;
            addPageWithBackground();
            yPos = 40;
          }

          pdf.setFontSize(9);
          pdf.setFont('helvetica', 'normal');
          setColor(colors.mediumGrey);
          
          // Small square bullet
          setFillColor(colors.botanical);
          pdf.rect(margin + 1, yPos - 2, 2, 2, 'F');
          
          const pointLines = pdf.splitTextToSize(point, contentWidth - 8);
          pointLines.forEach(line => {
            pdf.text(line, margin + 6, yPos);
            yPos += 5;
          });
          yPos += 2;
        });
      }

      // Prescription/Warning info
      if (product.prescriptionStatus || product.warning || product.disclaimer) {
        yPos += 8;

        if (yPos > pageHeight - 50) {
          addFooter(pageNumber, 22, product.name);
          pageNumber++;
          addPageWithBackground();
          yPos = 40;
        }

        setFillColor([255, 250, 240]);
        const infoBoxHeight = 20;
        pdf.roundedRect(margin, yPos, contentWidth, infoBoxHeight, 2, 2, 'F');

        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'bold');
        setColor(colors.charcoal);
        
        let infoText = '';
        if (product.prescriptionStatus) infoText += product.prescriptionStatus + ' ';
        if (product.warning) infoText += product.warning;
        
        if (infoText) {
          const infoLines = pdf.splitTextToSize(infoText, contentWidth - 10);
          let infoY = yPos + 6;
          infoLines.forEach(line => {
            pdf.text(line, margin + 5, infoY);
            infoY += 4;
          });
        }

        yPos += infoBoxHeight + 5;
      }

      addFooter(pageNumber, 22, product.name);
      pageNumber++;
    });

    // ===== FINAL PAGE: PORTFOLIO SUMMARY =====
    addPageWithBackground();
    yPos = 40;

    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.charcoal);
    pdf.text('Arykem Product Portfolio', margin, yPos);
    yPos += 10;

    setFillColor(colors.botanical);
    pdf.rect(margin, yPos, 60, 1, 'F');
    yPos += 12;

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    setColor(colors.mediumGrey);
    pdf.text('Complete overview of our professional pharmaceutical portfolio', margin, yPos);
    yPos += 15;

    // Final summary table with all 8 products
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'bold');
    setColor(colors.white);
    setFillColor(colors.charcoal);
    pdf.rect(margin, yPos, contentWidth, 7, 'F');
    pdf.text('PRODUCT', margin + 2, yPos + 4.5);
    pdf.text('CATEGORY', margin + 50, yPos + 4.5);
    pdf.text('KEY POSITIONING', margin + 95, yPos + 4.5);
    yPos += 7;

    productOrder.forEach((slug, index) => {
      const product = products.find(p => p.slug === slug);
      if (!product) return;

      if (index % 2 === 0) {
        setFillColor([248, 248, 248]);
        pdf.rect(margin, yPos, contentWidth, 12, 'F');
      }

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(9);
      setColor(colors.charcoal);
      pdf.text(product.name, margin + 2, yPos + 4);

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(8);
      setColor(colors.mediumGrey);
      const catText = pdf.splitTextToSize(product.category, 40);
      pdf.text(catText[0], margin + 50, yPos + 4);

      const posText = pdf.splitTextToSize(product.shortDescription || product.positioning || '', 65);
      pdf.text(posText[0], margin + 95, yPos + 4);

      yPos += 12;
    });

    // Closing statement
    yPos += 10;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    setColor(colors.charcoal);
    const closingLines = pdf.splitTextToSize(
      'For comprehensive product information, formulation details, and professional inquiries, please contact Arykem Pharmaceuticals.',
      contentWidth
    );
    closingLines.forEach(line => {
      pdf.text(line, margin, yPos);
      yPos += 5.5;
    });

    addFooter(pageNumber, 22);

    // Save the PDF
    pdf.save('APPL Product Catalogue.pdf');

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
