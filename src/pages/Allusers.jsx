import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Allusers = () => {
  const deleteUser = async (id) => {
    try {
      const res = await axios.delete("http://localhost:8000/users/user/" + id);
      console.log(res);
      toast.success("user deleted ");
      getAllUsers();
    } catch (err) {
      console.log(err);
    }
  };
  const editUser = async (id) => {
    try {
      const res = await axios.put("http://localhost:8000/users/user/" + id);
      console.log(res);
      getAllUsers();
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 250,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", gap: "5px" }}>
            <button className="btn btn-primary" onClick={() => editUser(params.row._id)}> <Link to={`/edituser/${params.row._id}`}>Edit</Link></button>
            <Button
              variant="contained"
              style={{ background: "#e57373" }}
              className="btn btn-danger"
              onClick={() => deleteUser(params.row._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/users/user");
      setUsers(res.data.data);
      toast.success("received user ");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1000} />
      <h1>Users</h1>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
      ></DataGrid>
    </>
  );
};
