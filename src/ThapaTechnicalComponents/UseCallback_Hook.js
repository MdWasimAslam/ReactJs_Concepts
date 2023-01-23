import React, { useCallback, useState } from "react";
import Header from "../W3mComponents/Header";

function UseCallback_Hook() {
    const [count, setcount] = useState(0);

    const handleIncrement= useCallback(() => {
         setcount(count+1)
        },[count])
   
    



  return (
    <>
      <Header title={"UseCallback Hook"} />
      <TodoList/>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Update Count</button>
    </>
  );
}



function TodoList() {
    console.log("Todolist Render");
  return (
    <div>
        <h1>Todo List</h1>
    </div>
  )
}


export default UseCallback_Hook;
