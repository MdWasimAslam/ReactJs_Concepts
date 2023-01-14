import React from 'react'

function TernaryOperator() {
    const age =15;
    const green  = true;
  return (
    <>
    <div>
        {age>=18?<h1>Over Age</h1>:<h1>Under Age</h1>}
        <h1 style={{color:green?'green':"red"}}>This has Color</h1>
        {green && <button>This is a button</button>}
    </div>
    </>
  )
}

export default TernaryOperator