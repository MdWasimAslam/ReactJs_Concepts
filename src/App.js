import React from "react";
import "./App.css";
//-------- W3Components -----------

import Jsx from "./W3mComponents/Jsx";
import Header from "./W3mComponents/Header";
import Movie from "./W3mComponents/ProjectMovie/Movie";
import UseStateHook from "./W3mComponents/UseStateHook";
import Notes from "./W3mComponents/ProjectNotes/Notes";
import UseEffectHook from "./W3mComponents/UseEffectHook";
import Crud from "./W3mComponents/CrudAppHooks/Crud";
import AppRoutes from "./W3mComponents/ReactRouterDom/AppRoutes";
import UseContext from "./W3mComponents/UseContext/UseContext";
import UseRef from "./W3mComponents/UseRef";
import UseReducer from "./W3mComponents/UseReducer";
import CustomHooks from "./W3mComponents/CustomHooks";
import UseMemoHook from "./W3mComponents/UseMemoHook";

//---- Thapa technical Components ------------
import UseStateHooks from "./ThapaTechnicalComponents/UseStateHook";

function App() {
  return (
    <div>
      <UseStateHooks/>      
    </div>
  );
}

export default App;
