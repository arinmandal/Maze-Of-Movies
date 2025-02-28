import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {

  return (
    movies && (<div className="">
      <h1 className="font-bold text-md md:text-3xl pb-1 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-gray-300 cursor-move">
        <div className="flex">
          {movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
    )
    )
}

export default MovieList