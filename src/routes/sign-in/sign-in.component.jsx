import React from 'react';

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

function SignIn() {
    const logGoogleUserPopup = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <button onClick={logGoogleUserPopup}>sign-in</button>
    )
}

export default SignIn