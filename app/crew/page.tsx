import React from 'react'

const page = () => {
    const crew = [
        {
            name: 'Commander',
            role: 'Douglas Hurley',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
        },
        {
            name: 'Mission Specialist',
            role: 'MARK SHUTTLEWORTH',
            description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
        },
        {
            name: 'PILOT',
            role: 'Victor Glover',
            description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
        },
        {
            name: 'Flight Engineer',
            role: 'Anousheh Ansari',
            description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        }   
    ]
  return (
    <div className="h-full bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] md:bg-[url('/crew/background-crew-desktop.jpg')] bg-cover p-6">
        <div className='text-preset-8 flex gap-6 justify-center sm:text-[20px] sm:justify-start'>
            <p className='opacity-25'>02</p>
            <p>MEET YOUR CREW</p>
        </div>
        <div className='flex flex-col pt-6 md:flex-row'>
            <div className='flex-1 flex flex-col'> 
                <div className='flex flex-col items-center'>
                    <h3 className='pt-10 text-preset-4 text-[18px] opacity-50 sm:text-[24px] md:text-[32px]'>COMMANDER</h3>
                    <h1 className='pt-2 text-preset-3 text-[24px] sm:text-[40px] md:text-[56px]'>DOUGLAS HURLEY</h1>
                    <p className='pt-6 text-center text-preset-9 text-[15px] text-tertiary sm:text-[16px] md:text-[18px]'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <div className='self-center'>Carousel</div>
            </div>
            <div className='flex-1 bg-tertiary w-70 h-85 self-center'>
                Image Here
            </div>
        </div>
    </div>
  )
}

export default page