import { API_OPTION } from "../Utils/constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUpcomingMovies} from "../ReduxStore/movieSlice"


const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  // Fetch data from TMDB Movies API 
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-IN&page=1', API_OPTION)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
  }

   useEffect(() => {
    getUpcomingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}

export default useUpcomingMovies;
