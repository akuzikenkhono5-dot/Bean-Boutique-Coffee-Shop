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

document.addEventListener('DOMContentLoaded', () => {
    // Grab key elements from the DOM
    const cartTable = document.querySelector('.cart table');
    const totalDisplay = document.querySelector('.cart p:nth-of-type(2)');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Function to calculate and update line totals and grand total
    function updateCartTotal() {
        let grandTotal = 0;
        const rows = cartTable.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const qtyInput = row.querySelector('.qty-input');
            const itemTotalCell = row.querySelector('.item-total');

            if (qtyInput && itemTotalCell) {
                const price = parseFloat(qtyInput.dataset.price);
                const quantity = parseInt(qtyInput.value) || 0;
                const rowTotal = price * quantity;

                // Update row total text
                itemTotalCell.textContent = `$${rowTotal.toFixed(2)}`;
                
                // Add to grand total
                grandTotal += rowTotal;
            }
        });

        // Update total display section
        if (totalDisplay) {
            totalDisplay.textContent = `Total: $${grandTotal.toFixed(2)}`;
        }
    }

    // Handle Quantity Changes & Item Removals
    if (cartTable) {
        cartTable.addEventListener('input', (event) => {
            if (event.target.classList.contains('qty-input')) {
                updateCartTotal();
            }
        });

        cartTable.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-btn')) {
                // Remove the table row
                const row = event.target.closest('tr');
                if (row) {
                    row.remove();
                    updateCartTotal();
                }
            }
        });
    }

    // Checkout Button Action
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const rows = cartTable.querySelectorAll('tbody tr');
            if (rows.length === 0) {
                alert('Your cart is empty!');
            } else {
                alert('Thank you for your order! Proceeding to checkout...');
            }
        });
    }

    // Initial calculation on page load
    updateCartTotal();
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Event Registration Interaction ---
    const registerButtons = document.querySelectorAll('.register-btn');

    registerButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // Find the title of the event closest to the clicked button
            const eventCard = e.target.closest('.event');
            const eventName = eventCard ? eventCard.querySelector('h3').textContent : 'this event';

            // Check if the user is already signed up
            const isRegistered = button.classList.contains('registered');

            if (isRegistered) {
                // Friendly confirmation to cancel
                const wantsToCancel = confirm(`Are you sure you want to cancel your spot for "${eventName}"?`);
                
                if (wantsToCancel) {
                    button.textContent = 'Register';
                    button.classList.remove('registered');
                    button.style.backgroundColor = ''; // Reverts back to your default CSS color
                    button.style.color = '';
                    alert(`Got it! We've removed your registration for "${eventName}".`);
                }
            } else {
                // Mark as registered with a cheerful response
                button.textContent = 'You\'re In! ✓';
                button.classList.add('registered');
                button.style.backgroundColor = '#2e7d32'; // Warm green confirmation color
                button.style.color = '#ffffff';
                alert(`Awesome! You're officially on the list for "${eventName}". See you there! ☕`);
            }
        });
    });

    // --- 2. Dynamic Live Search Filter ---
    const searchInput = document.querySelector('.search-bar input[name="query"]');
    const searchForm = document.querySelector('.search-bar form');

    if (searchInput) {
        // Filter events as the user types in real-time
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            // Filter the event cards
            const events = document.querySelectorAll('.event');
            events.forEach(event => {
                const title = event.querySelector('h3').textContent.toLowerCase();
                const date = event.querySelector('p').textContent.toLowerCase();

                // Show or hide depending on match
                if (title.includes(query) || date.includes(query)) {
                    event.style.display = '';
                } else {
                    event.style.display = 'none';
                }
            });

            // Filter list items across the page
            const listItems = document.querySelectorAll('section ul li');
            listItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Gently nudge the user if they try submitting an empty search
        searchForm.addEventListener('submit', (e) => {
            if (!searchInput.value.trim()) {
                e.preventDefault();
                alert('Please type an event name or date before searching!');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // --- Contact Form Handling ---
    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the default browser submit page refresh
            event.preventDefault();

            // Capture field values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple basic validation checks
            if (!name || !email || !password || !message) {
                alert('Please fill in all required fields before sending!');
                return;
            }

            // Password length check
            if (password.length < 6) {
                alert('For your security, please ensure your password is at least 6 characters long.');
                return;
            }

            // Visual feedback on the submit button
            const submitBtn = contactForm.querySelector('input[type="submit"]');
            const originalValue = submitBtn.value;
            
            submitBtn.value = 'Sending...';
            submitBtn.disabled = true;

            // Simulate sending message (e.g. background request)
            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you shortly at ${email}. ☕`);
                
                // Reset form fields
                contactForm.reset();
                
                // Restore submit button state
                submitBtn.value = originalValue;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Live Search & Menu Filtering
    // ==========================================
    const searchInput = document.querySelector('.search-bar input[name="query"]');
    const searchForm = document.querySelector('.search-bar form');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const listItems = document.querySelectorAll('section.menu li, ul li');

            listItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });

        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                if (!searchInput.value.trim()) {
                    e.preventDefault();
                    alert('Please enter a coffee or pastry name to search! ☕');
                }
            });
        }
    }

    // ==========================================
    // 2. Interactive Menu Item Buttons ("Add to Cart")
    // ==========================================
    const menuItems = document.querySelectorAll('.menu ul li, body > ul li');

    menuItems.forEach((item) => {
        // Create an "Add to Cart" button for each item dynamically
        const addButton = document.createElement('button');
        addButton.textContent = '+ Add';
        addButton.style.marginLeft = '12px';
        addButton.style.padding = '4px 10px';
        addButton.style.borderRadius = '4px';
        addButton.style.border = 'none';
        addButton.style.backgroundColor = '#6d4c41';
        addButton.style.color = '#ffffff';
        addButton.style.cursor = 'pointer';
        addButton.style.fontSize = '0.8rem';

        // Append button to list item
        item.appendChild(addButton);

        // Click handler for adding item
        addButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemName = item.childNodes[0].textContent.split('-')[0].trim();
            
            // Visual feedback
            addButton.textContent = 'Added! ✓';
            addButton.style.backgroundColor = '#2e7d32';

            setTimeout(() => {
                addButton.textContent = '+ Add';
                addButton.style.backgroundColor = '#6d4c41';
            }, 1500);

            alert(`Added 1x "${itemName}" to your shopping cart! ☕`);
        });
    });
});