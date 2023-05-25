import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='cursor-pointer border-1 border-transparent hover:shadow hover:ring hover:ring-gray-50 hover:ring-opacity-20 hover:ring-offset-1 ring-offset-gray-50 p-2 rounded-lg active:bg-gray-950'>
        <img className='w-full rounded-lg' src={thumbnails?.medium?.url} alt='thumnail' />
        <ul className='w-full pt-2'>
            <li className='font-bold text-gray-200'>{title}</li>
            <li className='text-gray-200 pt-1'> {channelTitle} </li>
            <li className='text-gray-200'> {Math.trunc(statistics?.viewCount / 10000)}K Views</li>
        </ul>
    </div>
  )
}

export default VideoCard