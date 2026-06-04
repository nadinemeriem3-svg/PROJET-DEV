let catalogueDansJS = [];
window.addEventListener('DOMContentLoaded', () => {
    const produitsHTML = document.querySelectorAll('.produit'); 
    
    produitsHTML.forEach((element) => {
        let valeurData = element.dataset.categorie; 
        catalogueDansJS.push({
            elementHTML: element,
            categorie: valeurData ? valeurData.toLowerCase().trim() : ""
        });
    });
});
function filtrerCategorie(categorieChoisie) {
    const filtre = categorieChoisie.toLowerCase().trim();
    catalogueDansJS.forEach(bijou => {
        if (filtre === 'tous' || bijou.categorie === filtre) {
            bijou.elementHTML.style.display = "block"; 
        } else {
            bijou.elementHTML.style.display = "none";  
        }
    });
}
