import {auth} from "../utilities/firebase"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";

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
    return (
        <div className="absolute flex justify-between items-center w-screen z-10 bg-gradient-to-bl from-black">
            <img className="w-40 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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