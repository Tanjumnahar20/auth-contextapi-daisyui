// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPv_LrowWfSWGfB722WCqq_wlTJmyQiig",
  authDomain: "auth-contextapi-daisyui-a7f0d.firebaseapp.com",
  projectId: "auth-contextapi-daisyui-a7f0d",
  storageBucket: "auth-contextapi-daisyui-a7f0d.appspot.com",
  messagingSenderId: "349705885059",
  appId: "1:349705885059:web:f382e4c086b587f810d2b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;