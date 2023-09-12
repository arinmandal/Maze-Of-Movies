import { useRef, useState } from "react"
import { checkValidData } from "../Utils/validate";
import Header from "./Header"
const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [message, setMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickBtn = () => {
    // Form validation
    const message = checkValidData(name.current.value, email.current.value, password.current.value)
    setMessage(message)

  }

  function handleChange() {
    setSignInForm(!isSignInForm)
  }
  return (
    <div className='bg-main min-h-screen bg-cover'>
      <Header />
      <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 mx-auto max-w-[380px] mt-10 overflow-x-hidden rounded-lg ">
        <form action="" onSubmit={(e) => e.preventDefault()} className="flex flex-col p-12">
          <h2 className="text-white font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign up"}</h2>
          {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="bg-[#333333] p-3 rounded-md mt-5 text-white" />}

          <input type="text" ref={email} placeholder="Email of phone number" className="bg-[#333333] p-3 rounded-md my-5 text-white" />
          <input type="password" ref={password} placeholder="Password" className="bg-[#333333] p-3 rounded-md text-white" />
          <p className="text-red-600 font-bold text-xs">{message}</p>

          <button className="bg-red-600 rounded-md font-bold text-white mt-10 p-3" onClick={handleClickBtn}>{isSignInForm ? "Sign In" : "Sign up"}</button>
          <div className="flex justify-between text-slate-300 pt-1">
            <div className="checkbox">
              <input type="checkbox" className="mr-1" />
              <label htmlFor="">Remember me</label>
            </div>
            <span className="hover:underline cursor-pointer">Need help?</span>
          </div>
          <div className="font-light mt-5">
            <p className="text-slate-300">{isSignInForm ? "New to MazeOfMovies?" : "Already a user?"}<span className="text-white font-bold ml-1 hover:underline cursor-pointer" onClick={handleChange}>{isSignInForm ? "Sign up now." : "Sign in"}</span></p>
            <p className="text-slate-300 text-sm pt-3">This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className="text-blue-700 font-bold hover:underline">Learn more.</span></p>
          </div>

        </form>

      </div>

    </div >
  )
}

export default Login