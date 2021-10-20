  
 
 //.catch(function(err) {
	// Une erreur est survenue
	//const erreurMsge = err;
	//getError(erreurMsge);
  //});

  getArticles()
// fonctions pour recuperer des articles
function getArticles () {
   fetch('http://localhost:3000/api/cameras').then(function (response) {
		  if (response.ok) {
			  return response.json();
		  } else {
			  console.log('Mauvaise réponse du réseau');
		  }
	  })
  .catch(function(error) {
	console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
  });
  
}

alert(fetch('http://localhost:3000/api/cameras'));


// Récupération de l'erreur pour affichage sur la page
function getError(erreurMsge) {
  alert(erreurMsge.message);
  document.getElementById('flex-resultat').innerHTML += `<h1 class="messageErreur">Erreur&nbsp;:&nbsp;${erreurMsge.message}</h1>`
}