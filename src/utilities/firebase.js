// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Y_fvGOC_UYjyTqh-SpcN_t0cv5V7jFo",
  authDomain: "netflixify-fa0cb.firebaseapp.com",
  projectId: "netflixify-fa0cb",
  storageBucket: "netflixify-fa0cb.appspot.com",
  messagingSenderId: "184503384141",
  appId: "1:184503384141:web:591be97f7743fd92058404",
  measurementId: "G-79GC62R5G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { app, analytics, auth }