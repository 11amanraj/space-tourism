'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      
        return () => {
          document.body.style.overflow = '';
        };
      }, [isOpen]);

  return (
    <>
        <img src="/shared/icon-hamburger.svg" alt="hamburger" className='w-6 h-6 block md:hidden' onClick={() => setIsOpen(prev => !prev)}/>
        {isOpen && 
            <div className='bg-[#0b0d17]/15 backdrop-blur-[40px] h-full w-64 absolute right-0 top-0 pt-8 flex flex-col gap-20'>
                <img src='/shared/icon-close.svg' alt='close' className='w-5 h-5 self-end mr-6' onClick={() => setIsOpen(prev => !prev)}/>
                <ul className='text-preset-8 px-8 flex flex-col gap-8'>
                    <Link href='/' onClick={() => setIsOpen(false)}><li className='flex gap-3'><p className='font-bold'>00</p><p>HOME</p></li></Link>
                    <Link href='/destination' onClick={() => setIsOpen(false)}><li className='flex gap-3'><p className='font-bold'>01</p><p>DESTINATION</p></li></Link>
                    <Link href='/crew' onClick={() => setIsOpen(false)}><li className='flex gap-3'><p className='font-bold'>02</p><p>CREW</p></li></Link>
                    <Link href='/technology' onClick={() => setIsOpen(false)}><li className='flex gap-3'><p className='font-bold'>03</p><p>TECHNOLOGY</p></li></Link>
                </ul>
            </div>
        }
    </>
  )
}

export default NavMenu