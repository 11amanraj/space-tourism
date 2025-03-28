import React from 'react'
import NavElement from './NavElement'
import { NavbarElement } from '@/app/interfaces/interfaces'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div>LOGO</div>
      <div>
        <NavElement />
        <NavElement />
        <NavElement />
        <NavElement />
      </div>
    </nav>
  )
}

export default NavBar