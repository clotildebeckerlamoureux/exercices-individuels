 let nom = prompt("Quel est ton nom ?")
 let bnom = "Bonjour " + nom + " !"
alert(bnom)

document.body.innerHTML += '<h2> Coucou </h2>' + nom // affiche a partir du js un texte html auquel on peut rajouter derrière juste avec un + une variable du js

let annee = prompt("Quelle est ton année de naissance ?")
let today = new Date().getFullYear() // La variable prend la valeur de l'année en cours si juste new date => année affichée en millisecondes et donc doit rajouter une ligne en plus dans le code pour le calcul pour indiquer la date en année
let age = today - annee
console.log(age) // Affichage sur la console pour voir l'étape avant que cela s'affiche sur la page et voir si pb éventuel

document.body.innerHTML += '<h3> Vous avez </h3>' + age 
