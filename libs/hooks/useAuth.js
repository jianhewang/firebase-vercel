import { useState, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "libs/firebase";

function useAuth(){

    const [user, setUser] = useState({user:null})

    useEffect(()=>{
        // component mounts
        const authChange = onAuthStateChanged(auth, (clientCredential)=>{
            if (clientCredential){
                setUser(clientCredential)
            } else{
                setUser(null)
            }
        })

        // clean up function
        // component unmount
        return () => authChange()
    }, [])

    return user
}

export { useAuth }

