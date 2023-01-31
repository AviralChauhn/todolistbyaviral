import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate=useNavigate()
    const goToAbout=()=>{
        navigate("/About")
    }
    const goToContact=()=>{
        navigate("/Contact")
    }
    const goToError=()=>{
        navigate("/ErrorPage")
    }
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/About">About</NavLink> </li>
                <li><NavLink to="/Contact">Contact</NavLink> </li>
                <li><NavLink to="/ErrorPage">Error Page</NavLink> </li>
            </ul>
        </nav>
        <button onClick={goToAbout}>Go To About</button>
        <button onClick={goToContact}>Go To Contact</button>
        <button onClick={goToError}>Go To Home</button>
    </div>
  )
}
