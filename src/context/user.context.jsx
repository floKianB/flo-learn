import React, { createContext, useState, useEffect } from 'react'

import { onAuthStateChangeListener, creatUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


export const UserProvider = ({children}) => {
    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user) => {
            if(user){
                creatUserDocumentFromAuth(user)                         // Save user in DB if it exists
            } 
            setCurrentUser(user);
            console.log(user)
        })
        
        return unsubscribe
    },[])

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}