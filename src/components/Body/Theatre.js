import React from 'react'
import Sidebar from './Sidebar'
import { useSearchParams } from 'react-router-dom'
import Recommendation from './Recommendation'
import Comments from './Comments'

const Watch = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('v')
  return(
    <div className='w-[80%] h-[80%] mx-auto'>
      <iframe className='grid grid-cols-1 w-[100%] h-[100%]' src={"https://www.youtube.com/embed/" + id } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="yes"></iframe>
    </div>
  )
}

const Theatre = () => {
  return (
    <div className='text-gray-200 text-center flex flex-col mx-auto w-[100%] h-[150vh] relative gap-10'>
      <Sidebar />
      <Watch />
      <Comments/>
      <Recommendation />
    </div>
  )
}
export default Theatre