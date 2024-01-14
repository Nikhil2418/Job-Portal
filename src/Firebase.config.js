// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVaDSSMYyI58_9q8gnheuadsMKXwHWXHY",
  authDomain: "online-job-portal-531cc.firebaseapp.com",
  projectId: "online-job-portal-531cc",
  storageBucket: "online-job-portal-531cc.appspot.com",
  messagingSenderId: "869086382426",
  appId: "1:869086382426:web:3a7f7a95133cf4a7a14b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};