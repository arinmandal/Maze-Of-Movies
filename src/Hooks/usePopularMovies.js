import { API_OPTION } from "../Utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../ReduxStore/movieSlice"


const usePopularMovies = () => {

  const usePopularMovies = useSelector((store) => store.movies.popularMovies)
  const dispatch = useDispatch();
  // Fetch data from TMDB Movies API 
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1', API_OPTION)
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

   useEffect(() => {
    !usePopularMovies && getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}

export default usePopularMovies;
