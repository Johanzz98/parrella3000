import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import axios from "@/api/axios"; // Asegúrate de tener la ruta correcta para tu archivo axios
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import RegisterAdmin from "../form/form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notFound = () => {
  toast.error(
    "Acceso denegado. Solo usuarios con el rol SUPER_ADMIN pueden eliminar usuarios.",
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    },
  );
};

const Unauthorized = () => {
  toast.error(
    "No tienes permisos para crear una nueva cuenta de administrador.",
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    },
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.auth.token);

  const [deleteUserId, setDeleteUserId] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState("");
  const userRole = token ? JSON.parse(atob(token.split(".")[1])).role : null;
  const [open, setOpen] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  useEffect(() => {
    const userRole = token ? JSON.parse(atob(token.split(".")[1])).role : null;
    setIsSuperAdmin(userRole === "SUPER_ADMIN");
  }, [token]);

  const handleClickOpen = () => {
    if (isSuperAdmin) {
      setOpen(true);
    } else {
      Unauthorized();
    }
  };
  const handleUpdateAdminList = async () => {
    try {
      await fetchUsers(); // Llamar a fetchUsers para actualizar la lista de usuarios
      toast.success("Nuevo administrador creado correctamente.");
    } catch (error) {
      toast.error("Error al actualizar la lista de administradores:", error);
      toast.error("Error al crear el administrador.");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchUsers = async () => {
    try {
      if (!token) {
        return;
      }

      const response = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const transformedData = response.data.data.map((user, index) => ({
        ...user,
        id: index + 1,
        realId: user._id, // Asume que _id es el campo que contiene el ID real del usuario
        fullName: user.person.fullName,
      }));

      setUsers(transformedData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const handleEdit = (realId) => {
    setEditUserId(realId);
  };

  const handleDelete = (realId) => {
    const userRole = token ? JSON.parse(atob(token.split(".")[1])).role : null;

    if (userRole !== "SUPER_ADMIN") {
      notFound();
      return;
    }

    const userToDelete = users.find((user) => user.realId === realId);
    if (!userToDelete) {
      toast.error("Usuario no encontrado.");
      return;
    }

    setDeleteUserId(realId);
  };

  const removeUser = async () => {
    if (!deleteUserId) {
      return;
    }

    try {
      const response = await axios.delete(`/user/${deleteUserId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if ([200, 202].includes(response.status)) {
        // Llamada a fetchUsers para actualizar la lista de usuarios
        fetchUsers();
        toast.success("Usuario eliminado correctamente.");
        setDeleteUserId(null);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {}
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      renderCell: (params) => (
        <div style={{ pointerEvents: "none" }}>{params.value}</div>
      ),
    },
    {
      field: "role",
      headerName: "Role",
      width: 110,
      renderCell: (params) => {
        let styles = {};
        if (params.value === "ADMIN") {
          styles.color = "gold";
          styles.padding = "4px";
          styles.borderRadius = "4px";
        }
        if (params.value === "CLIENT") {
          styles.color = "red";
          styles.padding = "4px";
          styles.borderRadius = "4px";
        }
        return (
          <div style={{ ...styles, pointerEvents: "none" }}>{params.value}</div>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      description: "The full name of the user",
      width: 160,
      renderCell: (params) => (
        <div style={{ pointerEvents: "none" }}>{params.value}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div>
          <span style={{ margin: "0 10px" }}></span>
          <button onClick={() => handleDelete(params.row.realId)}>
            <DeleteIcon sx={{ color: "black" }} />
          </button>
        </div>
      ),
    },
  ];

  if (userRole !== "SUPER_ADMIN" && userRole !== "ADMIN") {
    return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <Typography variant="h6" style={{ color: "red" }}>
          Acceso denegado. Solo usuarios con los roles SUPER_ADMIN o ADMIN
          pueden acceder a esta vista.
        </Typography>
      </div>
    );
  }

  return (
    <Box style={{ height: "400px", marginLeft: "14px" }}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="colored"
        style={{ fontSize: "12px", width: "446px", right: 5 }} // Establece el tamaño y estilo del ToastContainer
      />

      <Box>
        <Button
          variant="outlined"
          sx={{
            border: "none",
            outline: "0",
            marginTop: "14px",
            color: "white",
            backgroundColor: "#000",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "18px",
            marginBottom: "12px",
            "&:hover": {
              backgroundColor: "black",
              color: "grey",
              boxShadow: "none",
            },
          }}
          onClick={handleClickOpen}
        >
          Crear una nueva Cuenta Admin
        </Button>
        <RegisterAdmin
          open={open}
          onClose={handleClose}
          onUpdateAdminList={handleUpdateAdminList}
        />
      </Box>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Dialog open={!!deleteUserId} onClose={() => setDeleteUserId(null)}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteUserId(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={removeUser} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserList;
