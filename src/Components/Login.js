import { useState } from "react"
import Header from "./Header"
const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);


  function handleChange() {
    setSignInForm(!isSignInForm)
  }
  return (
    <div className='bg-main min-h-screen bg-cover'>
      <Header />
      <div className="bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 mx-auto max-w-[380px] mt-10 overflow-x-hidden rounded-lg ">
        <form action="" className="flex flex-col p-12">
          <h2 className="text-white font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign up"}</h2>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="bg-[#333333] p-3 rounded-md mt-5" />}
          <input type="text" placeholder="Email of phone number" className="bg-[#333333] p-3 rounded-md my-5" />
          <input type="password" placeholder="Password" className="bg-[#333333] p-3 rounded-md" />
          <button className="bg-red-600 rounded-md font-bold text-white mt-10 p-3">{isSignInForm ? "Sign In" : "Sign up"}</button>
          <div className="flex justify-between text-slate-300 pt-1">
            <div className="checkbox">
              <input type="checkbox" className="mr-1"/>
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