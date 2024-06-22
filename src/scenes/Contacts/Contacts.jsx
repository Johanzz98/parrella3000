import { Box, Typography } from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "@/data/mockData";

import Header from '@/components/HeaderAdmin';



const Contacts = () => {
  const columns = [
    { field: "id", headerName: "ID", flex:0.5 },
    { field:"registrarId", headerName:"Registrar ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Addres", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "ZipCode", headerName: "ZipCode", flex: 1 },
    

  ];

  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="List of contacts For Future  References" />
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
          "& .name-column--cell": {
            color: 'green',
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
          color:"grey"
        }
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar:GridToolbar}} />
      </Box>
    </Box>
  );
};

export default Contacts;
