// une requete http comprend : une methode (get ou post...)
// une url
// et eventuellement des données
// RFC du protocole http : 
// définition de l'url a appeler 
//lancement de l'appel
/*// .then( response => console.log(response) ); (pareil que celui d'en bas)
.then(function (response) {
    // debug de la reponse et affichagedans la console
    console.log(response);
    //renvoi de la transformation de la réponse en JSON
    return response.json();
})
*//*
.then(
    // syntaxe avec une fonction fléchée
    data => {
        //  affichage du résultat de la transfo en JSON
        console.table(data);
        // affichage du premier résultat
        console.log(data.results[0]);
    })
        // on affiche les données dans le doc avec une boucle
        var table = document.getElementById("table");
        var tbody = tableau.querySelector("tbody");    
 */



const url = "https://randomuser.me/api?results=50&nat=FR";

function fetchRandomUsers() {
    //  pour effectuer une requête HTTP GET à l'URL spécifiée
    fetch(url)
        //  réponse http converti en json
        .then(response => response.json())
        // traitement de ces données
        .then(data => {
            const users = data.results;

            // On sélectionne l'endroit ou on va mettre les données
            const tableBody = document.getElementById('userTable');

            // On parcourt le tableau , création de nouvelle ligne pour chaque user
            users.forEach(user => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = user.name.title + "    " + user.name.first + "   " + user.name.last;
                row.insertCell(1).textContent = user.email;
                row.insertCell(2).textContent = user.gender;
                row.insertCell(3).textContent = user.location.city;
                row.insertCell(4).textContent = user.location.country;
                
                const thumbnailCell = row.insertCell(5);
               
                const img = document.createElement('img');
            
                img.src = user.picture.thumbnail;

            
                thumbnailCell.appendChild(img);
            });
        })
        .catch(error => console.error('Une erreur s\'est produite :', error));
}

// Appelez la fonction pour afficher les utilisateurs lors du chargement de la page
fetchRandomUsers();