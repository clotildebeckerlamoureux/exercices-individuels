let match = 50

function matchToRemove() {
    while (match > 0) {
        let player1 = parseInt(prompt("Choisis un nombre d'allumettes à retirer \nNombre d'allumettes restantes : " + match))
        if (player1 < 1 || player1 > 6) {
            alert("Choisis un nombre entre 1 et 6")
            matchToRemove()
        }
        else if (match < player1) {
            //let erreur = 
            alert("Choisis un nombre plus petit")
            matchToRemove()
        } 
        else
        //console.log(player1)
        match = match - player1
        console.log(match) 
    }
    if (match === 0) {
        //let victoire = 
        alert("Tu as gagné !")
        match = 50
        matchToRemove()
        
    }
}

matchToRemove()