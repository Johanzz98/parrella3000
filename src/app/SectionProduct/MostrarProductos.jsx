import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Grid } from "@mui/material";

const cardStyle = {
  maxWidth: "563.6px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "0",
  boxShadow: "none",
  marginBottom: "-20px",
  marginRight: "-19px",
};

const cardStyle2 = {
  width: "400px",
  margin: "0 auto 12px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "12px",
  transition: "transform 0.6s ease",
  position: "relative",
  cursor: "pointer",
};

const mediaStyle = {
  width: "100%",
  objectFit: "contain",
  transition: "transform 0.3s ease-in-out",
};

const smallMediaStyle = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

const productContainerStyle = {
  margin: "-2px -2px",
};

export default function MostrarProductos(props) {
  const [zoomScale, setZoomScale] = useState({});
  const [zoomPosition, setZoomPosition] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const handleZoomClick = (id, e) => {
    if (selectedItem === id) {
      setZoomScale({ ...zoomScale, [id]: 1 });
      setSelectedItem(null);
    } else {
      const rect = e.target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ ...zoomPosition, [id]: { x, y } });
      setZoomScale({ ...zoomScale, [id]: 4 });
      setSelectedItem(id);
    }
  };

  const handleMouseLeave = (id) => {
    setZoomScale({ ...zoomScale, [id]: 1 });
  };

  const handleMouseMove = (id, e) => {
    if (zoomScale[id] !== 4) return;
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ ...zoomPosition, [id]: { x, y } });
  };

  return (
    <Grid container spacing={3} justifyContent="flex-start">
      {props.items.map((item) => (
        <Grid item key={item.id}>
          <Box style={productContainerStyle}>
            <Card sx={item.isSmallScreen ? cardStyle2 : cardStyle}>
              <div
                onClick={(e) => handleZoomClick(item.id, e)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                onMouseMove={(e) => handleMouseMove(item.id, e)}
                style={{
                  cursor:
                    selectedItem === item.id
                      ? `url('../../../assets/menos.svg'), auto`
                      : `url('../../../assets/plus.svg'), auto`,
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imageurl}
                  alt="product image"
                  sx={{
                    ...(item.isSmallScreen ? smallMediaStyle : mediaStyle),

                    transform: `scale(${zoomScale[item.id] || 1})`,
                    transformOrigin: zoomPosition[item.id]
                      ? `${zoomPosition[item.id].x}% ${zoomPosition[item.id].y}%`
                      : "center",
                  }}
                />
              </div>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
