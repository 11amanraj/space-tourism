import React from 'react'
import NavElement from './NavElement'
import { NavbarElement } from '@/app/interfaces/interfaces'
import Link from 'next/link'
import NavMenu from './NavMenu'

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
    <nav className='flex justify-between items-center p-6 md:p-0 md:h-24 lg:mt-10'>
      <Link href={'/'}>
        <img src="/shared/logo.svg" alt="logo"  className='w-10 h-10 sm:w-12 sm:h-12 md:mx-10 lg:mx-16'/>
      </Link>
      
      <div className='hidden lg:flex lg:flex-1 lg:h-full lg:items-center'>
        <div className='flex-1 h-[2px] bg-secondary opacity-25'></div>
        <div className='bg-secondary/5 backdrop-blur-2xl h-full w-7.5 flex items-center'>
          <div className='h-[2px] flex-1 lg:bg-secondary lg:opacity-25'></div>
        </div>
      </div>
      
      <div>
        <NavMenu />
      </div>
      <div className='hidden md:flex md:gap-12 md:pr-10 md:pl-21 bg-secondary/5 backdrop-blur-2xl'>
        {NavigationElement.map(item => 
          <NavElement title={item.title} index={item.index} link={item.link} key={item.index}/>
          )}
      </div>
    </nav>
  )
}

export default NavBar