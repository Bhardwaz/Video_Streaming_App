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
    return(
        <div className='flex flex-wrap'>
          {
            recVideos.map((video) => 
             <VideoCard key={video?.id} info={video} />
            )
          }
        </div>
    )
}

const VideoContainer = () => {
  return (
    <div className='flex flex-wrap gap-5 w-[90%] h-[90%]'>
     <Sidebar />
     <Videos />
    </div>
  )
}

export default VideoContainer