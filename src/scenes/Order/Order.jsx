import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "./mockData";
import Header from '@/components/HeaderAdmin';
import DrawerOrder from './DrawerOrder';
import PerfilOrder from './PerfilOrder'; // Asegúrate de tener este componente

const Order = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [view, setView] = useState('orders'); // 'orders' para la lista, 'perfil' para el perfil

  const handleRowClick = (params) => {
    setSelectedOrder(params.row);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedOrder(null);
  };

  const handleEditOrder = () => {
    setDrawerOpen(false);
    setView('perfil');
  };

  const handleBackToOrders = () => {
    setView('orders');
  };

  const overlayStyle = drawerOpen ? {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(2px)',
    zIndex: 1200,
    pointerEvents: 'none',
  } : {};

  const statusColors = {
    InProgress: '#FFC107',
    UnPaid: '#F44336',
    Paid: '#4CAF50',
    Cancel: '#9E9E9E',
  };

  const orderStatusColors = {
    Completed: '#2196F3',
    Incompleted: '#F44336',
    InProgress: '#FFC107',
    Cancel: '#9E9E9E',
  };

  const calculateTotal = (items, shippingCost) => {
    const itemTotal = items.reduce((total, item) => total + item.items * item.price, 0);
    return itemTotal + (shippingCost || 0);
  };

  const updatedMockDataContacts = mockDataContacts.map(order => ({
    ...order,
    total: calculateTotal(order.itemDetails || [], order.shippingCost || 0)
  }));

  const columns = [
    { field: "orderId", headerName: "Order Id", width: 120, editable: false },
    { field: "created", headerName: "Created at", width: 180, editable: false },
    {
      field: "customer",
      headerName: "Customer",
      width: 180,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 'auto',
            pointerEvents: 'none',
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
    {
      field: "total",
      headerName: "Total",
      width: 180,
     
      editable: false,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Alinea el contenido a la izquierda
            alignItems: "center",
            width: '100%', // Ocupa todo el ancho de la celda
            padding: '0 8px', // Opcional: añade un poco de espacio interior
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "Helvetica, sans-serif",
              textAlign: 'left', // Alinea el texto a la izquierda
              color: 'black', // Asegúrate de que el color sea visible sobre el fondo
            }}
          >
            {params.value}
          </Typography>
        </Box>
      ),
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 180,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 'auto',
            backgroundColor: statusColors[params.value] || 'transparent',
            color: 'white',
            borderRadius: '4px',
            padding: '4px 8px',
          }}
        >
          <Typography
            sx={{
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
    { field: "items", headerName: "Items", width: 180, editable: false },
    {
      field: "orderStatus",
      headerName: "Order Status",
      width: 180,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 'auto',
            backgroundColor: orderStatusColors[params.value] || 'transparent',
            color: 'white',
        
            borderRadius: '4px',
            padding: '4px 8px',
          }}
        >
          <Typography
            sx={{
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
  ];

  return (
    <Box m="20px">
      <Header title="Orders" subtitle="List of orders for future reference" />
      {view === 'orders' && (
     <Box
     m="40px 0 0 0"
     height="75vh"
     sx={{
       position: 'relative',
       "& .MuiDataGrid-root": {
         border: "none",
       },
       "& .MuiDataGrid-cell": {
         borderBottom: "none",
         padding: "8px",
         textAlign: 'left', // Alineación del contenido de la celda
       },
       "& .MuiDataGrid-columnHeaders": {
         backgroundColor: "blue",
         borderBottom: "none",
         "& .MuiDataGrid-columnHeaderTitle": {
           textAlign: 'left', // Alineación del texto en el encabezado de la columna
         },
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
       "& .MuiDataGrid-columnSeparator": {
         display: "none",
       },
       "& .MuiDataGrid-row": {
         cursor: 'pointer',
       },
       "& .MuiDataGrid-row.Mui-selected": {
         backgroundColor: 'transparent',
       },
       "& .MuiDataGrid-cell:focus": {
         outline: 'none',
       },
     }}
   >
          <DataGrid
            rows={updatedMockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row) => row.orderId}
            disableSelectionOnClick
            disableColumnSelector
            onRowClick={handleRowClick}
          />
        </Box>
      )}

      {view === 'perfil' && (
        <PerfilOrder
          order={selectedOrder}
          onBackClick={handleBackToOrders}
        />
      )}

      {drawerOpen && (
        <>
          <Box sx={overlayStyle} />
          <DrawerOrder
            open={drawerOpen}
            onClose={handleCloseDrawer}
            order={selectedOrder}
            onEditOrder={handleEditOrder}
          />
        </>
      )}
    </Box>
  );
};

export default Order;
