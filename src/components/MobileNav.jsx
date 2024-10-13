import React from 'react'
import { nav_data } from '../Data/navdata'
import './styles/navbar.css'
import 'animate.css'
import { useNavigate } from 'react-router-dom'

const MobileNav = () => {
  const navigate = useNavigate();

  function handleNavigation(path) {
    navigate(path);
  }
  return (
    <div className='mobile_nav animate__animated animate__fadeInDown'>
        {nav_data.map((item,index)=>(
            <div className="row" onClick={() => handleNavigation(item.path)}>{item.name}</div>
        ))}
    </div>
  )
}

export default MobileNav