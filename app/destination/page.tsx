'use client';

import React from 'react'
import { useState } from 'react'
import DestinationSwitcher from '../components/DestinationSwitcher';

const page = () => {
    const [destination, setDestination] = useState<number>(1)

    const planetary_bodies = [
        {
            name: 'MOON',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,440 KM',
            travel_time: '3 DAYS',
            image: '/destination/image-moon.png',
            id: 0
        },
        {
            name: 'MARS',
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distance: '225 MIL. KM',
            travel_time: '9 MONTHS',
            image: '/destination/image-mars.png',
            id: 1 
        },
        {
            name: 'EUROPA',
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 MIL. KM',
            travel_time: '3 YEARS',
            image: '/destination/image-europa.png',
            id: 2
        },
        {
            name: 'TITAN',
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 BIL. KM',
            travel_time: '7 YEARS',
            image: '/destination/image-titan.png',
            id: 3
        }
    ]

  return (
    <>
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:self-start md:text-[28px]'>
            <p className='opacity-25'>01</p>
            <p>PICK YOUR DESTINATION</p>
        </div>
        <div className='pt-6 h-full flex flex-col gap-8 self-center md:flex-row'>
            <div className='w-52 aspect-[1/1] md:flex-1 self-center md:p-7'>
                <img className='w-full' src={planetary_bodies[destination].image} alt={planetary_bodies[destination].name}/>
            </div>
            <div className='flex flex-col gap-6 md:flex-1 md:px-12 md:self-center'>
                <ul className='text-preset-7 self-center flex gap-8 sm:text-[16px] md:self-start'>
                    {planetary_bodies.map(body => 
                        <DestinationSwitcher 
                            key={body.id} 
                            setDestination={() => setDestination(body.id)} 
                            text={body.name.toUpperCase()} 
                            isActive={destination === body.id}
                        />
                    )}
                </ul>
                <div className='flex flex-col gap-4'>
                    <h1 className='self-center text-preset-3 sm:text-[100px] md:self-start'>{planetary_bodies[destination].name}</h1>
                    <p className='text-preset-9 text-[15px] text-center text-tertiary sm:text-[18px] md:text-start'>{planetary_bodies[destination].description}</p>
                </div>
                <div className='h-[1px] opacity-25 bg-secondary'></div>
                <ul className='text-center flex flex-col gap-6 sm:flex-row sm:justify-between'>
                    <li>
                        <p className='text-tertiary text-preset-7 text-start'>AVG. DISTANCE</p>
                        <p className='text-preset-6 text-start'>{planetary_bodies[destination].distance.toUpperCase()}</p>
                    </li>
                    <li>
                        <p className='text-tertiary text-preset-7 text-end'>EST. TRAVEL TIME</p>
                        <p className='text-preset-6 text-end'>{planetary_bodies[destination].travel_time.toUpperCase()}</p>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default page