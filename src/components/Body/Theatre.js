import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('v')
  return(
    <div className='w-[80%] h-[60%] mx-auto'>
      <iframe className='grid grid-cols-1 w-[100%] h-full' src={"https://www.youtube.com/embed/" + id } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="yes"></iframe>
    </div>
  )
}

const Recommendation = () => {
  const fet = async () => {
    const res = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q={tmkoc episode 70}&key=" + "AIzaSyARNsaFhBkwm0jj_tgbc12Jd99jDae-DoQ")
    const data = await res.json()
    console.log(data);
  }
  fet()
  return(
    <div className='text-white'>
    Recommendation
    </div>
  )
}

const Theatre = () => {
  const isMenuOpen = useSelector(store => store.menu.isMenuOpen)
  return (
    <div className='text-gray-200 text-center flex flex-col mx-auto w-[100%] h-[100vh] relative gap-10'>
      <Sidebar />
      <Watch />
      <Recommendation />
    </div>
  )
}

export default Theatre