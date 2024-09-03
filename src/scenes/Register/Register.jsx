import Register from "@/components/dashboardAdmin/Register";
import { Box } from "@mui/material";
import React from "react";

const Bar = () => {
  return (
    <Box m="20px">
      <HeaderAdmin title="Register Page" subtitle={"Simple RegisterPage"} />
      <Box height="75vh">
        <Register />
      </Box>
    </Box>
  );
};

export default Bar;
