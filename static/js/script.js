// // JavaScript for Interactive Features

// document.addEventListener("DOMContentLoaded", () => {
//     // Smooth Scrolling for Nav Links
//     const navLinks = document.querySelectorAll('.nav-links a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();
//             const targetId = link.getAttribute('href').slice(1);
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 targetSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });

//     // Gallery Item Click Event (Placeholder for Lightbox Feature)
//     const galleryItems = document.querySelectorAll('.gallery-item img');
//     galleryItems.forEach(item => {
//         item.addEventListener('click', () => {
//             alert('Gallery item clicked! (Add lightbox functionality here)');
//         });
//     });

//     // Shop Buy Now Button Click Event
//     const buyButtons = document.querySelectorAll('.shop-item .btn');
//     buyButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             alert('Purchase functionality not yet implemented.');
//         });
//     });

//     // Contact Form Submission
//     const contactForm = document.querySelector('.contact form');
//     contactForm.addEventListener('submit', event => {
//         event.preventDefault();
//         alert('Form submitted! (Implement backend functionality to process form data)');
//         contactForm.reset();
//     });
// });


// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Interactive Navbar with Hidden Features
    // const navbar = document.querySelector('.navbar');
    // const hiddenFeatures = document.createElement('div');
    
    // hiddenFeatures.style.display = 'none';
    // navbar.appendChild(hiddenFeatures);

    const logo = document.querySelector('.navbar .logo');
    logo.addEventListener('click', () => {
        hiddenFeatures.style.display = hiddenFeatures.style.display === 'none' ? 'block' : 'none';
    });

    // Gallery Item Click Event (Placeholder for Lightbox Feature)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('Gallery item clicked! (Add lightbox functionality here)');
        });
    });

    // Shop Buy Now Button Click Event
    const buyButtons = document.querySelectorAll('.shop-item .btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Purchase functionality not yet implemented.');
        });
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Form submitted! (Implement backend functionality to process form data)');
        contactForm.reset();
    });
});
