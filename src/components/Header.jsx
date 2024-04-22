import {auth} from "../utilities/firebase"
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LOGO } from "../utilities/constants";

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
          }).catch((error) => {
            // An error happened.
            console.log(error)
          });
    }   

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            // user signed in => always go to the /browse
              const uid = user.uid;
              navigate("/browse")
            } else {
              // User is signed out => always go to the login
              navigate("/")
            }
          });
    }, [])


    return (
        <div className="absolute flex justify-between items-center w-[100%] z-10 bg-gradient-to-bl from-black ">
            <img className="w-40 " src= {LOGO}
            alt="logo" />
            {
                location.pathname !== '/' && (
                    <div>
                    <button onClick={handleSignOut} className="text-white m-4 font-bold shadow-lg bg-red-700 p-2 rounded-lg bg-slate-">Sign Out</button>
                    </div>
                )
            }
            
        </div>
    )
}


export default Header 