import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../ReduxStore/userSlice";
import { toggleAiSearch } from "../ReduxStore/AiSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const enableAiSearch = useSelector((store) => store.ai.enableAiSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleAiSearch = () => {
    dispatch(toggleAiSearch());
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-yellow-500 font-bold text-sm tracking-tight md:text-3xl sm:text-2xl">
          MazeOfMovies🍿
        </h2>
      </div>
      {user && (
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={handleAiSearch}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white rounded-md px-3 py-1 sm:px-4 sm:py-2 flex items-center"
          >
            <span className="text-sm sm:text-base">
              {enableAiSearch ? "Home" : "AI Search"}
            </span>
            <svg
              className="hidden sm:inline-block ml-2 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <img
            className="hidden sm:block h-8 w-8 rounded-full object-cover"
            src={user?.photoURL}
            alt="User Avatar"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white text-sm rounded-md px-3 py-1 sm:px-4 sm:py-2  sm:text-base"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
