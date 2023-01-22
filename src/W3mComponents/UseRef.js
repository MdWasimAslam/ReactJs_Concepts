import { Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";

function UseRef() {
  const [name, setname] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const previousValue = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    previousValue.current = name;
  });

  return (
    <>
      <Header title={"UseRef Hook"} />
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <h1>
        My Name is {name} and it used to be {previousValue.current}
      </h1>
      <h1>I rendered {renderCount.current} times!</h1>
      <Button
        variant="contained"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Ref Focus Button
      </Button>
    </>
  );
}

export default UseRef;
