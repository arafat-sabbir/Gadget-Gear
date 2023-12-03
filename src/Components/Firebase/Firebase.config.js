// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjH89uS7g7FbusqjctrEtNNQn44mFm0Oo",
  authDomain: "gadget-gear-hub.firebaseapp.com",
  projectId: "gadget-gear-hub",
  storageBucket: "gadget-gear-hub.appspot.com",
  messagingSenderId: "850885363276",
  appId: "1:850885363276:web:3647e0730ec52141be56e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;