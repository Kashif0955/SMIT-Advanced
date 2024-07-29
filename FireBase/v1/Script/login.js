import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");
const msgDiv = document.querySelector("#msg");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    msgDiv.innerText = "loading...";

    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    if (!username || !password) {
      msgDiv.innerText = "Please fill in all fields";
      return;
    }

    const result = await signInWithEmailAndPassword(auth, username, password);

    window.location = "./dashboard.html";

    console.log("result ", result);
  } catch (error) {
    msgDiv.innerText = error.message || "An error occurred";
    console.log("my error msg", error.message);
  }
});
