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
    // Grab the search form, input, and equipment cards
    const searchForm = document.querySelector('.search-bar form');
    const searchInput = document.querySelector('.search-bar input[name="query"]');
    const cards = document.querySelectorAll('.card-grid .card');

    if (searchForm && searchInput) {
        // Prevent form submission if input is empty
        searchForm.addEventListener('submit', (event) => {
            const query = searchInput.value.trim();
            
            if (!query) {
                event.preventDefault();
                alert('Please enter a keyword to search for equipment!');
            }
        });

        // Live filter equipment cards as the user types
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim();

            cards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const description = card.querySelector('p')?.textContent.toLowerCase() || '';

                // Show or hide card based on search match
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});