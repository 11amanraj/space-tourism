import React from 'react'

interface SwitcherProps {
    setDestination: (id: number) => void,
    text: string,
    isActive: boolean
}

const DestinationSwitcher: React.FC<SwitcherProps> = ({setDestination, text, isActive}) => {
  return (
    <li className='group cursor-pointer h-8 flex flex-col justify-between' onClick={() => setDestination(0)}>
        <p>{text}</p>
        <div className={`h-[3px] bg-none group-hover:bg-secondary group-hover: opacity-50 ${isActive && 'bg-secondary opacity-100'}`}></div>
    </li>
  )
}

export default DestinationSwitcher