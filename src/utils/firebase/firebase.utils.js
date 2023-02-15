import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, getDocs, collection } from 'firebase/firestore';
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
export const db = getFirestore(firebaseApp);

// Authentication
const googleProvider = new GoogleAuthProvider();          // Using google auth provider class
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);         // We want the signInWithPopup function to get runinng when it is called
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const creatUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef)
    // if user dose not exist
    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (error) {
            console.log('error in creating user')
        }
    }
    return userDocRef;
};

export const creatAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;                             //Exith the method when email or password is not provided
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;                             //Exith the method when email or password is not provided
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => signOut(auth)


export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)


// _____________________________________________________________________________________________________

export const getCourses = async () => {
    const coursesSnapshot = await getDocs(collection(db, 'Courses'));
    let courses = [];
    coursesSnapshot.forEach((course)=>{
        courses.push(course);
    })
    return courses;
}
