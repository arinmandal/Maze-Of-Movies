import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../ReduxStore/userSlice";
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  console.log(user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      dispatch(removeUser)
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }



  return (
    <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30   flex items-center justify-between px-10 py-2 bg-g">
      <div className="logo">
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