import { RouterProvider, createBrowserRouter} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../ReduxStore/userSlice"
const Body = () => {

  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL  }))
        // navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        // navigate("/")
      }
    });
  }, [])



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body