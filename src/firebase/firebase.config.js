// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvGM6Yo710W3-qqSJRPWbR2AWr8udom8o",
  authDomain: "pust-bcs-job-hunter.firebaseapp.com",
  projectId: "pust-bcs-job-hunter",
  storageBucket: "pust-bcs-job-hunter.appspot.com",
  messagingSenderId: "771739801536",
  appId: "1:771739801536:web:399d63dcf11cbb48da5a25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;