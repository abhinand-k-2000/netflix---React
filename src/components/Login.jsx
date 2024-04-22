
import Header from "./Header"
import { useState, useRef } from "react"
import {validateForm} from "../utilities/validate"
import { app, auth } from "../utilities/firebase"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LOGIN_BG } from "../utilities/constants";



const Login = () => {
    const navigate = useNavigate()

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErroMessage] = useState(null)
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleForm = () => {
        const message = validateForm(email.current.value, password.current.value)
        setErroMessage(message)

        if(message) return ; // If there is any validation error.

        if(!isSignInForm){
            // Logic for sign up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                      }).then(() => {
                        // Profile updated!
                        // ...
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErroMessage(errorCode + ' - ' + errorMessage)
                });

        } else {
            //Logic for sign in form
            signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErroMessage(errorCode + ' - ' + errorMessage)
                });


        }



    }

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        
        <div >
            <Header />
            <div className="absolute">
            <img  src= {LOGIN_BG}
             alt="login-bg"/>
            </div>

            <form onSubmit={(e)=> e.preventDefault()}  className="w-3/12 bg-black p-12 mx-auto my-28 right-0 left-0 absolute bg-opacity-80 text-white">
                <h1 className="text-3xl font-bold mb-3 ">{isSignInForm? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (
                     <input ref={name}  className="p-3 my-3 rounded-md w-full bg-slate-500 text-sm bg-opacity-80" type="text" placeholder="Full Name" />
                )}
               

                <input ref={email}  className="p-3 my-3 rounded-md w-full bg-slate-500 text-sm bg-opacity-80" type="text" placeholder="Email Address" />
                <input ref={password} className="p-3 my-3 rounded-md w-full bg-slate-500 text-sm bg-opacity-80" type="password" placeholder="Password" />

                <p className="text-red-500 text-center">{errorMessage}</p>

                <button className="bg-[rgb(229,9,20)] rounded-md p-2 w-full my-2" onClick={handleForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="mt-5 text-slate-200 " >
                   {isSignInForm? "New to Netflix? " : "Already a member? "}
                    {isSignInForm? <span onClick={toggleSignInForm} className="font-bold text-white cursor-pointer">Sign Up now</span>: <span onClick={toggleSignInForm} className="font-bold text-white cursor-pointer">Sign In now</span>}</p>

            </form>

            
        </div>
    )
}


export default Login