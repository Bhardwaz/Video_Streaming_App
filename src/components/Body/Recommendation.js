import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../../../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const Recommendation = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('v')
  const [videos, setVideos] = useState([])

  useEffect(() => {
   fetchRecommendedVideos()
  }, [])

  const fetchRecommendedVideos = async() => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=10&key=` + GOOGLE_API_KEY)
    const data = await response?.json()
    setVideos(data?.items)
  }
  return (
    <div className="grid h-[120vh] grid-cols-1 text-gray-200 gap-2 rounded-lg mx-auto w-[80%] Videos:grid-cols-5 VideosSemiLaptop:grid-cols-4 VideosTablet:grid-cols-3 VideosTablet2:grid-cols-2 VideosPhone:grid-cols-1">
        {
          videos.map(video => {
            return <Link to={'/theatre?v=' + video?.id?.videoId} key={video?.id}>
            <VideoCard info={video} key={video?.id?.videoId} />    
            </Link>
        }
        )
        }
    </div>
  )
}

export default Recommendation