import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { toggleList } from "../../../utils/showListSlice";
import VideoCard from "./VideoCard";
import { useNavigate, Link } from "react-router-dom";

const QueryVideos = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const searchQuery = useSelector((store) => store.query.items);
  const dispatch = useDispatch();
  const [userQuery] = searchQuery;
  const navigate = useNavigate();
  useEffect(() => {
    getSearchVideos();
  }, []);

  const getSearchVideos = async () => {
    if (userQuery !== undefined) {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${userQuery}&maxResults=10&key=` +
          "AIzaSyAxs1nlueNT1ARxbFGt7Hvg_29KrptT1Xk"
      );
      const data = await response?.json();
      setSearchVideos(data?.items);
    } else {
      navigate("/");
    }
  };
  return (
    <div
      onClick={() => dispatch(toggleList())}
      className="mx-auto grid w-[95%] grid-cols-1 gap-2 rounded-lg text-gray-200 VideosPhone:grid-cols-1 VideosTablet2:grid-cols-2 VideosTablet:grid-cols-3 VideosSemiLaptop:grid-cols-4 Videos:grid-cols-5"
    >
      {searchVideos.map((video) => {
        return (
          <Link
            to={"/theatre?v=" + video?.id?.videoId}
            key={video?.id?.videoId}
          >
            <VideoCard info={video} key={video?.id?.videoId} />
          </Link>
        );
      })}
    </div>
  );
};
const SearchResults = () => {
  return (
    <div className="relative flex flex-col">
      <Sidebar />
      <QueryVideos />
    </div>
  );
};

export default SearchResults;
