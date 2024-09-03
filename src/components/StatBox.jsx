import { Box, Typography } from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
  less,
  showThisYearText,
  showThisYearText1,
  showThisYearText2,
  showThisYearText3,
}) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "grey",
            paddingBottom: "2px",
            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica, sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          {subtitle}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
            }}
          >
            {title}
          </Typography>

          {increase && (
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "200",
                color: "#5096F2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                border: "2px solid #6FC6FC",
                width: "72px",
                borderRadius: "6px",
                backgroundColor: "#E5F0FF",
                fontOpticalSizing: "auto",
                marginLeft: "12px",
              }}
            >
              <TrendingUpIcon sx={{ fontSize: "14px", padding: "6px" }} />
              {increase}
            </Typography>
          )}

          {less && (
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "200",
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                border: "2px solid #6FC6FC",
                width: "72px",
                borderRadius: "6px",
                backgroundColor: "#E5F0FF",
                fontOpticalSizing: "auto",
                marginLeft: "12px",
              }}
            >
              <TrendingDownIcon sx={{ fontSize: "14px", padding: "6px" }} />
              {less}
            </Typography>
          )}
        </Box>
      </Box>

      {showThisYearText && (
        <Box mt={1}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "200",
              color: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
              marginLeft: "-4px",
            }}
          >
            You made an extra
            <Box component="span" sx={{ color: "gold", mx: 0.5 }}>
              35,000
            </Box>
            this year
          </Typography>
        </Box>
      )}

      {showThisYearText1 && (
        <Box mt={1}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "200",
              color: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
              marginLeft: "-4px",
            }}
          >
            You made an extra
            <Box component="span" sx={{ color: "gold", mx: 0.5 }}>
              35,000
            </Box>
            this year
          </Typography>
        </Box>
      )}

      {showThisYearText2 && (
        <Box mt={1}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "200",
              color: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
              marginLeft: "-24px",
            }}
          >
            You made an extra
            <Box component="span" sx={{ color: "gold", mx: 0.5 }}>
              42,000
            </Box>
            this year
          </Typography>
        </Box>
      )}
      {showThisYearText3 && (
        <Box mt={1}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "200",
              color: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
              marginLeft: "-24px",
            }}
          >
            You made a less
            <Box component="span" sx={{ color: "red", mx: 0.5 }}>
              35,000
            </Box>
            this year
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default StatBox;
