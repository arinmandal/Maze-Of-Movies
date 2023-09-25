import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
const Browse = () => {

  useNowPlayingMovies();
  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  )
}

export default Browse