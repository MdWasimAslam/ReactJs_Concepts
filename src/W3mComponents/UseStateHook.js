import React, { useState } from 'react'
import Header from './Header'
import './CSS/UseStateHook.css'





function UseStateHook() {
    const [num, setnum] = useState(0)
    const incrementNum = () => {
        setnum(num + 1)
    }

    const decrementNum = () => {
        setnum(num > 0 ? num - 1 : 0)
    }

    const clearNum = () => {
        setnum(0)
    }


    return (
        <>
            <Header />
            <h1 style={{ textAlign: "center", fontSize: "100px" }}>{num}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <button onClick={incrementNum} className={"button"}>Increment</button>
                <button onClick={decrementNum} className={"button"} id={"decrementBtn"}>Decrement</button>
                <button onClick={clearNum} className={"button"} id={"clearBtn"}>Clear</button>
            </div>
        </>
    )
}

export default UseStateHook