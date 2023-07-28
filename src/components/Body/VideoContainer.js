import React from "react";
import Sidebar from "./Sidebar";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Videos = () => {
  const [theme, ,] = useContext(ThemeContext);
  const { background, foreground } = theme;
  const [recVideos, setRecVideos] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    getVideos();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= recVideos.length / 10 &&
      selectedPage !== pages
    )
      setPages(selectedPage);
  };
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response?.json();
    if (json && json?.items) {
      setRecVideos(json?.items);
    }
  };
  return (
    <div className="bg-red mx-auto flex max-w-7xl flex-col">
      <div
        style={{ backgroundColor: background, color: foreground }}
        className="mx-auto grid w-[95%] grid-cols-1 gap-2 rounded-lg  VideosPhone:grid-cols-1 VideosTablet2:grid-cols-2 VideosTablet:grid-cols-3 VideosSemiLaptop:grid-cols-4 Videos:grid-cols-5"
      >
        {recVideos.slice(pages * 10 - 10, pages * 10).map((video) => (
          <Link to={"/theatre?v=" + video?.id}>
            {" "}
            <VideoCard key={video?.id} info={video} />{" "}
          </Link>
        ))}
      </div>
      <div className="mx-auto flex text-gray-200">
        {recVideos.length > 0 && (
          <div className="mx-auto flex gap-5 p-4 text-lg">
            <span
              style={{ backgroundColor: foreground, color: background }}
              onClick={() => {
                selectPageHandler(pages - 1);
              }}
              className={`${
                pages === 1 ? "hidden" : " "
              } cursor-pointer rounded-lg border p-1 font-bold text-gray-200 hover:bg-white hover:text-black`}
            >
              ⬅️
            </span>
            {[...Array(recVideos.length / 10)].map((_, i) => {
              return (
                <span
                  onClick={() => {
                    selectPageHandler(i + 1);
                  }}
                  key={i}
                  className={`${
                    pages === i + 1 ? "bg-[#ff0000]" : "bg-black"
                  } flex cursor-pointer items-center justify-center rounded-lg border px-3 font-bold text-gray-200 hover:bg-white hover:text-black`}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              style={{ backgroundColor: foreground, color: background }}
              onClick={() => {
                selectPageHandler(pages + 1);
              }}
              className={`${
                pages >= recVideos.length / 10 ? "hidden" : " "
              } cursor-pointer rounded-lg border p-1 font-bold text-gray-200 hover:bg-white hover:text-black`}
            >
              ➡️
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const VideoContainer = () => {
  return (
    <div className="relative flex w-[100%] gap-2">
      <Sidebar />
      <Videos />
    </div>
  );
};

export default VideoContainer;
