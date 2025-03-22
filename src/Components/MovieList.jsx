import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-6 py-4">
        <h1 className="font-bold text-md md:text-3xl mb-4 text-white">{title}</h1>
        <div className="relative w-full overflow-x-auto overflow-y-hidden">
          <ul className="flex space-x-4 w-max">
            {movies.map((movie) => (
              <div key={movie.id} className="shrink-0">
                <MovieCard movie={movie} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default MovieList;
