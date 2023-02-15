// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXuHcxG9a75YCgswLvpQlXoblp7aJJNc",
  authDomain: "headstarter-team-platform.firebaseapp.com",
  projectId: "headstarter-team-platform",
  storageBucket: "headstarter-team-platform.appspot.com",
  messagingSenderId: "1051594389370",
  appId: "1:1051594389370:web:9df9b6763df5bbe4fe08c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
