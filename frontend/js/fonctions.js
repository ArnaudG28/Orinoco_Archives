//Fonctions Globales

function pageConfirmation() {
  window.location.href = './confirmation.html';
}

function pagePanier() {
 //window.location.replace('./panier.html');
 //document.location.href='./panier.html',true;
 if (window.location.href == './ident.html') {
    window.location.href ='./panier.html'
    } else { 
      window.location.href ='./panier.html'
    }

}

function pageAccueil() {
  window.location.href = './index.html';
}