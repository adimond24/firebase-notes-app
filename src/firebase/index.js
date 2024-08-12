//Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//TODO: add SDKs for Firebase products that you want to use
// https://firebase.oogle.com/docs/web/setup#available-libraries

//your web apps firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiAFBMAEiSfVp-2h1f_ovL6CHpduGhCFE",
    authDomain: "fir-note-nextjs.firebaseapp.com",
    projectId:"fir-note-nextjs",
    storageBucket: "fir-note-nextjs.appspot.com",
    messagingSenderId: "779532319317",
    appId: "1:779532319317:web:325e56f7953036a6e7f2dc",
};
//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db};
