// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdzmpl_13AHZoP3tjfwl7EQTQGaeyghRA",
  authDomain: "kamy-list.firebaseapp.com",
  projectId: "kamy-list",
  storageBucket: "kamy-list.appspot.com",
  messagingSenderId: "1014063399755",
  appId: "1:1014063399755:web:f8ee00b297335512bc1ece",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
