import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Early Returns
  if (!movies) return;
  const mainMovieBG = movies[0];
  const { original_title, overview, id } = mainMovieBG;
  return (
    <div className="w-full h-full bg-black ">
      <div className="video-bg sm:pt-0 md:pt-0 pt-20 ">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </div>
  )
}

export default MainContainer