import React from 'react'
import NavElement from './NavElement'
import { NavbarElement } from '@/app/interfaces/interfaces'
import Link from 'next/link'

const NavBar = () => {
  const NavigationElement : NavbarElement[] = [
    {
      index: 0,
      title: 'Home',
      link: '/'
    },
    {
      index: 1,
      title: 'Destination',
      link: '/destination'
    },
    {
      index: 2,
      title: 'Crew',
      link: '/crew'
    },
    {
      index: 3,
      title: 'Technology',
      link: '/technology'
    }
  ]

  return (
    <nav className='absolute top-0 left-0 w-full flex items-center justify-between pt-10 pl-16'>
      <Link href={'/'}>
        <img src="/shared/logo.svg" alt="logo"  className='w-10 h-10 sm:w-12 sm:h-12'/>
      </Link>
      <img src="/shared/icon-hamburger.svg" alt="hamburger" className='w-6 h-6 block md:hidden'/>
      <div className='hidden md:flex gap-12 pl-[12.5vw] pr-[5vw] bg-secondary/5 backdrop-blur-2xl'>
        {NavigationElement.map(item => 
          <NavElement title={item.title} index={item.index} link={item.link} key={item.index}/>
          )}
      </div>
    </nav>
  )
}

export default NavBar