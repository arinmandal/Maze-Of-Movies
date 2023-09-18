// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUT2Zzwmq03h-Win5NB0a-hWNPqK9bJfI",
  authDomain: "mazeofmovies.firebaseapp.com",
  projectId: "mazeofmovies",
  storageBucket: "mazeofmovies.appspot.com",
  messagingSenderId: "511404319539",
  appId: "1:511404319539:web:747facfb94e7389c64d446",
  measurementId: "G-P1T39Q7C0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();