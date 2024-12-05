// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMrDLMWBXwMfKY_vPzncl9GWF-uBtkTTo",
    authDomain: "crwn-clothing-9fb70.firebaseapp.com",
    projectId: "crwn-clothing-9fb70",
    storageBucket: "crwn-clothing-9fb70.firebasestorage.app",
    messagingSenderId: "1046109645945",
    appId: "1:1046109645945:web:cb47b20a6a4fcaa637b8a8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => {
    signInWithRedirect(auth, googleProvider)

}

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: any) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    //check if user data doesn't exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error: any) {
            console.log('error creating user', error.message)
        }
    }

    return userDocRef
}
