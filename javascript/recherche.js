document.addEventListener("DOMContentLoaded", function() {
const barreRecherche = document.getElementById('barreRecherche');
 const cartesProduits = document.querySelectorAll('.produit'); 
console.log("Système de recherche initialisé. Nombre de cartes trouvées :", cartesProduits.length);
if (barreRecherche && cartesProduits.length > 0) {
barreRecherche.addEventListener('input', function() {
 let texteSaisi = barreRecherche.value.toLowerCase().trim();
cartesProduits.forEach(function(produit) {
let baliseTitre = produit.querySelector('h4');
if (baliseTitre) {
 let titreProduit = baliseTitre.textContent.toLowerCase().trim();
 if (titreProduit.includes(texteSaisi)) {
 produit.style.display = "block";
  } else {
produit.style.display = "none";
  }
  }
  });
});
 } 
});