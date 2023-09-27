import { POSTER_URL } from "../Utils/constant"
const MovieCard = ({ posterPath }) => {

  return (
    <div className="m-2 w-48 rounded-md bg-red-400 overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer">
      <img src={POSTER_URL + posterPath} alt="" />
    </div>
  )
}
export default MovieCard