"use client";

import React from 'react'
import InfoFinal from '@/components/InfoFinal';
import { Box } from '@mui/material';
import Mobile from './Mobile';
import MuestraMobile from './MuestraMobile';
import Look from './Look';
;

const PageMobile = () => {
    return (
 
        <Box>
          
        <Mobile />
        <MuestraMobile />
      
        <Look />
 
              <InfoFinal/>
        
              </Box>
       
   
    );
  }
  export default PageMobile