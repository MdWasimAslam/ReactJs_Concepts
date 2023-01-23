import React,{useState} from 'react'
import Header from '../W3mComponents/Header'

const UseStateHook = () => {
    const [num, setnum] = useState(0)

    function increment(){
        setnum(num+1)
    }
    function decrement(){
        setnum(num-1)
    }

  return (
    <>
    <Header title={"UseState Hook"}/>
    <h1>{num}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default UseStateHook