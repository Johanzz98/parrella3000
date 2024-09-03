import HeaderAdmin from "@/components/HeaderAdmin";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mockTransactions } from "@/data/mockData";
import { DownloadOutlined } from "@mui/icons-material";

import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LineChart from "@/components/LineChart";

import StatBox from "@/components/StatBox";
import ProgressCircles from "@/components/ProgressCircles";
import BarChart from "@/components/BarChart";
import { colorcito } from "@/app/DashboardAdmin/theme";
import { useSelector } from "react-redux";
import axios from "@/api/axios";
import Contacts from "../Contacts/Contacts";
const AUTH_ME = "/auth/me";
const Dashboard = () => {
  const theme = useTheme();
  const colors = colorcito(theme.palette.mode);
  const [fullName, setFullName] = useState("");
  const token = useSelector((state) => state.auth.token); // Obtener el token del estado de Redux
  const obtenerMiData = async () => {
    try {
      if (!token) {
        return; // Salir de la función si el token no está disponible en el estado de Redux
      }

      const response = await axios.get(AUTH_ME, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Actualizar el estado fullName con el valor obtenido de la respuesta
      setFullName(response.data.data.person.fullName);
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
    }
  };

  useEffect(() => {
    obtenerMiData();
  }, [token]); // Ejecutar el efecto cuando el token cambie

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <HeaderAdmin
          title={`Welcome Back, ${fullName}`}
          subtitle="Here's what happening with your store today"
        />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="2px solid #C4EFFF"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80%"
        >
          <StatBox
            title="12,361"
            subtitle="Total Page Views"
            progress="0.75"
            increase="+14%"
            showThisYearText1={true}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="2px solid #C4EFFF"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80%"
        >
          <StatBox
            title="431,225"
            subtitle="Total Users"
            progress="0.50"
            increase="+21%"
            showThisYearText2={true}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="2px solid #C4EFFF"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80%"
        >
          <StatBox
            title="32,441"
            subtitle="Total Order"
            showThisYearText3={true}
            less="+5%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="white"
          border="2px solid #C4EFFF"
          borderRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80%"
        >
          <StatBox
            title="1,325,134"
            subtitle="Total Sales"
            less="-43%"
            showThisYearText3={true}
          />
        </Box>

        {/* Row 2 */}
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="white"
          border="2px solid #C4EFFF"
          borderRadius="24px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: "auto",
                }}
              >
                Revenue Generated
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "200",
                  color: "grey",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontFamily: "Helvetica, sans-serif",
                  fontOpticalSizing: "auto",
                }}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircles size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
      <Contacts />
    </Box>
  );
};

export default Dashboard;
