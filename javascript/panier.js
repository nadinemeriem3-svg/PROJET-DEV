function panier(nom, prix, image) {
    let listeArticles = JSON.parse(localStorage.getItem('monPanier')) || [];
    let nouveauBijou = {
        nom: nom,
        prix: prix,
        image: image
    };

    listeArticles.push(nouveauBijou);
    localStorage.setItem('monPanier', JSON.stringify(listeArticles));
    alert(nom + " a bien été ajouté à votre panier ! ✨");
}
document.addEventListener("DOMContentLoaded", function() {
    const idConteneurPanier = 'liste-articles-panier'; 
    const idBaliseTotal = 'total-articles';
    
    const conteneurPanier = document.getElementById(idConteneurPanier);
    const baliseTotal = document.getElementById(idBaliseTotal);
    if (conteneurPanier && baliseTotal) {
        afficherLePanier(conteneurPanier, baliseTotal);
    }
});
function afficherLePanier(conteneur, baliseTotal) {
    let listeArticles = JSON.parse(localStorage.getItem('monPanier')) || [];
    conteneur.innerHTML = "";
    if (listeArticles.length === 0) {
        conteneur.innerHTML = "<p class='panier-vide'>Votre panier est encore vide... 💎</p>";
        baliseTotal.innerText = "0 DA";
        return;
    }
    
    let prixTotalCalculé = 0;
    listeArticles.forEach((bijou, index) => {
   prixTotalCalculé += bijou.prix;
 conteneur.innerHTML += `
 <div class="article">
 <img src="${bijou.image}" class="image" alt="${bijou.nom}">
 <div class="article-info">
 <h4>${bijou.nom}</h4>
  <span class="prix">${bijou.prix} DA</span>
 </div>
 <button class="bouton-supprimer" onclick="supprimerDuPanier(${index})">❌</button>
 </div>
  `;
    });
    baliseTotal.innerText = prixTotalCalculé + " DA";
}

function supprimerDuPanier(indexCible) {
let listeArticles = JSON.parse(localStorage.getItem('monPanier')) || [];
listeArticles.splice(indexCible, 1);
 localStorage.setItem('monPanier', JSON.stringify(listeArticles));
 const conteneurPanier = document.getElementById('liste-articles-panier');
 const baliseTotal = document.getElementById('total-articles');
 if (conteneurPanier && baliseTotal) {
 afficherLePanier(conteneurPanier, baliseTotal);
    }
}function redirigerVersAchat() {
 const totalPanier = document.getElementById('total-articles').textContent;
 const montantNumerique = parseInt(totalPanier.replace(/[^0-9]/g, '')) || 0;
if (montantNumerique === 0) {
 alert("Votre panier est vide ! Ajoutez des bijoux avant de passer commande. 🛒✨");
window.location.href = "produit.html";
 return; 
    }
    window.location.href = "achats.html?prix=" + totalPanier;
}
const boutonValiderPanier = document.getElementById('bouton-valider-panier'); 
if (boutonValiderPanier) {
  boutonValiderPanier.addEventListener('click', function(evenement) {
    evenement.preventDefault();

    const statutConnexion = sessionStorage.getItem("estConnecte");

    if (statutConnexion === "oui") {
        alert("🎉 Commande validée ! Merci pour votre achat chez Diamond Jewellery.");
    } else {
        alert("🔒 Veuillez vous connecter pour finaliser votre commande.");
        window.location.href = "connexion.html"; 
    }
  });
}