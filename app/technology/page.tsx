import React from 'react'

const page = () => {
    const technology = [
        {
            title: 'LAUNCH VEHICLE',
            image_landscape: '/technology/image-launch-vehicle-landscape.jpg',
            image_portrait: '/technology/image-launch-vehicle-portrait.jpg',
            description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
        },
        {
            title: 'SPACEPORT',
            image_landscape: '/technology/image-spaceport-landscape.jpg',
            image_portrait: '/technology/image-spaceport-portrait.jpg',
            description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        },
        {
            title: 'SPACE CAPSULE',
            image_landscape: '/technology/image-space-capsule-landscape.jpg',
            image_portrait: '/technology/image-space-capsule-portrait.jpg',
            description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        },
    ]

  return (
    <>
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>03</p>
            <p>SPACE LAUNCH 101</p>
        </div>
        <div className='flex flex-col pt-22 gap-8 md:flex-row-reverse'>
            <div className='-mx-6 w-[calc(100%+3rem)] h-80 overflow-hidden bg-tertiary'>
                <img src={technology[0].image_portrait} className='w-full h-full object-cover' alt={technology[0].title} />
            </div>
            <div className='flex flex-col gap-10 md:flex-row'>
                <ul className='flex gap-4 md:flex-col self-center'>
                    <li className='w-10 h-10 rounded-full bg-primary text-secondary flex justify-center items-center text-preset-4 text-[18px] border-[1px] border-secondary'>1</li>
                    <li className='w-10 h-10 rounded-full bg-primary text-secondary flex justify-center items-center text-preset-4 text-[18px] border-[1px] border-secondary'>2</li>
                    <li className='w-10 h-10 rounded-full bg-primary text-secondary flex justify-center items-center text-preset-4 text-[18px] border-[1px] border-secondary'>3</li>
                </ul>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className='text-preset-4 text-[18px] opacity-50'>THE TERMINOLOGY…</h3>
                    <h1 className='text-preset-3 text-[24px]'>{technology[0].title}</h1>
                    <p className='text-preset-9 text-[15px] text-tertiary text-center'>{technology[0].description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default page