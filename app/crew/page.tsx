import React from 'react'

const page = () => {
    const crew = [
        {
            name: 'Commander',
            role: 'Douglas Hurley',
            image: '/crew/image-douglas-hurley.png',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
        },
        {
            name: 'Mission Specialist',
            role: 'MARK SHUTTLEWORTH',
            image: '/crew/image-mark-shuttleworth.png',
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
        },
        {
            name: 'PILOT',
            role: 'Victor Glover',
            image: '/crew/image-victor-glover.png',
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
        },
        {
            name: 'Flight Engineer',
            role: 'Anousheh Ansari',
            image: '/crew/image-anousheh-ansari.png',
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        }   
    ]
  return (
    <div className="outline-1 bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] md:bg-[url('/crew/background-crew-desktop.jpg')] bg-cover p-6 pt-28 md:pt-46 md:px-41">
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>02</p>
            <p>MEET YOUR CREW</p>
        </div>
        <div className='flex flex-1 flex-col pt-6 gap-9 md:flex-row'>
            <div className='flex-1 flex flex-col gap-18'> 
                <div className='flex flex-col items-center'>
                    <h3 className='pt-10 text-preset-4 text-[18px] opacity-50 sm:text-[24px] md:text-[32px]'>COMMANDER</h3>
                    <h1 className='pt-2 text-preset-3 text-[24px] sm:text-[40px] md:text-[56px]'>DOUGLAS HURLEY</h1>
                    <p className='pt-6 text-center text-preset-9 text-[15px] text-tertiary sm:text-[16px] md:text-[18px]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <ul className='self-center flex gap-4'>
                    <li className='w-2.5 h-2.5 bg-secondary opacity-100 rounded-full '></li>
                    <li className='w-2.5 h-2.5 bg-secondary opacity-15 rounded-full '></li>
                    <li className='w-2.5 h-2.5 bg-secondary opacity-15 rounded-full '></li>
                    <li className='w-2.5 h-2.5 bg-secondary opacity-15 rounded-full '></li>
                </ul>
            </div>
            <div className='flex-1 w-70 sm:w-112 aspect-[1/1] self-center'>
                <img src={crew[0].image} alt={crew[0].name}/>
            </div>
        </div>
    </div>
  )
}

export default page