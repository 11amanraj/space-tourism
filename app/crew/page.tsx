import React from 'react'

const page = () => {
  return (
    <div>
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>02</p>
            <p>MEET YOUR CREW</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center'>
                    <h3>Commander</h3>
                    <h1>Douglas Hurley</h1>
                    <p className='text-center'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <div className='self-center'>Carousel</div>
            </div>
            <div className='bg-tertiary w-70 h-85 self-center'>
                Image Here
            </div>
        </div>
    </div>
  )
}

export default page