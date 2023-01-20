import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import "./Notes.css";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Notes() {
  const [id, setid] = useState(1);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "name", headerName: "Full Name", width: 220 },
    { field: "email", headerName: "Email", width: 400 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      renderCell: ({ row }) => (
        <>
          <Button
            onClick={() => editData(row)}
            variant="contained"
            color="success"
          >
            {" "}
            <EditIcon />
          </Button>

          <Button
            onClick={() => deleteData(row)}
            variant="contained"
            color="error"
            style={{ marginLeft: "5px" }}
          >
            {" "}
            <DeleteIcon />
          </Button>
        </>
      ),
    },
  ];

  const AddNote = () => {
    setid(id >= 0 ? id + 1 : 1);
    setData(
      // Adding previous data with new data from name and email
      [
        ...data,
        {
          id: id,
          name: name,
          email: email,
        },
      ]
    );

    setName("");
    setEmail("");
  };

  const editData = (row) => {
    var idToRemove = row.id;
    setName(row.name);
    setEmail(row.email);
    const objIndex = data.findIndex((obj) => obj.id == idToRemove);
    data[objIndex].name = name;
    data[objIndex].email = email;
  };

  const deleteData = (row) => {
    var idToRemove = row.id;
    if (data.length == 1) {
      setid(1);
    }
    setData(data.filter((item) => item.id !== idToRemove));
  };

  return (
    <div>
      <Header title={"React Notes"} />
      <div className="NotesContainer">
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autoComplete="off"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />

        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="off"
          className="emailField"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <Button className="addBtn" variant="contained" onClick={AddNote}>
          <AddIcon /> Add Notes
        </Button>
      </div>

      <div className="NotesListContainer">
        <div style={{ height: 400, width: "70%" }}>
          <DataGrid
            sx={{ boxShadow: 3 }}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;
