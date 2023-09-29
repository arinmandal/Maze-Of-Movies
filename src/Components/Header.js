import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../ReduxStore/userSlice";
import { toggleAiSearch } from "../ReduxStore/AiSearchSlice"
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const enableAiSearch = useSelector((store) => store.ai.enableAiSearch)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
      dispatch(removeUser)
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
    // unsubscribe when component is unload
    return () => unsubscribe()
  }, [])

  const handleAiSearch = () => {
    // Enable AI Search
    dispatch(toggleAiSearch())
  }
  return (
    <div className="w-full absolute z-50 flex justify-between px-10 py-2 items-center backdrop-blur-sm">
      <div className="logo flex-shrink">
        <h2 className="font-bold text-3xl tracking-wide text-yellow-500">
          MazeOfMovies🍿
        </h2>
      </div>
      {user && (<div className="user flex items-center justify-between">
        <button href="#" className="inline-flex items-center justify-center px-4 py-2 mr-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={handleAiSearch}>
          <span class="w-full">{enableAiSearch ? "Home" :"Unlock the power of AI to discover the perfect movie for you."}</span>
          <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
        <img className="h-8"
          src={user?.photoURL} alt="user" />
        <button onClick={handleSignOut} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 ml-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign out</button>

      </div>)}

    </div>
  )
}

export default Header

// "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"