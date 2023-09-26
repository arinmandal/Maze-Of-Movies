import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // Fetch Trailer video and dispatch to the redux store
  const trailerVideo = useSelector((store) => store.movies.addTrailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="h-screen pt-0 mt-0 flex items-start justify-center">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&disablekb=1&fs=0?&loop=1"}
        allowFullscreen></iframe>
    </div>
  )
}

export default VideoBackground