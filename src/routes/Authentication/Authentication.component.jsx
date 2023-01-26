import React, { useEffect } from 'react';
import './authentication.styles.scss';

import { auth, creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up/sign-up-form';
import SignInForm from '../../components/sign-in/sign-in-form';

function Authentication() {
    useEffect(async () =>{
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await creatUserDocumentFromAuth(response.user);
        }
    }, []);
    
    
    
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;