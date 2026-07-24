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


// Wait until everything has loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".subscribe form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the information from the form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const plan = document.getElementById("plan").value;
        const address = document.getElementById("message").value.trim();

        // Check if the user left anything empty
        if (name === "" || email === "" || password === "" || address === "") {
            alert("Please fill in all the required fields.");
            return;
        }

        // Basic email check
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Success message
        alert(
            "Thank you for subscribing, " +
            name +
            "!\n\n" +
            "Subscription Plan: " + plan +
            "\nWe'll contact you soon with your delivery details."
        );

        // Clear the form
        form.reset();
    });

});



// JavaScript for Shopping Cart Page
// Student Name: Alex
// Date: October 2024

// Wait for the page to finish loading before running script
document.addEventListener("DOMContentLoaded", function() {
    
    // Get all quantity input fields and remove buttons
    let quantityInputs = document.querySelectorAll(".qty-input");
    let removeButtons = document.querySelectorAll(".remove-btn");
    let checkoutButton = document.querySelector(".checkout-btn");

    // 1. Add event listeners to quantity inputs to recalculate totals on change
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", function(event) {
            let input = event.target;
            
            // Make sure quantity isn't negative or zero
            if (input.value <= 0) {
                input.value = 1;
            }

            // Update item row total and overall cart total
            updateCartTotal();
        });
    }

    // 2. Add event listeners to remove buttons
    for (let j = 0; j < removeButtons.length; j++) {
        removeButtons[j].addEventListener("click", function(event) {
            let buttonClicked = event.target;
            
            // Delete the table row containing this button
            let tr = buttonClicked.parentElement.parentElement;
            tr.remove();

            // Recalculate total after deleting an item
            updateCartTotal();
        });
    }

    // 3. Checkout button alert message
    if (checkoutButton) {
        checkoutButton.addEventListener("click", function() {
            alert("Thank you for your purchase! Processing checkout...");
        });
    }

    // Function to calculate and update totals
    function updateCartTotal() {
        let total = 0;
        let rows = document.querySelectorAll("tbody tr");

        for (let k = 0; k < rows.length; k++) {
            let row = rows[k];
            let qtyInput = row.querySelector(".qty-input");
            let itemTotalCell = row.querySelector(".item-total");

            if (qtyInput && itemTotalCell) {
                let price = parseFloat(qtyInput.getAttribute("data-price"));
                let quantity = parseInt(qtyInput.value);
                let itemTotal = price * quantity;

                // Update the total column for this specific row
                itemTotalCell.textContent = "$" + itemTotal.toFixed(2);

                // Add to total cost
                total = total + itemTotal;
            }
        }

        // Print final total to console for testing
        console.log("Current Cart Total: $" + total.toFixed(2));
    }
});