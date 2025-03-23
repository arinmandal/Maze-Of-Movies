import { LOGIN_AVATAR } from "../Utils/constant";
import { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";
import Header from "./Header";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../ReduxStore/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [password, setPassword] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  
  const handleClickBtn = () => {
    // Form validation
    const message = checkValidData(email.current.value, password);
    setErrorMessage(message);
    if (message) return;
    
    if (!isSignInForm) {
      // SignUp
      createUserWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: LOGIN_AVATAR,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  const passwordHints = [
    { text: "At least 8 characters", regex: /.{8,}/ },
    { text: "At least one uppercase letter (A-Z)", regex: /[A-Z]/ },
    { text: "At least one lowercase letter (a-z)", regex: /[a-z]/ },
    { text: "At least one number (0-9)", regex: /\d/ },
  ];

  return (
    <div>
      <Header />
      <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 max-w-[380px] overflow-x-hidden rounded-lg relative mx-auto top-36">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col p-10">
          <h2 className="text-white font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
          {!isSignInForm && (
            <input type="text" ref={name} placeholder="Full Name" className="bg-[#333333] p-2 rounded-md mt-5 text-white" />
          )}
          <input required type="text" ref={email} placeholder="Enter your email" className="bg-[#333333] p-2 rounded-md my-5 text-white" />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            className="bg-[#333333] p-2 rounded-md text-white"
          />
          {!isSignInForm && (
            <div className="text-xs text-gray-400 mt-2">
              {passwordHints.map((hint, index) => (
                <p key={index} className={hint.regex.test(password) ? "text-green-500" : "text-red-500"}>
                  {hint.text}
                </p>
              ))}
            </div>
          )}
          <p className="text-red-600 font-bold text-xs">{errorMessage}</p>
          <button className="bg-red-600 rounded-md font-bold text-white p-2 mt-4 cursor-pointer" onClick={handleClickBtn}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <div className="font-light mt-2">
            <p className="text-slate-300 cursor-pointer" onClick={() => setSignInForm(!isSignInForm)}>
              {isSignInForm ? "New to MazeOfMovies?" : "Already a user?"} 
              <span className="text-white font-bold ml-1 hover:underline cursor-pointer">
                {isSignInForm ? "Sign up now." : "Sign in"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
