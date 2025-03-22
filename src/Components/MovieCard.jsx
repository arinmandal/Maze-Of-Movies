import { POSTER_URL } from "../Utils/constant"
const MovieCard = ({ movie: {
  id, poster_path, title, vote_average, original_language, release_date
} }) => {

  return (
    <div className="text-white p-5 rounded-xl shadow-inner shadow-light-100/10 hover:scale-105 transition-transform duration-300 ease-in-out">
      <img  className="rounded-lg w-[250px]" src={POSTER_URL + poster_path} alt={title} />
      <div className="movie-info mt-4">
        <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>
        <div className="mt-2 flex flex-row items-center flex-wrap gap-2">
          <div className="flex flex-row items-center gap-1">
            <img className="size-4 object-contain" src="src\assets\star.svg" alt="Star Icon" />
            <p className="font-bold text-base text-white">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            <span className="text-sm text-gray-100">•</span>
            <p className='capitalize text-gray-100 font-medium text-base'>{original_language}</p>
            <span className="text-sm text-gray-100">•</span>
            <p className='text-gray-100 font-medium text-base'>
              {release_date ? release_date.split('-')[0] : 'N/A'}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieCard;