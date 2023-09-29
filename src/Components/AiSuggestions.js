import { useSelector } from "react-redux"
import MovieList from "../Components/MovieList"
const AiSuggestions = () => {

  const { movieResult, movieNames } = useSelector((store) => store.ai)
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div className="movielist">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default AiSuggestions