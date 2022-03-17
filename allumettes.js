let match = 50
let player1
let player2
let game = true

function matchToRemove() {
    while (match > 0) {
        player()
        if (player1 < 1 || player1 > 6 || player2 < 1 || player2 > 6) {
            alert("Choisis un nombre entre 1 et 6")
            matchToRemove()
        }
        else if (match < player1 || match < player2) {
            //let erreur = 
            alert("Choisis un nombre plus petit")
            matchToRemove()
        } 
        else
        //console.log(player1)
        if (game == false) {
            match = match - player1
            console.log(match)
        } else {
            match = match - player2
            console.log(match)
        }
    }
    if (match === 0) {
        //let victoire = 
        alert("Tu as gagné !")
        match = 50
        //matchToRemove()
        
    }
}

function player(){
    if (game == true) {
        player1 = parseInt(prompt("Joueur 1 \nChoisis un nombre d'allumettes à retirer \nNombre d'allumettes restantes : " + match))
        game = false
    } 
    else {
        player2 = parseInt(prompt("Joueur 2 \nChoisis un nombre d'allumettes à retirer \nNombre d'allumettes restantes : " + match))
        game = true
    }
}

matchToRemove()