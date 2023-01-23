import React, { useEffect, useRef, useState } from "react";
import Header from "../W3mComponents/Header";

function UseRef_Hook() {
  const [count, setcount] = useState(0);

  // ---------- Drawback -----------
  // useEffect(() => {
  //   setcount(count + 1);
  //   // }, [count]) // This is cause re render
  //   // },[count])// This will re render as the dependecies is rending again and again
  // }, []); // This is render only once so no issues

  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const inputRef = useRef(null);

  function handleInputRef() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <>
      <Header title={"UseRef Hook"} />
      <ul>
        <li>
          It creates a mutable variable which will not re render the components
        </li>
        <li>It is used to access dom elements directly</li>
      </ul>

      <h1>{count}</h1>
      <h1>{countRef.current}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>

      <br></br>
      <br></br>
      <input ref={inputRef} type="text" />
      <button onClick={handleInputRef}>Focus Input</button>
    </>
  );
}

export default UseRef_Hook;
