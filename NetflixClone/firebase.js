// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2uzTz6J0SUsHgGuQIWNoMpDcK0bkDM1k",
  authDomain: "netflix-project-bb557.firebaseapp.com",
  projectId: "netflix-project-bb557",
  storageBucket: "netflix-project-bb557.appspot.com",
  messagingSenderId: "221241159355",
  appId: "1:221241159355:web:cc1a9f3d655ac72958439e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};