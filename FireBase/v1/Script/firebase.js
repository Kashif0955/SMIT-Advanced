// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth,
         createUserWithEmailAndPassword, //signup
         signInWithEmailAndPassword,  //login
         signOut,
         onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyCNthFQsYVKjQnBVmrbOggwhFtMXX1oqb4",
  authDomain: "my-projects-fbf1b.firebaseapp.com",
  projectId: "my-projects-fbf1b",
  storageBucket: "my-projects-fbf1b.appspot.com",
  messagingSenderId: "389373121088",
  appId: "1:389373121088:web:4a31f2b930f6932c59c5a5",
  measurementId: "G-GY4JXYJWER"
=======
   
>>>>>>> 740a9e55250d4ea682c0f9db5ef61a96f106b60b
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged };





