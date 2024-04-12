
import Header from "./Header"
import { useState } from "react"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        
        <div >
            <Header />
            <div className="absolute">
            <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="login-bg"/>
            </div>

            <form className="w-3/12 bg-black p-12 mx-auto my-28 right-0 left-0 absolute bg-opacity-80 text-white">
                <h1 className="text-3xl font-bold mb-3 ">{isSignInForm? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                     <input className="p-3 my-2 rounded-md w-full bg-slate-500 text-sm bg-opacity-80" type="text" placeholder="Full Name" />
                )}
               

                <input className="p-3 my-2 rounded-md w-full bg-slate-500 text-sm bg-opacity-80" type="text" placeholder="Email Address" />
                <input className="p-3 my-2 rounded-md w-full bg-slate-500 text-sm bg-opacity-80" type="text" placeholder="Password" />
                <button className="bg-[rgb(229,9,20)] rounded-md p-2 w-full my-2">{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="mt-5 text-slate-200 " >
                   {isSignInForm? "New to Netflix? " : "Already a member? "}
                    {isSignInForm? <span onClick={toggleSignInForm} className="font-bold text-white cursor-pointer">Sign Up now</span>: <span onClick={toggleSignInForm} className="font-bold text-white cursor-pointer">Sign In now</span>}</p>

            </form>
            
        </div>
    )
}


export default Login