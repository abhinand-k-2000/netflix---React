import Header from "./Header"
import { API_OPTIONS } from "../utilities/constants"
import { useEffect, useState } from "react"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {

    const [mainMovie, setMainMovie] = useState(null)
    const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        const movie = json.results[0]
        setMainMovie(movie)

    }

    useEffect(()=> {
        getNowPlayingMovies();
    }, [])

    return (
        <div>
            <Header />
            {mainMovie && <MainContainer movie={mainMovie}/> }
            <SecondaryContainer/>
        </div>
    )
}

export default Browse