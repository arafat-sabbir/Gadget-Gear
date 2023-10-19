// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFUb5N8TjgVbA9Rfi0_M_Bhsl_ClHC31g",
  authDomain: "electron-f1d41.firebaseapp.com",
  projectId: "electron-f1d41",
  storageBucket: "electron-f1d41.appspot.com",
  messagingSenderId: "773032823092",
  appId: "1:773032823092:web:d8ad570723466577f17d61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;