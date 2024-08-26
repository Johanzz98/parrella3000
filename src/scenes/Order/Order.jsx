import { Box, Typography } from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "./mockData";
import Header from '@/components/HeaderAdmin';

const Order = () => {
  const columns = [
    { field: "orderId", headerName: "Order Id", flex: 0.5 },
    { field: "created", headerName: "Created at" },
    {
      field: "customer",
      headerName: "Customer",
      renderCell: (params) => (
        <Box
          sx={{
            border: "1px solid #149285",
            width: "auto",
            height: "auto",
            borderRadius: "12px",
            marginTop: '12px',
            backgroundColor: "#f0f4f8", // Optional background color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#2ccebe",
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            {params.value}
          </Typography>
        </Box>
      ),
    },
    { field: "total", headerName: "Total", flex: 1 },
    { field: "items", headerName: "Items", flex: 1 },
    { field: "orderStatus", headerName: "Order Status", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Orders" subtitle="List of orders for future reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "blue",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "purple",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "grey",
          },
          // Disable column resizing
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.orderId} // Use orderId as the unique identifier
          disableColumnReorder={false} // Ensure column reordering is disabled
          disableColumnResize={false} // Disable column resizing
        />
      </Box>
    </Box>
  );
};

export default Order;
