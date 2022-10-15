
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-firebase-32568.firebaseapp.com",
    projectId: "react-firebase-32568",
    storageBucket: "react-firebase-32568.appspot.com",
    messagingSenderId: "181573587376",
    appId: "1:181573587376:web:869d2bcc27ee58fcea0675"
});

export const auth = app.auth();
export default app;