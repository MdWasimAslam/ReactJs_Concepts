import React, { useState, useRef } from "react";
import Header from "../Header";
import "./Crud.css";
function Crud() {
  const list = [
    // {
    //   id: 1,
    //   name: "HP Chromebook",
    //   price: "30000",
    // },
    // {
    //   id: 2,
    //   name: "Asus ZenBook",
    //   price: "50000",
    // },
  ];
  const [lists, setlists] = useState(list);
  const [updateStatus, setupdateStatus] = useState(-1);
  const [id, setid] = useState(1);
  return (
    <>
      <Header title={"CRUD WITH HOOKS"} />
      <h1 style={{ textAlign: "center" }}>Electronics Department</h1>

      <div className="inputData">
        <AddList setlists={setlists} id={id} setid={setid} />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="DataContainer">
          <table id="customers">
            <tr>
              <th>Model</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {lists.map((value) =>
              updateStatus === value.id ? (
                <EditList curr={value} lists={lists} setlists={setlists} />
              ) : (
                <tr>
                  <td>{value.name}</td>
                  <td>₹ {value.price}</td>
                  <td>
                    <button
                      className="button editBtn"
                      onClick={() => handleEdit(value.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="button delBtn"
                      onClick={() => {
                        handleDelete(value.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </div>
      </form>
    </>
  );
  function handleEdit(id) {
    setupdateStatus(id);
  }
  function handleDelete(id) {
    console.log(id);
    const newList = lists.filter((value) => value.id !== id);
    setlists(newList);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;
    const newList = lists.map((value) => {
      return value.id === updateStatus
        ? { ...value, name: name, price: price }
        : value;
    });
    setlists(newList);
    setupdateStatus(-1);
  }
}

function EditList(curr, lists, setlists) {
  function handleInputName(e) {
    const name = e.target.name;
    const valueName = name.value;
    const newList = lists.map((value) => {
      return value.id === curr.id ? { ...value, name: valueName } : value;
    });
    setlists(newList);
  }

  function handleInputPrice(e) {
    const price = e.target.price;
    const valuePrice = price.value;
    const newList = lists.map((value) => {
      return value.id === curr.id ? { ...value, price: valuePrice } : value;
    });
    setlists(newList);
  }
  return (
    <tr>
      {console.log(curr.curr.name)}
      <td>
        {" "}
        <input
          type="text"
          onChange={handleInputName}
          name="name"
          defaultValue={curr.curr.name}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          type="number"
          onChange={handleInputPrice}
          name="price"
          defaultValue={curr.curr.price}
        />{" "}
      </td>
      <td>
        {" "}
        <button type="submit" className="button editBtn">
          Update
        </button>{" "}
      </td>
    </tr>
  );
}

function AddList({ setlists, id, setid }) {
  console.log(id);
  const nameRef = useRef();
  const priceRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;

    const newList = {
      id: id,
      name: name,
      price: price,
    };
    setlists((prevList) => {
      console.log(prevList);
      return prevList.concat(newList);
    });
    nameRef.current.value = "";
    priceRef.current.value = "";
    setid(id + 1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        autocomplete="off"
        ref={nameRef}
      ></input>
      <input
        type="number"
        name="price"
        placeholder="Enter Price"
        autocomplete="off"
        ref={priceRef}
      ></input>
      <button type="submit" className="button addBtn">
        Add
      </button>
    </form>
  );
}

export default Crud;
