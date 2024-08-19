import { Typography, Box } from "@mui/material";
import React from 'react';

const HeaderAdmin = ({ title, subtitle, sx }) => {
  return (
    <Box mb="30px"  ml="16px">
      <Typography sx={{ color: 'black', mb: '5px' }}>
        {title}
      </Typography>
      <Typography sx={{ color: "black" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeaderAdmin;