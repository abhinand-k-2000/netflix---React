import Header from "./Header";
import { API_OPTIONS } from "../utilities/constants";
import { useEffect, useState } from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const [mainMovie, setMainMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [upComingMovies, setUpComingMovies] = useState(null);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const movie = json.results[0];
    setMainMovie(movie);
    setMovies(json.results);
  };

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setPopularMovies(json.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setTopRatedMovies(json.results);
  };

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setUpComingMovies(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpComingMovies();
  }, []);
  
  return (
    <div>
      <Header />
      {mainMovie && <MainContainer movie={mainMovie} />}
      {movies && (
        <SecondaryContainer
          movies={movies}
          popularMovies={popularMovies}
          topRatedMovies={topRatedMovies}
          upComingMovies={upComingMovies}
        />
      )}
    </div>
  );
};

export default Browse;
