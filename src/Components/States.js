import React, { useState } from 'react'

function States() {

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    const toggleBtnStyle = {
        backgroundColor: "#4CAF50", /* Green */
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    }



    
    const [number, setnumber] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [hideText, setHideText] = useState(false);


    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }
    const toggleBtn = () => {
        setHideText(!hideText)
    }





    return (
        <>
            <div>
                {/* Example 1 */}
                <h1>{number}</h1>
                <button onClick={() => { setnumber(number + 1) }} style={mystyle}>Increment Number</button>
                <button onClick={() => { setnumber(0) }} style={mystyle}>Clear Number</button>
            </div>


            <div>
                {/* Example 2 */}
                <input type="text" onChange={handleInputChange} />
                {inputValue}
            </div>


            <div>
                {/* Example 3 */}
                <button onClick={toggleBtn} style={toggleBtnStyle}>{hideText ? "Show" : "Hide"}</button>
                <h1 style={hideText ? { display: "none" } : { display: "unset" }}>My Name is Pedrotech</h1>
            </div>
        </>
    )
}

export default States