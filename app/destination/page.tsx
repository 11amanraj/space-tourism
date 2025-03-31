import React from 'react'

const page = () => {
    const planetary_bodies = [
        {
            name: 'MOON',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,440 KM',
            travel_time: '3 DAYS',
            image: '/destination/image-moon.png'
        },
        {
            name: 'MARS',
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distance: '225 MIL. KM',
            travel_time: '9 MONTHS',
            image: '/destination/image-mars.png' 
        },
        {
            name: 'EUROPA',
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 MIL. KM',
            travel_time: '3 YEARS',
            image: '/destination/image-europa.png'
        },
        {
            name: 'TITAN',
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 BIL. KM',
            travel_time: '7 YEARS',
            image: '/destination/image-titan.png'
        }
    ]
  return (
    <div className="bg-[url('/destination/background-destination-mobile.jpg')] sm:bg-[url('/destination/background-destination-tablet.jpg')] md:bg-[url('/destination/background-destination-desktop.jpg')] bg-cover px-6 sm:p-10 md:py-12 md:px-40 h-full">
        <div className='pt-28 text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>01</p>
            <p>PICK YOUR DESTINATION</p>
        </div>
        <div className='pt-6 h-full flex flex-col gap-8 lg:flex-row'>
            {/* <img className='w-52 h-52 sm:w-90 sm:h-90 md:flex-1 md:box-border self-center' src={planetary_bodies[0].image} alt={planetary_bodies[0].name}/> */}
            <div className='w-52 aspect-[1/1] sm:w-90 md:flex-1 md:box-border self-center'>
                <img className='w-full' src={planetary_bodies[0].image} alt={planetary_bodies[0].name}/>
            </div>
            <div className='flex flex-col gap-6 sm:px-3 md:flex-1 md:box-border md:px-12 md:justify-center'>
                <ul className='text-preset-7 self-center flex gap-8 sm:text-[16px] md:self-start'>
                    <li>MOON</li>
                    <li>MARS</li>
                    <li>EUROPA</li>
                    <li>TITAN</li>
                </ul>
                <div className='flex flex-col gap-4'>
                    <h1 className='self-center text-preset-3 sm:text-[100px] md:self-start'>{planetary_bodies[0].name}</h1>
                    <p className='text-preset-9 text-[15px] text-center text-tertiary sm:text-[18px] md:text-start'>{planetary_bodies[0].description}</p>
                </div>
                <div className='h-[1px] opacity-25 bg-secondary'></div>
                <ul className='text-center flex flex-col gap-6 sm:flex-row sm:justify-between'>
                    <li>
                        <p className='text-tertiary text-preset-7'>AVG. DISTANCE</p>
                        <p className='text-preset-6'>{planetary_bodies[0].distance.toUpperCase()}</p>
                    </li>
                    <li>
                        <p className='text-tertiary text-preset-7'>EST. TRAVEL TIME</p>
                        <p className='text-preset-6'>{planetary_bodies[0].travel_time.toUpperCase()}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default page