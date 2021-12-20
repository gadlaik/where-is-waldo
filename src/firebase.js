// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGSxjN_mkql1jXyVtOsOZvLxhpFQubtqk",
  authDomain: "where-is-waldo-fb394.firebaseapp.com",
  projectId: "where-is-waldo-fb394",
  storageBucket: "where-is-waldo-fb394.appspot.com",
  messagingSenderId: "1010758292102",
  appId: "1:1010758292102:web:0d3e38ad35c11531e13707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
