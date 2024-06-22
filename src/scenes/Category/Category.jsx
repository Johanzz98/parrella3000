import { Box } from '@mui/material'
import React from 'react'

import HeaderAdmin from '@/components/HeaderAdmin';
import Categories from '@/components/dashboardAdmin/Category';

const Bar = () => {
  return (
    <Box m="20px">
        <HeaderAdmin title="Categoriest Page" subtitle={"Simple Categories Page"} />
        <Box height="75vh">
            <Categories/>
        </Box>
        </Box>
  )
}

export default Bar