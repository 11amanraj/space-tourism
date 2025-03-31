import React from 'react'

const page = () => {
  return (
    <>
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>01</p>
            <p>PICK YOUR DESTINATION</p>
        </div>
        <div className='flex flex-col pt-22 gap-8 md:flex-row-reverse'>
            <div className='-mx-6 w-[calc(100%+3rem)] h-80 bg-tertiary'>
                Image Goes Here
            </div>
            <div className='flex flex-col gap-10 md:flex-row'>
                <ul className='flex gap-4 md:flex-col self-center'>
                    <li className='w-10 h-10 rounded-full bg-primary text-secondary flex justify-center items-center text-preset-4 text-[18px] border-[1px] border-secondary'>1</li>
                    <li className='w-10 h-10 rounded-full bg-primary text-secondary flex justify-center items-center text-preset-4 text-[18px] border-[1px] border-secondary'>2</li>
                    <li className='w-10 h-10 rounded-full bg-primary text-secondary flex justify-center items-center text-preset-4 text-[18px] border-[1px] border-secondary'>3</li>
                </ul>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className='text-preset-4 text-[18px] opacity-50'>THE TERMINOLOGY…</h3>
                    <h1 className='text-preset-3 text-[24px]'>LAUNCH VEHICLE</h1>
                    <p className='text-preset-9 text-[15px] text-tertiary text-center'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default page