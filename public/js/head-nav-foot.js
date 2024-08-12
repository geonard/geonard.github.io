
window.onload = function() {
// Sélectionner l'élément header
const header = document.querySelector('header');

// Obtenir la hauteur de l'élément header
const headerHeight = header.offsetHeight;


// Définir la variable CSS avec la hauteur du header
document.documentElement.style.setProperty('--h-header', `${headerHeight}px`);

//alert(`Hauteur du header: ${headerHeight}px`);
};

document.addEventListener("DOMContentLoaded", function() {
    // Function to load an HTML component
    function loadComponent(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error('Error loading component:', error));
    }

    // Load the header, navbar, and footer
    loadComponent('dynamic-header', 'header.html');
    loadComponent('dynamic-navbar', 'navbar.html');
    loadComponent('dynamic-footer', 'footer.html');
});
