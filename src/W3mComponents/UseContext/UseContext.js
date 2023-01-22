import React, { useState, createContext } from "react";
import Header from "../Header";
import CompOne from "./CompOne";

const AppState = createContext();

function UseContext() {
  const [data, setdata] = useState("Wasim");
  return (
    <div>
      <AppState.Provider
        value={{
          name: "John",
          email: "wasim@gmail.com",
          phone: "987455874",
          fruit: function (fruitName) {
            console.log(fruitName);
          },
        }}
      >
        <Header title={"UseContext"} />
        <h1>Use Context Main Component</h1>
        <p>
          In React, useContext is a Hook that allows a component to access a
          context object. A context object is an object that can be passed down
          through a component tree without the need for props drilling.
        </p>
        <CompOne name={"Raju"} />
      </AppState.Provider>
    </div>
  );
}

export default UseContext;
export { AppState };
