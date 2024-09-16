"use client";
import React, { useEffect } from 'react';
import html2pdf from 'html2pdf.js';

const PdfGenerator = ({ content }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && content && typeof content === 'object') {
      html2pdf()
        .from(content)
        .toPdf()
        .get('pdf')
        .then(pdf => {
          pdf.save('invoice.pdf');
        })
        .catch(error => {
          console.error('Error generating PDF:', error);
        });
    }
  }, [content]);

  return null; // No es necesario renderizar nada
};

export default PdfGenerator;
