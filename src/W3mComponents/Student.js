import React from "react";

function Student({ name, age }) {
  return (
    <>
      <h1>Student Name : {name}</h1>
      <h1>Student Age : {age}</h1>
    </>
  );
}

export default Student;
