import { NavbarElement } from '@/app/interfaces/interfaces'
import Link from 'next/link'
import React from 'react'

const NavElement: React.FC<NavbarElement> = ({index, title, link}) => {
  return (
    <div className='cursor-pointer h-24 inline-flex items-center basis-auto hover:border-b-3 border-tertiary'>
      <Link href={link} className='text-preset-8 flex gap-3 text-secondary'>
        <div className='font-bold'>{`0${index}`}</div>
        <div>{title}</div>
      </Link>
    </div>
  )
}

export default NavElement