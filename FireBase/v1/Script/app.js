import { auth, onAuthStateChanged } from "./firebase.js";

//firebase function check kar rha haka, user login haka nh.
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
window.location = './Pages/dashboard.html';

  } else {
    // User is logout
    window.location = "./Pages/login.html";
  }
});