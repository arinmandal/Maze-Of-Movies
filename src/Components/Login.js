import { LOGIN_AVATAR } from "../Utils/constant";
import { useRef, useState } from "react"
import { checkValidData } from "../Utils/validate";
import Header from "./Header"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../ReduxStore/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickBtn = () => {
    // Form validation
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return;
    // sign in || sign up
    if (!isSignInForm) {
      // SignUp
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: LOGIN_AVATAR,
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);

        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage)
        });
    }

  }

  function toggleSignForm() {
    setSignInForm(!isSignInForm)
  }
  return (
    <div className='bg-main min-h-screen bg-cover'>
      <Header />
      <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 mx-auto max-w-[380px] overflow-x-hidden rounded-lg mt-20">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col p-12">
          <h2 className="text-white font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign up"}</h2>
          {!isSignInForm && (<input type="text" ref={name} placeholder="Full Name" className="bg-[#333333] p-3 rounded-md mt-5 text-white" />)}

          <input required type="text" ref={email} placeholder="Email of phone number" className="bg-[#333333] p-3 rounded-md my-5 text-white" />
          <input type="password" ref={password} placeholder="Password" className="bg-[#333333] p-3 rounded-md text-white" />
          <p className="text-red-600 font-bold text-xs">{errorMessage}</p>

          <button className="bg-red-600 rounded-md font-bold text-white mt-10 p-3" onClick={handleClickBtn}>{isSignInForm ? "Sign In" : "Sign up"}</button>
          {/* <div className="flex justify-between text-slate-300 pt-1">
            <div className="checkbox">
              <input type="checkbox" className="mr-1" />
              <label htmlFor="">Remember me</label>
            </div>
            <span className="hover:underline cursor-pointer">Need help?</span>
          </div> */}
          <div className="font-light mt-5">
            <p className="text-slate-300" onClick={toggleSignForm}>{isSignInForm ? "New to MazeOfMovies?" : "Already a user?"}<span className="text-white font-bold ml-1 hover:underline cursor-pointer">{isSignInForm ? "Sign up now." : "Sign in"}</span></p>
            {/* <p className="text-slate-300 text-sm pt-3">This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className="text-blue-700 font-bold hover:underline">Learn more.</span></p> */}
          </div>

        </form>

      </div>

    </div >
  )
}

export default Login