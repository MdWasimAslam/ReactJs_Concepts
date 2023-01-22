import React,{useMemo, useState} from 'react'
import Header from './Header';

function UseMemoHook() {
const [number, setnumber] = useState(0);
const [dark, setdark] = useState(false);


// const doubleNumber = slowFunction(number);
const doubleNumber = useMemo(() => slowFunction(number), [number])


const themeStyles={
    backgroundColor:dark?"black":"wheat",
    color:dark?'white':'darkgrey'
}


  return (
    <>
    <Header title={"UseMemo Hook"}/>
    <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} />
    <button onClick={()=>setdark(prevDark=>!prevDark)}> Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num){
    console.log("I am show function....");
    for(let i=0;i<=100000000;i++){

    }
    return num*2
}

export default UseMemoHook