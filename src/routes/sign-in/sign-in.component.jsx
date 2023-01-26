import React, { useEffect } from 'react';

import { auth, signInWithGooglePopup, creatUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import SignUp from '../../components/sign-up/sign-up.component';

function SignIn() {
    useEffect(async () =>{
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await creatUserDocumentFromAuth(response.user);
        }
    }, []);
    
    const logGoogleUserPopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user)
    }
    
    return (
        <>
            <button onClick={logGoogleUserPopup}>sign-in</button>
            <button onClick={signInWithGoogleRedirect}>sign-in redirect</button>
            <SignUp />
        </>
    )
}

export default SignIn