document.getElementById('Ecrire').addEventListener('click', stockage);
function stockage(){
    localStorage.setItem(document.getElementById('nom').value, document.getElementById('valeur').value);
}

////PAS FINIIII
document.getElementById('lire').addEventListener('click', afficher);
function afficher(){
    localStorage.setItem(document.getElementById('nom').value, document.getElementById('valeur').value);
    document.getElementsByClassName('previsu').innerHTML='<p>Le nom et la valeur sont: </p>'+ localStorage.getItem('nom', 'valeur');
}
