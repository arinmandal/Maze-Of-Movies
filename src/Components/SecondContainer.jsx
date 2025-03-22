import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
      <div className="bg-black text-white bg-opacity-90">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />        
      </div>
  )
}

export default SecondContainer;