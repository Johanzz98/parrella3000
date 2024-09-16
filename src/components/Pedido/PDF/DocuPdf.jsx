"use client";
import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import html2pdf from 'html2pdf.js';
import InvoiceContainer from './InvoiceContainer';

const DocuPdf = () => {
  const invoiceRef = useRef(null);

  const handleButtonClick = () => {
    if (invoiceRef.current) {
      const element = invoiceRef.current;

      // Opciones para html2pdf
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5], // Asegúrate de que los márgenes no oculten el contenido
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 1.0 }, // Aumentar la calidad de la imagen
        html2canvas: {
          scale: 2, // Aumentar la escala para mejorar la calidad de la imagen
          useCORS: true, // Habilitar CORS para imágenes externas
          logging: true // Habilitar logging para depuración
        },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      try {
        html2pdf().from(element).set(opt).save().then(() => {
          console.log('PDF generated and downloaded successfully.');
        }).catch(error => {
          console.error('Error generating PDF:', error);
        });
      } catch (error) {
        console.error('Error initializing html2pdf:', error);
      }
    } else {
      console.error('Reference to the invoice container is not available.');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'none' }}>
        <InvoiceContainer ref={invoiceRef} />
      </Box>
      <Box sx={{ marginTop: '6px', marginBottom: '24px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          sx={{
            border: "none",
            outline: "0",
            marginTop: "14px",
            color: "white",
            backgroundColor: "#ff8548",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "12px",
            borderRadius: "12px",
            boxShadow: "none",
            width: "100%",
            "&:hover": {
              backgroundColor: '#1667C2',
              color: "#ffff",
              boxShadow: "none",
            },
          }}
        >
          Download Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default DocuPdf;
