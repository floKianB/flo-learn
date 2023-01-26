import React from 'react';

import { signInWithGooglePopup, creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

function SignIn() {
    const logGoogleUserPopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user)
    }
    return (
        <button onClick={logGoogleUserPopup}>sign-in</button>
    )
}

export default SignIn