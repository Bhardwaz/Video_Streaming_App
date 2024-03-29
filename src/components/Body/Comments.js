import React, { useContext, useEffect, useState } from "react";
import Comment from "../../../assests/Body/comments.gif";
import { GOOGLE_API_KEY } from "../../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { ThemeContext } from "../../../App";

const CommentItem = ({ info }) => {
  const {
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
    authorDisplayName,
  } = info?.snippet?.topLevelComment?.snippet;
  const likes =
    likeCount > 1000 ? `${Math.round(likeCount / 1000)}K` : likeCount;

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
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-4">
        <img
          className="w-6 rounded-full"
          src={authorProfileImageUrl}
          alt="Author Profile"
        />
        <p className="font-semibold text-black"> {authorDisplayName} </p>
        <p className="text-left"> {textDisplay} </p>
      </div>
      <div className="ml-10 flex gap-2">
        <p className="flex cursor-pointer gap-2">
          {" "}
          <img
            className="w-4"
            src="https://em-content.zobj.net/thumbs/120/google/350/thumbs-up_1f44d.png"
          />{" "}
          {likes}
        </p>
        <p> {formatTimeDifference(timeDifference)} </p>
      </div>
    </div>
  );
};

const Comments = () => {
  const [theme, ,] = useContext(ThemeContext);
  const { background, foreground } = theme;
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`
    );
    const data = await response?.json();
    setComments(data?.items);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="text-x mx-auto flex w-[80%] justify-start">
        <p
          style={{ color: foreground }}
          onClick={() => setShow(!show)}
          className="flex cursor-pointer gap-2 hover:opacity-70"
        >
          Comments <img className="w-8" src={Comment} alt="commentIcon" />{" "}
        </p>
      </div>

      {show ? (
        <div className="mx-auto flex h-40 w-[80%] flex-col items-start justify-start gap-5 overflow-y-scroll rounded-md bg-gray-200 p-4 text-black">
          {comments.map((comment) => {
            return <CommentItem info={comment} key={comment?.id} />;
          })}
        </div>
      ) : (
        "  "
      )}
    </div>
  );
};
export default Comments;
