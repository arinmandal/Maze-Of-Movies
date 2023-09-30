import { FiInfo } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="videoTitle w-full aspect-video absolute text-white bakcg bg-gradient-to-r from-black">
      <div className="w-96 pt-32 pl-12 sm:pt-60">
        <div className="movieDetails">
          <h1 className="font-bold text-sm sm:text-2xl md:text-3xl">{title}</h1>
          <p className="hidden lg:inline-block md:w-full pt-2 leading-tight">{overview}</p>
        </div>
        <div className="flex sm:mt-5 md:mt-5">
          <div className="playButton">
            <button className="bg-yellow-500 hover:bg-opacity-70 sm:px-5 sm:py-1 md:px-5 md:py-1 mr-4 rounded-md text-white font-bold flex items-center p-1 text-sm md:text-base ">
              <span className="">
                <BsFillPlayFill />
              </span>Play
            </button>
          </div>
          <div className="moreInfoButton hidden sm:inline-block md:inline-block">
            <button className="bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 px-5 py-1 rounded-md text-white flex items-center">
              <span className="px-1"><FiInfo /></span>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle