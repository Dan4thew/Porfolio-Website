// Example of a responsive navigation
const navToggler = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('collapse');
});

// Example of a modal
const projectCards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('.card-title').textContent;
        const projectDescription = card.querySelector('.card-text').textContent;
        const projectImage = card.querySelector('.card-img-top').src;

        // Update modal content
        modal.querySelector('.modal-title').textContent = projectTitle;
        modal.querySelector('.modal-body').textContent = projectDescription;
        modal.querySelector('.modal-image').src = projectImage;

        // Show modal
        modal.classList.add('show');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
});


// Get all menu items
var menuItems = document.querySelectorAll(".nav-item a");

// Get the current page URL
var currentUrl = window.location.href;

// Loop through all menu items
for (var i = 0; i < menuItems.length; i++) {
    // Get the href attribute of the menu item
    var menuItemUrl = menuItems[i].getAttribute("href");

    // Check if the menu item URL matches the current page URL
    if (menuItemUrl === currentUrl) {
        // Add the 'active' class to the menu item
        menuItems[i].classList.add("active");
    }
}
