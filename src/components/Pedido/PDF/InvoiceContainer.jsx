"use client";
import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import InvoiceLeftPdf from './InvoiceLeftPdf';
import InvoiceRightPdf from './InvoiceRightPdf';

const InvoiceContainer = forwardRef((props, ref) => (
  <Box ref={ref}>
    <InvoiceLeftPdf />
    {/* Salto de página usando un contenedor con estilo CSS */}
    <Box sx={{ pageBreakAfter: 'always' }} />
    <InvoiceRightPdf />
  </Box>
));

export default InvoiceContainer;
