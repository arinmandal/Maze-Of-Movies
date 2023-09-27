import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Early Returns
  if (!movies) return;

  const mainMovieBG = movies[0];
  // console.log(mainMovieBG)
  const { original_title, overview, id } = mainMovieBG;
  return (
    <div className="w-full">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer