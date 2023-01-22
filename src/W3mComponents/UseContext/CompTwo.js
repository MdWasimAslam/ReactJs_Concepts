import React, { useContext } from "react";
import CompThree from "./CompThree";
import { AppState } from "./UseContext";

function CompTwo() {
  const AppStateData = useContext(AppState);
  const myName = AppStateData.name;
  return (
    <div>
      <h1>Component 2</h1>
      {/* <h2>{myName}</h2> */}
      {AppStateData.fruit("Mango")}
      <CompThree />
    </div>
  );
}

export default CompTwo;
