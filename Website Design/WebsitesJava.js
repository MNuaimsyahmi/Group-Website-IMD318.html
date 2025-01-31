document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const banner = document.querySelector('.Box'); // Select the top banner
    const Logo = document.querySelector('.Logo');
    const navbar = document.querySelector('ul'); // Select the nav bar
    const threshold = document.documentElement.scrollHeight * 0.157; 

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Only hide the banner after scrolling past the 10% threshold
        if (currentScroll > threshold) {
            if (currentScroll > lastScrollTop) {
                // User is scrolling down
                banner.style.transform = 'translateY(-100%)'; // Hide the banner
                Logo.style.transform = 'translateY(-100%)';
                navbar.style.transform = 'translateY(-100%)'; // Hide the nav bar
            } else {
                // User is scrolling up
                banner.style.transform = 'translateY(0)'; // Show the banner
                Logo.style.transform = 'translateY(0)';
                navbar.style.transform = 'translateY(0)'; // Show the nav bar
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let coll = document.getElementsByClassName("Expanding");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active2");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand
            }
        });
    }
});

