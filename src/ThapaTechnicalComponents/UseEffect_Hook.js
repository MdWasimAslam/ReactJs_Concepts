import React,{useState,useEffect} from 'react'
import Header from '../W3mComponents/Header'

function UseEffect_Hook() {
    const [num, setnum] = useState(0)
    const [screenWidth, setscreenWidth] = useState(window.screen.width)

    // Test Cases - 
    //  1. No dependencies passed -> then runs everytime the file renders
    //  2. Empty Array as dependency -> Thens only on first renders
    //  3. Props or State value on dependencies - > Runs when the props or state is updated


    useEffect(() => {
        document.title=num
        console.log("UseEffect Called");
    },[num])
    
    const getCurrScreenWidth=()=>{
        setscreenWidth(()=>window.innerWidth)

        //Clean up function cleans the residue from the event listner
        return ()=>{
            window.removeEventListener('resize',getCurrScreenWidth)
        }
    }


    useEffect(() => {
     window.addEventListener("resize",getCurrScreenWidth) 
    })
    

  return (
    <>
    <Header title={"UseEffect Hook"} />
        <h1>
            {num}
        </h1>
        <button onClick={()=>{setnum(num+1)}}>
            Click
        </button>
        <h1>The width of this window {screenWidth}</h1>
    </>
  )
}

export default UseEffect_Hook