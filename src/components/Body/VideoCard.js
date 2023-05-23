import React from 'react'

const VideoCard = ({info}) => {
   const { snippet, statistics } = info;
   const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 rounded-md p-2 shadow-md cursor-pointer">
        <img src={thumbnails?.medium?.url}  alt='thumbanil'/>
        <ul>
        <li className="font-bold py-2 text-white">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}
export default VideoCard