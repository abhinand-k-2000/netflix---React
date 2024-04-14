import React, { useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie }) => {
  const [trailerId, setTrailerId] = useState(null)
  const { id } = movie;

  useMovieTrailer(id);
 

  return (
    <div >
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/U2Qp5pL3ovA?si=" + trailerId +"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
