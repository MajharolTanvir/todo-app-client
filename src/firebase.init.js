// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC77eDA2zZ0eRAWu16FPqQVvEbE5Qq5WoM",
    authDomain: "todo-app-3dc0c.firebaseapp.com",
    projectId: "todo-app-3dc0c",
    storageBucket: "todo-app-3dc0c.appspot.com",
    messagingSenderId: "825632849603",
    appId: "1:825632849603:web:9c46c2f45dd44cf6d4ec76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth