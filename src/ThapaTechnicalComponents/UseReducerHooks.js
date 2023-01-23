import React, { useState, useReducer } from "react";
import Header from "../W3mComponents/Header";

const UseReducerHooks = () => {
  // const [num, setnum] = useState(0)

  const reducerFunc = (count, action) => {
    if (action.type == "Increment") {
      return (count = count + 1);
    } else if (action.type == "Decrement") {
      return (count = count - 1);
    }
    return count;
  };

  const [count, dispatch] = useReducer(reducerFunc, 0);

  return (
    <>
      <Header title={"UseReducer Hooks"} />
      <p>
        The useReducer hook in React allows you to manage the state of your
        component using a reducer function. It's an alternative to useState when
        you have a complex state or the next state depends on the previous one.
      </p>

      <h1>{count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default UseReducerHooks;
