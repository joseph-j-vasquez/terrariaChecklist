// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFDpM4ybiVdyNQZpQXdMe-NHEgQ4tnTw",
  authDomain: "terrariachecklist-fd998.firebaseapp.com",
  projectId: "terrariachecklist-fd998",
  storageBucket: "terrariachecklist-fd998.firebasestorage.app",
  messagingSenderId: "692737959113",
  appId: "1:692737959113:web:e214b6bd5cbd32cb6b1918",
  measurementId: "G-K1H063VWJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);