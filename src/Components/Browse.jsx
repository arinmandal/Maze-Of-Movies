import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRated";
import AiSearch from "./AiSearch";
import { useSelector } from "react-redux";
const Browse = () => {

  const EnableAiSearch = useSelector((store) => store.ai.enableAiSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div className="">

      <Header />
      {EnableAiSearch ? (<AiSearch />) : (<>
        <MainContainer />
        <SecondContainer />
      </>)}

    </div>
  )
}

export default Browse