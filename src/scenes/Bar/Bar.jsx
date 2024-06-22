import { Box } from '@mui/material'
import React from 'react'
import BarChart from '@/components/BarChart'
import HeaderAdmin from '@/components/HeaderAdmin';

const Bar = () => {
  return (
    <Box m="20px">
        <HeaderAdmin title="Bar Chart" subtitle={"Simple Bar Chart"} />
        <Box height="75vh">
            <BarChart/>
        </Box>
        </Box>
  )
}

export default Bar