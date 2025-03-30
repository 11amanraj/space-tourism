import React from 'react'

const page = () => {
  return (
    <div>
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>01</p>
            <p>PICK YOUR DESTINATION</p>
        </div>
        <div className='flex flex-col md:flex-row-reverse'>
            <div className='w-full h-80 bg-tertiary'>
                Image Goes Here
            </div>
            <div className='flex flex-col md:flex-row'>
                <ul className='flex md:flex-col'>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <div>
                    <h3>THE TERMINOLOGY…</h3>
                    <h1>LAUNCH VEHICLE</h1>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page