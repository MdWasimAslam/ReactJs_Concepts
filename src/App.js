import React from "react";
import Jsx from "./W3mComponents/Jsx";
import Header from "./W3mComponents/Header";
// import Header from "./Header/Header.js";

import Movie from "./W3mComponents/ProjectMovie/Movie";
import "./App.css";


function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Movie />
      </div>
    </>
  );
}

export default App;
