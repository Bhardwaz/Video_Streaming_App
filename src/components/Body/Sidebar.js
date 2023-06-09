import React from 'react'
import { useSelector } from 'react-redux'
import Home from '../../../assests/Body/sidebarHome.gif'
import Live from '../../../assests/Body/liveVideo.gif'
import Dev from '../../../assests/Body/developer.gif'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.menu.isMenuOpen)
  if(!isMenuOpen) return
  return (
    <div className='text-black font-bold bg-gray-200 w-32 h-[89vh] rounded-md z-10 absolute top-0 left-0'>
        <ul className='flex flex-col justify-between h-full'>
        <div>
            <li className='p-1 flex items-center text-lg cursor-pointer border-b-2 border-black rounded-lg gap-2 hover:bg-[#ff0000]'><img className='w-10' alt='home' src={Home} /> <Link to={'/'}> Home </Link> </li>

            <li className='p-1 flex items-center text-lg cursor-pointer border-b-2 border-black rounded-lg gap-2 hover:bg-[#ff0000]'><img className='w-10' alt='Live Video' src={Live} /> Live </li>
        </div>
         <li className='text-black font-light text-center flex flex-col items-center'> <img src={Dev} alt='devs' className='w-10' /> Created With ❤️ By Sumit Bhardwaj </li>
        </ul>
    </div>
  )
}

export default Sidebar