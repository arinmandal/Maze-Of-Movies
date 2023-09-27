import { API_OPTION } from "../Utils/constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../ReduxStore/movieSlice"


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  // Fetch data from TMDB Movies API 
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1', API_OPTION)
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;
