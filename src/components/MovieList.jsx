import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='ml-10 py-4'>
        <h1 className='p-2 text-2xl text-white'>{title}</h1>
        <div className='flex p-2 overflow-x-auto scrollbar-hide '>
            <div className='flex '>
                {
                    movies?.map((movie) =>  <MovieCard key={movie.id} posterPath={movie.poster_path}/>)
                }
               
            </div>
        </div>
    </div>
  )
}

export default MovieList