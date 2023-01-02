import { createContext, useContext, useState } from "react";

export const authContext=createContext()

export const AuthProvider=({children})=>{

    const [isSignIn,setIsSignIn]=useState(false)

    return <authContext.Provider value={{isSignIn,setIsSignIn}}>
        {children}
    </authContext.Provider>
}

export const useAuthContext=()=>{
 return useContext(authContext)
}