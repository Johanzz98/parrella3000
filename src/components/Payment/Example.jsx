import React from "react";
import { Box, Typography } from "@mui/material";

const Example = () => {
  return (
    <Box>
      {/* Credit Card Title */}
      <Box sx={{ marginLeft: "14px" }}>
        <Typography
          sx={{
            fontSize: "18px",

            color: "#111",
            display: "flex",

            justifyContent: "flex-start",
            alignItems: "center",
            fontFamily: "Helvetica, sans-serif",
            fontOpticalSizing: "auto",
          }}
        >
          Credit Card
        </Typography>
        <Box
          sx={{
            borderBottom: "2px solid black",
            width: "22%",
            marginBottom: "20px",
          }}
        />
      </Box>

      {/* Accepted Card Logos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "20px",
          marginLeft: "12px",
        }}
      >
        <img
          src={`../../assets/static/CheckOut/MACH.svg`}
          alt="MACH Logo"
          style={{
            width: "54px",
            height: "auto",
            marginLeft: "6px",
            marginRight: "12px",
          }}
        />
        <img
          src={`../../assets/static/CheckOut/American.svg`}
          alt="American Express Logo"
          style={{
            width: "54px",
            height: "auto",
            marginLeft: "6px",
            marginRight: "12px",
          }}
        />
        <img
          src={`../../assets/static/CheckOut/master.png`}
          alt="MasterCard Logo"
          style={{
            width: "54px",
            height: "auto",
            marginLeft: "6px",
            marginRight: "12px",
          }}
        />
        <img
          src={`../../assets/static/CheckOut/visa.svg`}
          alt="Visa Logo"
          style={{
            width: "54px",
            height: "auto",
            marginLeft: "6px",
            marginRight: "6px",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          marginLeft: "12px",
          color: "grey",
          display: "flex",
          marginTop: "-24px",
          marginBottom: "12px",
          justifyContent: "flex-start",
          alignItems: "center",
          fontFamily: "Helvetica, sans-serif",
          fontOpticalSizing: "auto",
        }}
      >
        We support the card type above
      </Typography>
      {/* Gray Box Container */}
      <Box
        sx={{
          backgroundColor: "#eeeeee",
          padding: "24px",
          borderRadius: "16px",
          marginBottom: "20px",
          width: "460px",
          height: "240px",
        }}
      >
        {/* Card Number Section */}
        <Box sx={{ marginBottom: "20px", marginTop: "24px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "550",
              color: "grey",
              display: "flex",
              marginBottom: "8px",

              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
            }}
          >
            Card Number
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "550",
              color: "#111",
              display: "flex",

              justifyContent: "flex-start",
              alignItems: "center",
              fontFamily: "Helvetica, sans-serif",
              fontOpticalSizing: "auto",
            }}
          >
            1234 4567 7890 1234
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            marginTop: "46px",
          }}
        >
          {/* Card Holder Name Section */}
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "550",
                color: "grey",
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Card Holder Name
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "550",
                color: "#111",
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Nombre y apellido
            </Typography>
          </Box>

          {/* Expiry Date Section */}
          <Box sx={{ marginRight: "124px" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "550",
                color: "grey",
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              Expiry Date
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "550",
                color: "#111",
                display: "flex",

                justifyContent: "flex-start",
                alignItems: "center",
                fontFamily: "Helvetica, sans-serif",
                fontOpticalSizing: "auto",
              }}
            >
              12/30
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Example;
