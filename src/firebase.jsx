// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP1Cd0b1_EdY6tl2kLf_guMEv_Y6tkstU",
  authDomain: "rcart-e1210.firebaseapp.com",
  projectId: "rcart-e1210",
  storageBucket: "rcart-e1210.firebasestorage.app",
  messagingSenderId: "151017503368",
  appId: "1:151017503368:web:186a9d85a491006b003d3d",
  measurementId: "G-2QZC5GXNGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
