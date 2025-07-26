'use client'

import React from 'react'
import { useState } from 'react'

const Page = () => {
    const crew = [
        {
            name: 'Douglas Hurley',
            id: 0,
            role: 'Commander',
            image: '/crew/image-douglas-hurley.png',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
        },
        {
            name: 'MARK SHUTTLEWORTH',
            id: 1,
            role: 'Mission Specialist',
            image: '/crew/image-mark-shuttleworth.png',
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
        },
        {
            name: 'Victor Glover',
            id: 2,
            role: 'PILOT',
            image: '/crew/image-victor-glover.png',
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
        },
        {
            name: 'Anousheh Ansari',
            id: 4,
            role: 'Flight Engineer',
            image: '/crew/image-anousheh-ansari.png',
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        }
    ]
    const [currentCrew, setCurrentCrew] = useState<number>(0)

    return (
        <>
            <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
                <p className='opacity-25'>02</p>
                <p>MEET YOUR CREW</p>
            </div>
            <div className='flex flex-1 flex-col gap-9 md:flex-row'>
                <div className='flex-1 flex flex-col gap-18'>
                    <div className='flex flex-col items-center'>
                        <h3 className='pt-10 text-preset-4 text-[18px] text-tertiary sm:text-[24px] md:text-[32px]'>{crew[currentCrew].role}</h3>
                        <p className='pt-2 text-preset-3 text-[24px] sm:text-[40px] md:text-[56px]'>{crew[currentCrew].name}</p>
                        <p className='pt-6 text-center text-preset-9 text-[15px] text-tertiary sm:text-[16px] md:text-[18px]'>{crew[currentCrew].description}</p>
                    </div>
                    <ul className='self-center flex gap-4'>
                        <li className={`cursor-pointer w-2.5 h-2.5 bg-secondary rounded-full ${currentCrew == 0 ? 'opacity-100' : 'opacity-15'}`} onClick={() => setCurrentCrew(0)}></li>
                        <li className={`cursor-pointer w-2.5 h-2.5 bg-secondary rounded-full ${currentCrew == 1 ? 'opacity-100' : 'opacity-15'}`} onClick={() => setCurrentCrew(1)}></li>
                        <li className={`cursor-pointer w-2.5 h-2.5 bg-secondary rounded-full ${currentCrew == 2 ? 'opacity-100' : 'opacity-15'}`} onClick={() => setCurrentCrew(2)}></li>
                        <li className={`cursor-pointer w-2.5 h-2.5 bg-secondary rounded-full ${currentCrew == 3 ? 'opacity-100' : 'opacity-15'}`} onClick={() => setCurrentCrew(3)}></li>
                    </ul>
                </div>
                <div className='flex-1 w-70 sm:w-112 aspect-[1/1] self-center'>
                    <img src={crew[currentCrew].image} alt={crew[currentCrew].name} />
                </div>
            </div>
        </>
    )
}

export default Page