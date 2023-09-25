import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  // Early Returns
  if (!movies) return;

  const mainMovieBG = movies[0];
  const { original_title, overview, id } = mainMovieBG;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer