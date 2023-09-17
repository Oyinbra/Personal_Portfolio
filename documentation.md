# HTML Code Documentation

This documentation provides an overview of the HTML, CSS and Javascript code for "My Personal Portfolio."

## Table of Contents

- [HTML Introduction](#html-introduction)
- [HTML Structure](#html-structure)
- [CSS and Favicon](#css-and-favicon)
- [Sections](#sections)
  - [Header](#header)
  - [Home](#home)
  - [About](#about)
  - [Services](#services)
  - [Portfolio](#portfolio)
  - [Contact](#contact)
- [JavaScript](#javascript)

## HTML Introduction

This HTML code represents a personal portfolio website. It includes sections for showcasing personal information, skills, services, portfolio items, and a contact form.

## HTML Structure

The HTML document follows a standard structure, including a DOCTYPE declaration, `<html>`, `<head>`, and `<body>` tags. It is written in English and configured for responsiveness.

## CSS and Favicon

- The website uses external CSS styles defined in the "css/style.css" file.
- It includes a favicon (shortcut icon) located at "img/favicon.ico."

## Sections

### Header

- The header section contains the user's profile picture, name, and job title.
- It also includes a navigation bar with links to different sections of the website.

### Home

- The home section presents a brief introduction and a call-to-action button for downloading the user's CV.
- It includes social media links for LinkedIn, GitHub, and Twitter.

### About

- The about section provides detailed information about the user, their experience, programming languages, and a call-to-action button for contacting them.

### Services

- The services section lists the user's offered services, including software development, backend development, responsive website development, DevOps integration, and code optimization.
- Each service is accompanied by an icon and a brief description.

### Portfolio

- The portfolio section showcases projects. Each project includes an image, a title, and a link to the GitHub repository.
- The section can be expanded to include more portfolio items as needed.

### Contact

- The contact section features a form with fields for name, email, project, and message.
- It is configured for use with Netlify forms.
- A "Send" button allows users to submit their inquiries.

## JavaScript

- The website includes JavaScript for functionality.
- It uses Font Awesome icons for the hamburger menu and theme toggler.
- jQuery is included via a CDN.
- Custom JavaScript is linked from "js/script.js."

# CSS Code Documentation

## Table of Contents

- [CSS Introduction](#css-introduction)
- [Google Fonts and Root Variables](#google-fonts-and-root-variables)
- [Reset Styles](#reset-styles)
- [Base Font Size](#base-font-size)
- [Body Styles](#body-styles)
- [Active State Styles](#active-state-styles)
- [Section Styles](#section-styles)
- [Button Styles](#button-styles)
- [Heading Styles](#heading-styles)
- [Header Styles](#header-styles)
- [User Information Styles](#user-information-styles)
- [Navigation Link Styles](#navigation-link-styles)
- [Menu Button and Theme Toggler Styles](#menu-button-and-theme-toggler-styles)
- [Home Section Styles](#home-section-styles)
- [About Section Styles](#about-section-styles)
- [Row and Box Container Styles in About Section](#row-and-box-container-styles-in-about-section)
- [Box Styles in About Section](#box-styles-in-about-section)
- [Content Column Styles in About Section](#content-column-styles-in-about-section)
- [Services Section Styles](#services-section-styles)
- [Box Container Styles in Services Section](#box-container-styles-in-services-section)
- [Box Styles in Services Section](#box-styles-in-services-section)
- [Icon Styles in Services Section](#icon-styles-in-services-section)
- [Portfolio Section Styles](#portfolio-section-styles)
- [Box Container Styles in Portfolio Section](#box-container-styles-in-portfolio-section)
- [Box Styles in Portfolio Section](#box-styles-in-portfolio-section)
- [Image Styles in Portfolio Section](#image-styles-in-portfolio-section)
- [Contact Form Styles](#contact-form-styles)
- [Media Queries](#media-queries)

## CSS Introduction

This CSS code is responsible for styling the "My Personal Portfolio" website. It defines various styles for different sections, buttons, headings, and more.

## Google Fonts and Root Variables

- The code imports the Google Fonts font-family "Poppins" for consistent typography.
- It defines root variables for consistent styling, including colors, shadows, and border.

## Reset Styles

- Reset styles are applied to remove default margins, padding, and other styles for all elements.
- The base font is set to "Poppins," and text decorations are removed.

## Base Font Size

- The base font size for better responsiveness is set to 62.5%.
- The "html" element is configured for smooth scrolling and to hide horizontal overflow.

## Body Styles

- The "body" element is styled with a background color and left padding to create a fixed sidebar.

## Active State Styles

- Styles for the "body" when it has the "active" class are defined.
- This allows for alternate styles when the page is in an active state.

## Section Styles

- Styles for sections of the website, including minimum height and padding, are defined.

## Button Styles

- Styles for buttons are specified, including margin, padding, background, color, and box shadow.
- Hover styles are defined to change the box shadow and color on hover.

## Heading Styles

- Styles for headings, including text alignment, color, font size, and text transformation, are defined.
- The "span" element within headings has a different color.

## Header Styles

- Styles for the website header, such as position, width, background, and border, are defined.

## User Information Styles

- Styles for user information in the header, including the profile picture, name, and job title, are defined.

## Navigation Link Styles

- Styles for navigation links in the header, including margin, padding, border radius, font size, and box shadow, are defined.
- Hover styles are specified for links.

## Menu Button and Theme Toggler Styles

- Styles for the menu button and theme toggler are defined, including position, size, font size, cursor, and box shadow.
- Hover styles are specified for these elements.

## Home Section Styles

- Styles for the home section, including alignment, text color, font size, and padding, are defined.
- Styles for social media share links are also specified.

## About Section Styles

- Styles for the about section are defined.
- The section includes a row with boxes for information and a content column.

## Row and Box Container Styles in About Section

- Styles for the row and box container within the about section are defined, including flex properties and gap.

## Box Styles in About Section

- Styles for individual boxes within the container, including padding, border radius, and box shadow, are specified.
- Headings and paragraphs within the boxes have their own styles.

## Content Column Styles in About Section

- Styles for the content column within the about section, including flex properties, headings, and paragraphs, are defined.

## Services Section Styles

- Styles for the services section are defined.
- The section includes a box container with individual service boxes.

## Box Container Styles in Services Section

- Styles for the box container within the services section, including display, gap, and grid template columns, are defined.

## Box Styles in Services Section

- Styles for individual service boxes, including padding, border radius, and box shadow, are specified.
- Icons within the boxes have their own styles.

## Icon Styles in Services Section

- Styles for icons within service boxes are defined, including font size, color, and padding.
- Hover styles are specified for icons.

## Portfolio Section Styles

- Styles for the portfolio section are defined.
- The section includes a box container with individual portfolio item boxes.

## Box Container Styles in Portfolio Section

- Styles for the box container within the portfolio section, including display, gap, and grid template columns, are defined.

## Box Styles in Portfolio Section

- Styles for individual portfolio item boxes, including height, border radius, overflow, and box shadow, are specified.
- Images within the boxes have their own styles.

## Image Styles in Portfolio Section

- Styles for images within portfolio item boxes, including height, width, and object-fit, are defined.
- A content overlay with transition effects is specified.

## Contact Form Styles

- Styles for the contact form, including margin, border-radius, box shadow, and padding, are defined.
- Input fields and textarea have their own styles.

## Media Queries

- Media queries for different screen sizes are defined to adjust font sizes and layout for better responsiveness.

# JavaScript Code Documentation

## Table of Contents

- [JS Introduction](#js-introduction)
- [Menu Button Functionality](#menu-button-functionality)
- [Navigation Link Functionality](#navigation-link-functionality)
- [Theme Toggler Functionality](#theme-toggler-functionality)
- [Challenges Faced](#challenges-faced)

## JS Introduction

This JavaScript code adds interactivity and functionality to the "My Personal Portfolio" website. It handles the menu button, navigation links, and theme toggler.

## Menu Button Functionality

- The code selects the menu button element by its ID and the header element with the class 'header'.
- It also selects all navigation links within elements having the classes 'navbar' and 'a' tag.
- An event listener is added to the menu button, toggling the 'fa-times' class for menu icon animation and the 'active' class on the header element to show/hide the mobile menu.
- The mobile menu is opened and closed when the menu button is clicked.

## Navigation Link Functionality

- The code adds click event listeners to all navigation links.
- When a navigation link is clicked, it removes the 'fa-times' class to reset the menu button icon and removes the 'active' class to hide the mobile menu.
- This ensures that the mobile menu closes when a navigation link is selected.

## Theme Toggler Functionality

- The theme toggler element is initialized.
- The code checks if the user has a stored theme preference in localStorage.
- The initial theme is set based on the user's preference (dark or light).
- A click event listener is added to the theme toggler.
- When clicked, it toggles the moon icon class, toggles the 'active' class on the document body to switch between dark and light themes.
- The current theme preference is stored in localStorage, allowing the user's theme choice to persist across visits.

## Challenges Faced

During the development of this project, several challenges were encountered and addressed:

1. **Responsive Design**: Ensuring the website looks and functions well on various devices and screen sizes required careful consideration and testing.
2. **LocalStorage Handling**: Implementing theme persistence using localStorage involved handling data storage and retrieval challenges.
3. **Animation and User Experience**: Creating smooth animations for menu button and theme toggling while maintaining good user experience posed design and coding challenges.
4. **Menu Button Closing**: Initially, the menu button did not close when clicked in mobile view. This issue was resolved by adding event listeners to navigation links to close the menu when a link is clicked.

These challenges were overcome through careful planning, research, and iterative development, resulting in a functional and visually appealing portfolio website.

# Conclusion
This documentation provides an overview of the functionality, structure, and challenges faced during the development of the HTML, CSS and JavaScript code for my personal portfolio website.