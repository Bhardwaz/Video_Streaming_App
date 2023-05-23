import React from 'react'
import Sidebar from './Sidebar'
import { YOUTUBE_VIDEOS_API } from '../../../utils/constants'
import { useState } from 'react'
import { useEffect } from 'react'
import VideoCard from './VideoCard'

const Videos = () => {
    const [recVideos, setRecVideos] = useState([])
  
    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const response = await fetch(YOUTUBE_VIDEOS_API)
        const json = await response?.json()
        setRecVideos(json?.items)
    }
    console.log(recVideos);
    return(
        <div className='flex flex-wrap text-gray-200 gap-8 rounded-lg mx-auto w-[90%]'>
          {
          recVideos.map((video) => 
          <VideoCard key={video} info={video} />
          )
          }
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