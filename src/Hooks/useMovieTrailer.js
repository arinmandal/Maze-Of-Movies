import { useEffect } from "react";
import { API_OPTION } from "../Utils/constant"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../ReduxStore/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getBackgroundVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-IN", API_OPTION);
    const json = await data.json();
    // console.log(json)
    const filterVideoData = json.results.filter(video => video.type === "Trailer")
    const trailer = filterVideoData.length ? filterVideoData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(() => {
    getBackgroundVideos();
  }, [])
}

export default useMovieTrailer