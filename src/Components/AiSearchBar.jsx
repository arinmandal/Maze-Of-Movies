import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addAiSeacrhResult } from "../ReduxStore/AiSearchSlice";
import { model } from "../Utils/Gemini";
import { API_OPTION } from "../Utils/constant";

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
    const AiSearchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Pathaan, Rocky rani ki prem kahani, Fukrey 3, October, Raaz";

    const AiSearchResults = await model.generateContent(AiSearchQuery);

    // Extract the text from Gemini's response
    const responseText = AiSearchResults.response.candidates[0].content.parts[0].text;

    // Split the text into an array of movie names
    const AiMovies = responseText.split(",").map((movie) => movie.trim());

    const promiseArray = AiMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addAiSeacrhResult({ movieNames: AiMovies, movieResult: tmdbResults }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-32">
      <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px]">
        Find Your Perfect <span className="bg-linear-to-r from-[#f3d52d] to-[#ffee02] bg-clip-text text-transparent">Movie</span> Match
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-1/2 md:w-1/2 bg-gray-900 rounded-lg grid grid-cols-12 gap-2 p-4"
      >
        <input
          ref={searchText}
          className="col-span-9 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-colors py-3"
          onClick={AiSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;