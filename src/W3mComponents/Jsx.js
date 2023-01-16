import React from 'react'

function Jsx() {
    const name = "Wasi"
    const form1 = (
        <>
            <input type="text"></input>
            <button>Submit</button>
        </>
    )

    return (
        <div>
            <h1>{name}</h1>
            {form1}
        </div>
    )
}

export default Jsx