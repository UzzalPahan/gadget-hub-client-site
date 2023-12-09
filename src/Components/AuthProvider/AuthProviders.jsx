import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"



export const AuthContext = new createContext(null)
const auth = getAuth(app)


const AuthProviders = ({children}) =>{
    const [users, setUsers] = useState(null)
    const[loader, setLoader] = useState(true)

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) =>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    const githubLogin = (provider) =>{
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const facebookLogin = (provider) =>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUsers(currentUser)
            setLoader(false)
  
        });
        return () =>{
          unSubscribe();
        }
      },[])

    const authInfo = {
        createUser,
        logIn,
        users,
        logOut,
        loader,
        googleLogin,
        githubLogin,
        facebookLogin
    }

    return(
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    )

}

export default AuthProviders