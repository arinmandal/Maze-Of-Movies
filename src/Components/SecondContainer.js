import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-black">
      <div className="movieList lg:-mt-72 relative z-30 px-3 md:px-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />        
      </div>
    </div>
  )
}

export default SecondContainer;