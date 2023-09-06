import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../../../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const Recommendation = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchRecommendedVideos();
  }, []);

  const fetchRecommendedVideos = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=` +
        GOOGLE_API_KEY
    );
    console.log(response);
    const data = await response?.json();
    setVideos(data?.items);
  };
  return (
    <div className="mx-auto grid h-[120vh] w-[80%] grid-cols-1 gap-2 rounded-lg text-gray-200 VideosPhone:grid-cols-1 VideosTablet2:grid-cols-2 VideosTablet:grid-cols-3 VideosSemiLaptop:grid-cols-4 Videos:grid-cols-5">
      {videos?.map((video) => {
        return (
          <Link to={"/theatre?v=" + video?.id?.videoId} key={video?.id}>
            <VideoCard info={video} key={video?.id?.videoId} />
          </Link>
        );
      })}
    </div>
  );
};

export default Recommendation;
