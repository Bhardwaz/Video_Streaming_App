import React, { useContext } from "react";
import { ThemeContext } from "../../../App";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const [theme, ,] = useContext(ThemeContext);
  const { background, foreground } = theme;
  return (
    <div
      className={`border-1 cursor-pointer rounded-lg border-transparent p-2 ring-offset-${foreground} hover:shadow hover:ring hover:ring-${background} hover:ring-opacity-20 hover:ring-offset-1 active:bg-gray-950`}
    >
      <img
        className="w-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumnail"
      />
      <ul className="w-full pt-2">
        <li style={{ color: foreground }} className="font-bold text-gray-200">
          {title}
        </li>
        <li style={{ color: foreground }} className="pt-1 text-gray-200">
          {" "}
          {channelTitle}{" "}
        </li>
        <li style={{ color: foreground }} className="text-gray-200">
          {" "}
          {Math.trunc(statistics?.viewCount / 10000)}K Views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
