import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ({movie}) => {
    console.log("main", movie)
    // const {original_title, overview} = movie
  return (
    <div>
      <VideoTitle movie={movie}/>
      <VideoBackground movie={movie} />
    </div>
  );
};

export default MainContainer;
