import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../ReduxStore/userSlice";
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
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





  return (
    <div className="absolute w-screen z-50 flex justify-between px-10 py-2 items-center backdrop-blur-sm">
      <div className="logo flex-shrink">
        <h2 className="font-bold text-3xl tracking-wide text-yellow-500">
          MazeOfMovies🍿
        </h2>
      </div>
      {user && (<div className="user flex">
        <img className="h-8"
          src={user?.photoURL} alt="usericon" />
        <button onClick={handleSignOut} className="bg-red-500 rounded-md px-2 ml-2 text-white font-semibold">Sign out</button>
      </div>)}

    </div>
  )
}

export default Header

// "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"