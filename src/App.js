import React from "react";
import "./App.css";
import Jsx from "./W3mComponents/Jsx";
import Header from "./W3mComponents/Header";
import Movie from "./W3mComponents/ProjectMovie/Movie";
import UseStateHook from "./W3mComponents/UseStateHook";
import Notes from "./W3mComponents/ProjectNotes/Notes";
import UseEffectHook from "./W3mComponents/UseEffectHook";
import Crud from "./W3mComponents/CrudAppHooks/Crud";
import AppRoutes from "./W3mComponents/ReactRouterDom/AppRoutes";


function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  );
}

export default App;
