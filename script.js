document.addEventListener("DOMContentLoaded", function () {

    // Welcome message

    alert("Welcome to Bean Boutique Coffee Shop!");

    // Contact form validation

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e){

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        if(name==="" || email==="" || message===""){

            e.preventDefault();

            alert("Please complete all fields.");

            return;

        }

        if(!email.includes("@")){

            e.preventDefault();

            alert("Enter a valid email address.");

            return;

        }

        alert("Thank you for contacting Bean Boutique!");

    });

});
document.addEventListener("DOMContentLoaded",()=>{

const searchForm=document.querySelector(".search-bar form");

searchForm.addEventListener("submit",(e)=>{

const input=searchForm.querySelector("input");

if(input.value.trim()===""){

e.preventDefault();

alert("Please enter a coffee name.");

}

});

const menuItems=document.querySelectorAll(".menu li");

menuItems.forEach(item=>{

item.addEventListener("mouseover",()=>{

item.style.transform="scale(1.03)";

});

item.addEventListener("mouseout",()=>{

item.style.transform="scale(1)";

});

});

});  

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the values entered by the user
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if every field has been filled in
        if (name === "" || email === "" || password === "" || message === "") {
            alert("Please complete all the fields before submitting.");
            return;
        }

        // Simple email validation
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password should have at least 6 characters
        if (password.length < 6) {
            alert("Your password should be at least 6 characters long.");
            return;
        }

        // If everything is okay
        alert("Thank you, " + name + "! Your message has been sent successfully.");

        // Clear the form
        form.reset();
    });

});


