import React,{useState,useEffect} from 'react'
import Header from './Header'

function CustomHooks() {

    // Storing the data from the custom hook using the given api url
    const [data] = FetchAPI("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001") 

  return (
    <>
    <Header title={"Custom Hooks"}/>

    <div className='main-container'>
        {data.map((value,key)=>{
            return <li key={key}>{value.firstName}</li>
        })}
    </div>
    </>
  )
}

// Creating another component as custom hookes for fetching the data from api
function FetchAPI(url) {
    const [data, setdata] = useState([]);

    useEffect(() => {
      async function getData(){
        const call = await fetch(`${url}`);
        const response =await call.json()
        setdata(response)
        console.log(response);
      }
      getData()
    },[])
  return [data]
}

export default CustomHooks