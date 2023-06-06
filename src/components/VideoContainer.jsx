import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard ,{AdVideocard} from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-evenly">
    {videos[0] && <AdVideocard info={videos[0]}/>}
      {videos.map((video) => (
        <Link key={video.id}  to={"/watch?v="+ video.id}><VideoCard info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
