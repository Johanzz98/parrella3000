import { Box } from '@mui/material'
import React from 'react'

import HeaderAdmin from '@/components/HeaderAdmin';
import PieChart from '@/components/PieChart';

const Bar = () => {
  return (
    <Box m="20px">
        <HeaderAdmin title="Pie Chart" subtitle={"Simple Pie Chart"} />
        <Box height="75vh">
            <PieChart/>
        </Box>
        </Box>
  )
}

export default Bar