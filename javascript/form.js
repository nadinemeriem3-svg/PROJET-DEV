const listeUtilisateurs = [
    { nom: "Administrateur", email: "admin@diamond.com", motDePasse: "admin123" },
    { nom: "nadine", email: "nadine@gmail.com", motDePasse: "nadine123" },
    { nom: "Professeur", email: "prof@universite.com", motDePasse: "reussi2026" },
    { nom: "MonTest", email: "test@gmail.com", motDePasse: "azerty" }
];
const formInscription = document.getElementById('formulaire-inscription');
if (formInscription) {
 formInscription.addEventListener('submit', function(evenement) {
  evenement.preventDefault();
  const saisie = document.getElementById('email-').value;
  const messageErreur = document.getElementById('erreur-inscription');
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(saisie)) {
    messageErreur.textContent = "❌ Veuillez entrer un email valide.";
    messageErreur.style.color = "red";
    return; 
  }
  messageErreur.textContent = "";
  sessionStorage.setItem("estConnecte", "oui");
  let adresseActuelle = window.location.href;
 if (adresseActuelle.includes("inscription.html")){
   window.location.href = adresseActuelle.replace("inscription.html", "produit.html");
 } 
else {
   window.location.href = "content/produit.html";
 }
    });
}
 const formConnexion = document.getElementById('formulaire-connexion');
if (formConnexion) {
 formConnexion.addEventListener('submit', function(evenement) {
  evenement.preventDefault();
  const nomTape = document.getElementById('nom').value;
  const emailTape = document.getElementById('email-').value;
  const mdpTape = document.getElementById('mdp-connexion').value;
  const messageErreur = document.getElementById('erreur-connexion');
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(emailTape)) {
    messageErreur.textContent = "❌ Veuillez entrer un email valide.";
    messageErreur.style.color = "red";
    return; 
  }
  const utilisateurTrouve = listeUtilisateurs.find(u => u.email === emailTape && u.motDePasse === mdpTape && u.nom==nomTape);

  if (!utilisateurTrouve) {
    messageErreur.textContent = "❌ Identifiants incorrects.";
    messageErreur.style.color = "red";
    return;
  }
  messageErreur.textContent = "";
  sessionStorage.setItem("estConnecte", "oui");
  let adresseActuelle = window.location.href;
  if (adresseActuelle.includes("connexion.html")){
   window.location.href = adresseActuelle.replace("connexion.html", "produit.html");
  } 
  else {
   window.location.href = "content/produit.html";
  }
 });
}
 const formContact = document.getElementById('formulaire-contact');
if (formContact) {
 formContact.addEventListener('submit', function(evenement) {
 evenement.preventDefault();
 const saisie = document.getElementById('email-').value;
  const messageErreur = document.getElementById('erreur-contact');
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regexEmail.test(saisie)) {
    messageErreur.textContent = "❌ Veuillez entrer un email valide.";
    messageErreur.style.color = "red";
    return; 
  }
  messageErreur.textContent = "";
 alert("Message envoyé avec succès ! ✨");
 window.location.href = "../index.html";
 });
 }
 const formMot = document.getElementById('mot-de-passe');
if (formMot) {
 formMot.addEventListener('submit', function(evenement) {
 evenement.preventDefault();
 const saisie = document.getElementById('email-').value;
  const messageErreur = document.getElementById('erreur-mot');
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (saisie.includes("@")) {
  if (!regexEmail.test(saisie)) {
    messageErreur.textContent = "❌ Veuillez entrer un email valide.";
    messageErreur.style.color = "red";
    return; 
  }
  }
 const compteExiste = listeUtilisateurs.some(u => u.nom === saisie || u.email === saisie);
  if (!compteExiste) {
    messageErreur.textContent = "❌ Ce nom ou cet email ne correspond à aucun compte.";
    messageErreur.style.color = "red";
    return; 
  }

  alert( "✅ Un code de récupération a été envoyé a votre email !");
 window.location.href = "connexion.html";
 });
    }