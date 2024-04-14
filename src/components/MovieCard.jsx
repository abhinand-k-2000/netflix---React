import React from "react";
import { IMG_CDN_URL } from "../utilities/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 mr-4">
      <img alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
