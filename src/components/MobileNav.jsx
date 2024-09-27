import React from 'react'
import { nav_data } from '../Data/navdata'
import './styles/navbar.css'
import 'animate.css'

const MobileNav = () => {
  return (
    <div className='mobile_nav animate__animated animate__fadeInDown'>
        {nav_data.map((item,index)=>(
            <div className="row">{item}</div>
        ))}
    </div>
  )
}

export default MobileNav