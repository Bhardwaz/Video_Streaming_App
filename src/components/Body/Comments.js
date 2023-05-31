import React, { useEffect, useState } from 'react'
import Comment from '../../../assests/Body/comments.gif'
import { GOOGLE_API_KEY } from '../../../utils/constants'
import { useSearchParams } from 'react-router-dom'


const CommentItem = ({ info }) => {
    const {authorProfileImageUrl, likeCount, publishedAt, textDisplay, authorDisplayName
    } = info?.snippet?.topLevelComment?.snippet
    const likes = likeCount > 1000 ? `${Math.round(likeCount / 1000)}K` : likeCount


    const formattedTime = new Date(publishedAt).toLocaleString();
    // Calculate the time difference from the current time
    const currentTime = new Date();
    const commentTime = new Date(publishedAt);
    const timeDifference = Math.floor((currentTime - commentTime) / 1000); // in seconds
    // Function to convert seconds to a readable time format (e.g., 2h 30m ago)
    const formatTimeDifference = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      if (hours > 0) {
        return `${hours}h${minutes}m ago`;
      } else {
        return `${minutes}m ago`;
      }
    };
    return (
      <div className='flex flex-col items-start gap-2'>
        <div className='flex items-center gap-4'>
           <img className='rounded-full w-6' src={authorProfileImageUrl} alt="Author Profile" />
           <p className='text-black font-semibold'> {authorDisplayName} </p>
           <p className='text-left'> {textDisplay} </p>
        </div>
        <div className='flex ml-10 gap-2'>
            <p className='flex gap-2 cursor-pointer'> <img className='w-4' src='https://em-content.zobj.net/thumbs/120/google/350/thumbs-up_1f44d.png'/> { likes }</p>
            <p> {formatTimeDifference(timeDifference)} </p>
        </div>
      </div>
    );
};

const Comments = () => {
  const [show, setShow] = useState(false)
  const [comments, setComments] = useState([])
  const [searchParams] = useSearchParams()
  const id = searchParams.get('v')

  useEffect(() => {
   fetchComments()
  }, [])

  const fetchComments = async() => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`)
    const data = await response?.json()
    setComments(data?.items)
  }
  console.log(comments);
  return (
    <div className='flex flex-col gap-5'>
    <div className='text-xl text-gray-200 flex justify-start w-[80%] mx-auto'>
       <p onClick={() => setShow(!show)} 
    className='flex gap-2 cursor-pointer hover:opacity-70'>Comments <img className='w-8' src={Comment} alt='commentIcon'/> </p>
    </div>
    
    {
    show ? <div className='flex w-[80%] mx-auto bg-gray-200 text-black p-4 rounded-md overflow-y-scroll h-40 flex-col justify-start items-start gap-5'>
    {
        comments.map(comment => {
            return <CommentItem info={comment} key={comment?.id} />
        })
    }    
    </div> : "  "
    }
</div>
  )
}
export default Comments