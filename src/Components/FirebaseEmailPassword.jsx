
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5zzCrcg-NP036EFNEmUGPz9U6zdYGo0w",
    authDomain: "emailpasswordauth-1023e.firebaseapp.com",
    projectId: "emailpasswordauth-1023e",
    storageBucket: "emailpasswordauth-1023e.appspot.com",
    messagingSenderId: "390433167938",
    appId: "1:390433167938:web:164759a7763d4cc9c0ebdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)