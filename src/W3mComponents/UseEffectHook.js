import React, { useEffect, useState } from "react";
import Header from "./Header";

function UseEffectHook() {
  const [count, setcount] = useState(0);
  const [countTwo, setcountTwo] = useState(0);

  useEffect(() => {
    alert("Rendered!");
    //   }); //When there is no argument it will render everytime
    //   },[]); // When Adding a empty array it will render only once as the dependecies is empty
  }, [countTwo]); // It will render only when the given state is updated
  return (
    <>
      <Header title={"UseEffect Hook"} />

      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click - {count}
      </button>
      <button
        onClick={() => {
          setcountTwo(countTwo + 1);
        }}
      >
        Click - {countTwo}
      </button>
    </>
  );
}

export default UseEffectHook;
