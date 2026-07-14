// Bean Boutique Events JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    
    const reviewCards = document.querySelectorAll('.test-card');
    
    if (reviewCards.length > 0) {
        reviewCards.forEach(card => {
            
            card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }


    const menuBtn = document.querySelector('.hero .btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
    
            menuBtn.style.opacity = '0.7';
            menuBtn.textContent = 'Opening Menu...';
        });
    }


    // --- 3. HOMEPAGE QUICK CONTACT FORM VALIDATION ---
    // Quick baseline verification for the mini-form at the bottom of the landing page
    const homeForm = document.querySelector('.contact form');
    
    if (homeForm) {
        homeForm.addEventListener('submit', (event) => {
            const nameField = document.getElementById('name');
            const messageField = document.getElementById('message');
            
        
            const nameVal = nameField.value.trim();
            const messageVal = messageField.value.trim();

            if (nameVal.length < 2) {
                alert('Please give us a valid name so we know who we are chatting with!');
                nameField.focus();
                event.preventDefault(); 
                return;
            }

            if (messageVal.length < 5) {
                alert('Your message is a little too short! Drop us a few more details.');
                messageField.focus();
                event.preventDefault(); 
                return;
            }

            
            alert(`Thanks for dropping a line, ${nameVal}! We will get back to you shortly.`);
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Grab all the deal items from the list
    const dealItems = document.querySelectorAll('.offers ul li');
    if (!dealItems.length) return; // Safety check in case the HTML structure changes


    const currentDay = new Date().getDay();


    let activeIndex = -1;

    if (currentDay === 1) {       // Monday
        activeIndex = 0;
    } else if (currentDay === 3) { // Wednesday
        activeIndex = 1;
    } else if (currentDay === 5) { // Friday
        activeIndex = 2;
    }

    
    if (activeIndex !== -1 && dealItems[activeIndex]) {
        const todaysDeal = dealItems[activeIndex];
        
    
        todaysDeal.style.backgroundColor = '#fff3cd'; 
        todaysDeal.style.borderLeft = '4px solid #ffc107';
        todaysDeal.style.paddingLeft = '10px';
        todaysDeal.style.fontWeight = 'bold';
        
        
        todaysDeal.innerHTML += ' <strong>(Today\'s Deal! 🔥)</strong>';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.querySelector('form');
    
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
    
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        
        if (nameValue.length < 2) {
            alert('Please enter a valid name (at least 2 characters).');
            nameInput.focus();
            event.preventDefault(); // Stop the form from submitting
            return;
        }

        if (messageValue.length < 10) {
            alert('Please write a slightly longer message so we can better help you!');
            messageInput.focus();
            event.preventDefault(); // Stop the form from submitting
            return;
        }

        
        alert(`Thanks for reaching out, ${nameValue}! We'll get back to you soon.`);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const cards = document.querySelectorAll('.card-grid .card');

    
    if (!searchInput || cards.length === 0) return;

    
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        cards.forEach(card => {
            
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            
            
            if (cardTitle.includes(searchTerm)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
    });

    
    const searchForm = document.querySelector('.search-bar form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    
    if (!checkoutBtn) return;

    checkoutBtn.addEventListener('click', () => {
    
        
        alert('Thank you for your order! Redirecting you to our secure payment portal...');
        
     
    });
});



document.addEventListener('DOMContentLoaded', () => {
    
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const cards = document.querySelectorAll('.card-grid .card');


    if (!searchInput || cards.length === 0) return;

    
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        cards.forEach(card => {
            
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            
            
            if (cardTitle.includes(searchTerm)) {
                card.style.display = 'block'; // Or 'flex' depending on your layout style
            } else {
                card.style.display = 'none';
            }
        });
    });

    
    const searchForm = document.querySelector('.search-bar form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
});