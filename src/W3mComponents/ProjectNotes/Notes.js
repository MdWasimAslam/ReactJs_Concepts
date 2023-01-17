import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Header'
import "./Notes.css"
import AddIcon from '@mui/icons-material/Add';





function Notes() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [data, setData] = useState([])


    const AddNote = () => {
        setData(
            // Adding previous data with new data from name and email
            [...data,{
                name: name,
                email: email
               } 
            ]
        )

        setName("");
        setEmail("")
    }

    return (
        <div>
            
            <Header title={"React Notes"} />
            <div className='NotesContainer'>
                <TextField value={name} onChange={(e) => { setName(e.target.value) }} id="outlined-basic" label="Full Name" variant="outlined" />

                <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} className='emailField' id="outlined-basic" label="Email" variant="outlined" />

                <Button className='addBtn' variant="contained" onClick={AddNote}><AddIcon /> Add Notes</Button>
            </div>

            <div className='NotesWrapper'>
        
            </div>

        </div>
    )
}

export default Notes