// script.js - Exercice 7

console.log("=== Exercise 7: Welcome User ===");

// Self-invoking function pour accueillir l'utilisateur
(function(userName) {
    console.log("Fonction d'accueil exécutée pour:", userName);
    
    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addUserToNavbar(userName);
        });
    } else {
        // DOM déjà chargé
        addUserToNavbar(userName);
    }
    
    function addUserToNavbar(name) {
        const navbar = document.getElementById('navbar');
        
        if (!navbar) {
            console.error("Navbar non trouvée!");
            return;
        }
        
        const navContent = navbar.querySelector('.nav-content');
        
        if (!navContent) {
            console.error("Contenu de navbar non trouvé!");
            return;
        }
        
        // Créer l'élément utilisateur
        const userDiv = document.createElement('div');
        userDiv.className = 'user-welcome';
        
        // Utiliser une image de profil (placeholder ou avatar par défaut)
        const profilePicUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1abc9c&color=fff&size=40`;
        
        userDiv.innerHTML = `
            <img src="${profilePicUrl}" alt="${name}'s profile" class="profile-pic">
            <span>Bienvenue, ${name}!</span>
        `;
        
        // Ajouter à la navbar
        navContent.appendChild(userDiv);
        
        console.log("Utilisateur ajouté à la navbar avec succès!");
    }
})("John"); // Remplacez "John" par le nom d'utilisateur réel