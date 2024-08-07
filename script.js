const menuItems = document.querySelectorAll('.port-nav ul li');
const portfolioItems = document.querySelectorAll('.portfolio-items .category');

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // Remove active class from all menu items
        menuItems.forEach(item => item.classList.remove('active'));

        // Add active class to the clicked menu item
        event.target.parentElement.classList.add('active');

        // Get the category from the clicked menu item
        const category = event.target.dataset.category;

        // Filter portfolio items based on the category
        portfolioItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Burger Menu
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

// Contactbutton
const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", function() {
    window.location.href = "mailto:awiwijaya123@gmail.com?subject=Website Inquiry";
});



