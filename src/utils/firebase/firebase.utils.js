import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVoGZyCYgKBj7i4G350y7GYHBdeEwL1kQ",
    authDomain: "flo-shop-f1269.firebaseapp.com",
    projectId: "flo-shop-f1269",
    storageBucket: "flo-shop-f1269.appspot.com",
    messagingSenderId: "327272085019",
    appId: "1:327272085019:web:db8d6a1282088fc5eb2abe"
};

const firebaseApp = initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider();          // Using google auth provider class
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);         // We want the signInWithPopup function to get runinng when it is called