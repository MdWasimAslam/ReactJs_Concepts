import React from "react";
import Jsx from "./W3mComponents/Jsx";
import Header from "./W3mComponents/Header";
import Student from "./W3mComponents/Student";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Student name={"Wasim"} age={26} />
    </div>
  );
}

export default App;
