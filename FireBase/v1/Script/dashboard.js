import { auth, signOut, onAuthStateChanged } from "./firebase.js";

const userEmailDiv = document.querySelector("#user-email");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("user:", user);

    userEmailDiv.innerText = user.email;
  } else {
    window.location = "./login.html";
    console.log("User is signed out");
  }
});

//
//

const btn = document.querySelector("#logout-button");

btn.addEventListener("click", async () => {
  try {
    await signOut(auth);
   
    console.log("Sign-out successful");
  } catch (error) {
    console.log(" error:", error);
  }
});