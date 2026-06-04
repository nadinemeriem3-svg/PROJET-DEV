function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    if (menu) {
    menu.classList.toggle('actif');
    }
}
function toggleWilayaMenu() {
    const menu = document.getElementById('wilaya-list');
    if (menu) {
  menu.classList.toggle('actif');
    }
}
function selectWilaya(nomWilaya, prixLivraison) {
    const inputWilaya = document.getElementById('selected-wilaya');
    const inputPrix = document.getElementById('prix-livraison-input');
    const listeWilaya = document.getElementById('wilaya-list');
    if (inputWilaya) {
        inputWilaya.value = nomWilaya; 
    }
    if (inputPrix) {
 inputPrix.value = prixLivraison;
    }
    if (listeWilaya) {
   listeWilaya.classList.remove('actif');
    }
}
if (typeof calcularTotal === "function") {
   calcularTotal();
    } 
