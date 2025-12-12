// Contenu du fichier script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Sélectionne le bouton Hamburger
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Sélectionne l'élément de navigation (qui a l'ID 'nav-menu')
    const navMenu = document.getElementById('nav-menu'); 
    
    // 1. Gère l'ouverture/fermeture du menu au clic du hamburger
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Cette classe 'active' doit exister dans votre CSS mobile
            navMenu.classList.toggle('active');
        });

        // 2. Ferme le menu quand on clique sur un lien d'ancre
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }
});