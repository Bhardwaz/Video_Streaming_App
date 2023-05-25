import React from 'react'
import Sidebar from './Sidebar'
import { YOUTUBE_VIDEOS_API } from '../../../utils/constants'
import { useState } from 'react'
import { useEffect } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const Videos = () => {
    const [recVideos, setRecVideos] = useState([])
    const [pages, setPages]  =useState(1)
  
    useEffect(() => {
        getVideos()
    }, [])

    const selectPageHandler = (selectedPage) => {
    if(selectedPage >= 1 && selectedPage <= recVideos.length / 10 && selectedPage !== pages)
    setPages(selectedPage)
    }
    const getVideos = async () => {
        const response = await fetch(YOUTUBE_VIDEOS_API)
        const json = await response?.json()
        if(json && json?.items){
        setRecVideos(json?.items)
    }
}
  return(
      <div className='flex flex-col max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 text-gray-200 gap-2 rounded-lg mx-auto w-[95%] Videos:grid-cols-5 VideosSemiLaptop:grid-cols-4 VideosTablet:grid-cols-3 VideosTablet2:grid-cols-2 VideosPhone:grid-cols-1'>
      {
      recVideos.slice(pages * 10 - 10, pages * 10).map((video) => 
      <Link to={'/theatre?v=' + video?.id}> <VideoCard key={video?.id} info={video} /> </Link>
      )
      }
      </div>
      <div className='flex mx-auto text-gray-200'>
      {
      recVideos.length > 0 && (
      <div className='mx-auto flex gap-5 text-lg p-4'>
      <span onClick={() => {selectPageHandler(pages - 1)}} className={`${pages === 1 ? "hidden" : " "} cursor-pointer border p-1 hover:bg-white hover:text-black font-bold rounded-lg text-gray-200`}>⬅️</span>  
      {
      [...Array(recVideos.length / 10)].map((_, i) => {
      return <span onClick={() => {selectPageHandler(i + 1)}} key={i} className={`${pages === i + 1 ? "bg-[#ff0000]" : "bg-black"} cursor-pointer border px-3 flex justify-center items-center hover:bg-white hover:text-black font-bold rounded-lg text-gray-200`}>{i+1}</span>
      })
      }
      <span onClick={() => {selectPageHandler(pages + 1)}} className={`${pages >= recVideos.length / 10 ? "hidden" : ' '} cursor-pointer border p-1 hover:bg-white hover:text-black font-bold rounded-lg text-gray-200`}>➡️</span>
      </div>
      )
      }
      </div>
      </div>
        
    )
}

const VideoContainer = () => {
  return (
    <div className='flex gap-2 w-[100%] relative'>
     <Sidebar />
     <Videos />
    </div>
  )
}

export default VideoContainer