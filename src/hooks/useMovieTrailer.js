import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";



const useMovieTrailer = (id) =>{
    const getMovieVideo = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        // console.log("trailer", json)
        const filterData = json.results.filter((item) => item.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log("filterd", trailer);
        setTrailerId(trailer.key)
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);
}


export default useMovieTrailer