import React, { useContext } from "react";
import { AppState } from "./UseContext";

function CompThree({ name }) {
  const AppStateData = useContext(AppState);
  return (
    <div>
      <h1>Component 3</h1>
      <h1 style={{ color: "red" }}>{AppStateData.name}</h1>
      <h1 style={{ color: "red" }}>{AppStateData.email}</h1>
      <h1 style={{ color: "red" }}>{AppStateData.phone}</h1>
    </div>
  );
}

export default CompThree;
