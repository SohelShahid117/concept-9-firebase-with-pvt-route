// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnuuP_asle9bSjNmob1A4ii648c8fWz2E",
  authDomain: "fir-with-pvt-route.firebaseapp.com",
  projectId: "fir-with-pvt-route",
  storageBucket: "fir-with-pvt-route.appspot.com",
  messagingSenderId: "168717283504",
  appId: "1:168717283504:web:18ca6ea59b017630690b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
