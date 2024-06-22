import { Box } from '@mui/material'
import React from 'react'

import HeaderAdmin from '@/components/HeaderAdmin';
import LineChart from '@/components/LineChart';


const LineaChart = () => {
  return (
    <Box m="20px">
        <HeaderAdmin title="Line Chart" subtitle={"Simple Line Chart"} />
        <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  )
}

export default LineaChart