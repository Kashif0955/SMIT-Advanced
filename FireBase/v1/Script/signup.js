import { auth,createUserWithEmailAndPassword } from "./firebase.js"

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#signupForm");

    form.addEventListener("submit", async (event) => {

        try {
            event.preventDefault();

      
            const username = document.getElementById('user').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('pass').value;


            const result = await createUserWithEmailAndPassword(auth, email, password);
            window.location = "./dashboard.html";
            
            // Log data to console
            // console.log("Username:", username);
            // console.log("Email:", email);
            // console.log("Password:", password);


                 // Optionally, you can also log the entire form data object
        // const formData = {
        //     username,
        //     email,
        //     password
        // };
        // console.log("Form Data:", formData);
        } catch (error) {
            console.log("the error is:",error.message);
        }
       

   
    });
});
