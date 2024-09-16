"use client";
import { useCallback } from 'react';
import html2pdf from 'html2pdf.js';

export const usePdfGenerator = () => {
  const handleDownload = useCallback((content) => {
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
  }, []);

  return handleDownload;
};
