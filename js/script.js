// MENU BUTTON
// -----------------------------------------------------------------
// Select the menu button element by its ID
const menuButton = document.querySelector('#menu-btn');

// Select the header element with the class 'header'
const headerElement = document.querySelector('.header');

// Select all navigation links within elements having the class 'navbar' and 'a' tag
const navigationLinks = document.querySelectorAll('.navbar a');

// Add a click event listener to the menu button
menuButton.addEventListener('click', () => {
  // Toggle the 'fa-times' class on the menu button, used for menu icon animation
  menuButton.classList.toggle('fa-times');
  
  // Toggle the 'active' class on the header element to show/hide the mobile menu
  headerElement.classList.toggle('active');
});

// Close the menu when a navigation link is clicked
navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the 'fa-times' class to reset the menu button icon
    menuButton.classList.remove('fa-times');
    
    // Remove the 'active' class to hide the mobile menu
    headerElement.classList.remove('active');
  });
});

// THEME TOGGLER
// ------------------------------------------------------------------

// Initialize the theme toggler element.
const themeToggler = document.querySelector('#theme-toggler');

// Check if the user has a stored theme preference in localStorage.
const userTheme = localStorage.getItem('theme');

// Set the initial theme based on the user's preference (if available).
if (userTheme === 'dark') {
  document.body.classList.add('active');
  themeToggler.classList.add('fa-moon');
}

// Add a click event listener to toggle the theme.
themeToggler.addEventListener('click', () => {
  // Toggle the moon icon class.
  themeToggler.classList.toggle('fa-moon');

  // Toggle the 'active' class on the document body.
  document.body.classList.toggle('active');

  // Check the current theme and store the user's preference in localStorage.
  if (themeToggler.classList.contains('fa-moon')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});