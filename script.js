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