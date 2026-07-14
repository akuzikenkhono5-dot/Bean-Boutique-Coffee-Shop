// Bean Boutique Events JavaScript

document.addEventListener("DOMContentLoaded", function () {


    alert("Welcome to Bean Boutique Coffee Shop Events!");

    
    const form = document.querySelector(".search-bar form");

    if (form) {
        form.addEventListener("submit", function (event) {

            const search = document.querySelector("input[name='query']");

            if (search.value.trim() === "") {
                event.preventDefault();
                alert("Please enter something to search.");
            }

        });
    }

    
    const buttons = document.querySelectorAll(".register-btn");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            alert("You have successfully registered for this event!");

            button.textContent = "Registered";
            button.disabled = true;

        });

    });

});