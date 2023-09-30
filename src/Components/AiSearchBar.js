import { useRef } from "react"
import openai from "../Utils/OpenAI"
import { API_OPTION } from "../Utils/constant"
import { useDispatch } from "react-redux";
import { addAiSeacrhResult } from "../ReduxStore/AiSearchSlice";



const AiSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();



  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTION
    );
    const json = await data.json();

    return json.results;
  };


  const AiSearchClick = async () => {
    // console.log(searchText.current.value)

    // Specific prompt for good result
    const AiSearchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Pathaan, Rocky rani ki prem kahani, Fukrey 3, October, Raaz";

    // OpenAI ChatGPT API
    const AiSearchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: AiSearchQuery }],
      model: 'gpt-3.5-turbo',
    });

    // if (AiSearchResults.choices) {
    //   // Error
    // }

    // Mughal-e-Azam, Sholay, Amar Akbar Anthony, Muqaddar Ka Sikandar, Silsila - convert this string to array.
    // search result from AI
    const AiMovies = AiSearchResults.choices?.[0]?.message?.content.split(",");
    // For each movie I will search TMDB API
    const promiseArray = AiMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    // console.log(tmdbResults);
    dispatch(addAiSeacrhResult({ movieNames:AiMovies ,movieResult:tmdbResults }))
  }

  return (
    <div className="flex justify-center pt-32">
      <form onSubmit={(e) => e.preventDefault()} className="sm:w-1/2 md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          className="col-span-9 p-3 m-3" type="text" placeholder="What would you like to watch today?" />
        <button className="bg-yellow-500 m-2 sm:p-3 sm:m-3 md:p-3 md:m-3 col-span-3 font-sans font-semibold" onClick={AiSearchClick}>
          Search
        </button>
      </form>
    </div>
  )
}

export default AiSearchBar