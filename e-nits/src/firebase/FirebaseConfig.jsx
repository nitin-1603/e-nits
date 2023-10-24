// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsMtM1IdArznyaN7J1hXs1Ea_TM16_VEs",
    authDomain: "e-nits-web-app.firebaseapp.com",
    projectId: "e-nits-web-app",
    storageBucket: "e-nits-web-app.appspot.com",
    messagingSenderId: "446929673672",
    appId: "1:446929673672:web:7ef0d829d8a7ad22b874fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };
 