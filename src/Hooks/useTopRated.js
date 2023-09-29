import { API_OPTION } from "../Utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../ReduxStore/movieSlice"


const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const dispatch = useDispatch();
  // Fetch data from TMDB Movies API 
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-IN&page=1', API_OPTION)
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}

export default useTopRatedMovies;
