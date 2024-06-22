import { Box } from '@mui/material'
import React from 'react'

import HeaderAdmin from '@/components/HeaderAdmin';
import ProductPage from '@/components/ProductPage';

const Bar = () => {
  return (
    <Box m="20px">
        <HeaderAdmin title="Product Page" subtitle={"Simple Prodcut Page"} />
        <Box height="75vh">
            <ProductPage/>
        </Box>
        </Box>
  )
}

export default Bar