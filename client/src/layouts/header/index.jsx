import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const Header = () => {
  return (
    <div className='header'>
        
        <div><h1>OneSchool</h1></div>
        <div className='box'>
            <ul>
                <li><NavLink to={'/'} >Home</NavLink></li>
                <li><NavLink to={'/courses'} >Courses</NavLink></li>
                <li><NavLink to={'/programs'} >Programs</NavLink></li>
                <li><NavLink to={'/teachers'} >Teachers</NavLink></li>
                <li><NavLink to={'/add'} >Add</NavLink></li>
            </ul>
        </div>

        <button>Contact US</button>
        
    </div>
  )
}

export default Header