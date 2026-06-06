document.addEventListener("DOMContentLoaded", function() {
    const parametres = new URLSearchParams(window.location.search);
    let prixBrut = parametres.get('prix');
    
    if (prixBrut) {
        
        let prixNettoye = parseInt(prixBrut.replace(/[^0-9]/g, '')) || 0;
        
        const inputPrix = document.getElementById('prix-produit-input');
        if (inputPrix) {
            inputPrix.value = prixNettoye;
        }
    }
    const inputQuantite = document.getElementById('quantité-produit');
    if (inputQuantite) {
        inputQuantite.addEventListener('input', calcularTotal);
    }

    calcularTotal();
});

function calcularTotal() {
    const prixDeBase = parseInt(document.getElementById('prix-produit-input').value) || 0;
    
    const prixLivraison = parseInt(document.getElementById('prix-livraison-input').value) || 0;
    
    const inputQuantite = document.getElementById('quantité-produit');
    let quantite = 1;
    
    if (inputQuantite) {
        quantite = parseInt(inputQuantite.value) || 1;
    }
    const totalProduits = prixDeBase * quantite;
    const totalGlobal = totalProduits + prixLivraison;
    const txtProduit = document.getElementById('afficher-prix-produit');
    const txtLivraison = document.getElementById('afficher-prix-livraison');
    const txtTotal = document.getElementById('prix-total');

    if (txtProduit) txtProduit.textContent = totalProduits;
    if (txtLivraison) txtLivraison.textContent = prixLivraison;
    if (txtTotal) txtTotal.textContent = totalGlobal;
}
function validerCommande(){
    const utilisateurConnecte = sessionStorage.getItem('estConnecte'); 

    if (!utilisateurConnecte) {
        alert("⚠️ Vous devez être connecté pour valider votre commande !");
        window.location.href = "connexion.html"; 
        return;
    }
     const formulaire = document.querySelector('form');

    if (formulaire) {
        if (!formulaire.checkValidity()) {
            return; 
        }
        if (event) {
            event.preventDefault();
        }
    }
    alert("Votre commande a été enregistrée avec succès ! Merci de votre confiance. 💎✨");
    localStorage.removeItem('monPanier');
    window.location.href = "../index.html"; 
}
