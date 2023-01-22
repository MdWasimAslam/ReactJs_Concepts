import React from 'react'
import { Link, Route,Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';


const AppRoutes = () => {
  return (
    <div>
        <>
        <nav>
            <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/contact'} >Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
        </>
    </div>
  )
}

export default AppRoutes