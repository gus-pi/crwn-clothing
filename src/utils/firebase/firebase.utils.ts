// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

