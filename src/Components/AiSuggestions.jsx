import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const AiSuggestions = () => {

  const { movieResult, movieNames } = useSelector((store) => store.ai)
  if (!movieNames) return null;

  return (
      <div className="movielist">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
  )
}

export default AiSuggestions