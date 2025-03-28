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

  console.log(NavigationElement)

  return (
    <nav className='flex items-center justify-between'>
      <div>LOGO</div>
      <div>
        {NavigationElement.map(item => 
          <NavElement title={item.title} index={item.index} link={item.link} key={item.index}/>
          )}
      </div>
    </nav>
  )
}

export default NavBar