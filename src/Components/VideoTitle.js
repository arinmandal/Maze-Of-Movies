import { FiInfo } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video pl-20 pt-72 absolute text-white bg-gradient-to-r from-black mb-2">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-5/12 pt-2">{overview}</p>
      <div className="flex mt-5">
        <button className="bg-yellow-500 hover:bg-opacity-70 px-5 py-1 mr-4 rounded-md text-white font-bold text-lg flex items-center">
          <span className="px-1 text-lg">
            <BsFillPlayFill />
          </span>Play
        </button>

        <button className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 px-5 py-1 rounded-md text-white flex items-center">
          <span className="px-1"><FiInfo /></span>
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle