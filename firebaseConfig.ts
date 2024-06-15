// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi1Gm_ITK_ZDD6efs1B5YY8WubsS1mM70",
  authDomain: "dave-50242.firebaseapp.com",
  projectId: "dave-50242",
  storageBucket: "dave-50242.appspot.com",
  messagingSenderId: "712270980972",
  appId: "1:712270980972:web:822f7742a3725870f47549",
  measurementId: "G-DGP0YRRHS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();