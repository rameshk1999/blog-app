// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo0E7yVF-NXLx85GsXO4d3BUwOFSmztzg",
  authDomain: "newsblog-b362a.firebaseapp.com",
  projectId: "newsblog-b362a",
  storageBucket: "newsblog-b362a.appspot.com",
  messagingSenderId: "144097101709",
  appId: "1:144097101709:web:8ad5619585615ff29cdfc4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
