import React from 'react'

function Lists() {
    const names = ["Pedro", "Jake", "Mike", "Justin", "Karen", "Harold", "George", "Lukas"];
    const users = [
        { name: "Kola", age: 23 },
        { name: "revu", age: 22 },
        { name: "pola", age: 21 },
        { name: "fiko", age: 24 },
        { name: "meru", age: 27 },
        { name: "nisu", age: 29 },
        { name: "hetu", age: 32 },

    ]

    return (
        <div>
            <div> {names.map((value, key) => { return <h3 key={key}> {value}</h3> })} </div>

            <div>{users.map((value, key) => {
                return <MyCustomComponent name={value.name} age={value.age} />
            })}</div>
        </div>
    )
}


const MyCustomComponent = (props) => {
    return (
        <h1>
            {props.name} {props.age}
        </h1>
    )
}
export default Lists