// Get all grid-child elements
const gridChildren = document.querySelectorAll('.grid-child');

// Add click event listener to each grid-child
gridChildren.forEach(child => {
    child.addEventListener('click', function() {
        // Open a new window with the desired webpage
        window.open('best-practices.html', '_blank');
    });
});
