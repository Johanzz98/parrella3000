"use client";
import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import html2pdf from 'html2pdf.js'; // Asegúrate de que esta importación es correcta
import InvoiceContainer from './InvoiceContainer';

const DocuPdf = () => {
  const invoiceRef = useRef(null);

  const handleButtonClick = () => {
    if (invoiceRef.current) {
      const element = invoiceRef.current;

      // Opciones para html2pdf
      const opt = {
        margin: 0.5,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      try {
        // Generar y descargar el PDF
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
