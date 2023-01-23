import React, { useState, useMemo } from "react";
import Header from "../W3mComponents/Header";

function UseMemo_Hook() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);

  //This will rerender this function when another state is updated hence slowing the performance down

  // function multiCount(){
  //     console.log("Multicount Function ....");

  //     // Creating an expensive function
  //     for (let index = 0; index < 1000000000; index++) {
  //     }
  //     return count*5
  // }

  //Here we are using usememo hence telling the function to get called only when a partcular state is updated and not for other states as well

  const multiCountMemo = useMemo(() => {
    console.log("Multicount Function ....");

    // Creating an expensive function --> Meaning demo of a very huge function which will take time to execute
    for (let index = 0; index < 1000000000; index++) {}
    return count * 5;
  }, [count]);

  return (
    <>
      <Header title={"UseMemo Hook"} />
      <p>Count and MultiCount will render showly</p>
      <h2>Count : {count}</h2>
      <h2>MultiCount : {multiCountMemo}</h2>
      <button onClick={() => setcount(count + 1)}>Update Count</button>
      <h2>Items : {item}</h2>
      <button onClick={() => setitem(item * 10)}>Update Item</button>
    </>
  );
}

export default UseMemo_Hook;
