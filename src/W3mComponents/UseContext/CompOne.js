import React from "react";
import CompTwo from "./CompTwo";

function CompOne({ name }) {
  return (
    <div>
      <h1>Component 1</h1>
      <p>{name} is a normal props</p>
      <CompTwo />
    </div>
  );
}

export default CompOne;
