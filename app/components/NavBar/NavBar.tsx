import React from 'react'
import NavElement from './NavElement'
import { NavbarElement } from '@/app/interfaces/interfaces'

const NavBar = () => {
  const NavigationElement : NavbarElement[] = [
    {
      index: 0,
      title: 'Home',
      link: 'www.google.com'
    },
    {
      index: 1,
      title: 'Destination',
      link: 'www.google.com'
    },
    {
      index: 2,
      title: 'Crew',
      link: 'www.google.com'
    },
    {
      index: 3,
      title: 'Technology',
      link: 'www.google.com'
    }
  ]

  return (
    <nav className='flex items-center justify-between pt-10 pl-16'>
      <div>LOGO</div>
      <div className='block md:hidden'>hamburger</div>
      <div className='hidden md:flex gap-12 pl-[12.5vw] pr-[5vw] bg-secondary/5 backdrop-blur-2xl'>
        {NavigationElement.map(item => 
          <NavElement title={item.title} index={item.index} link={item.link} key={item.index}/>
          )}
      </div>
    </nav>
  )
}

export default NavBar