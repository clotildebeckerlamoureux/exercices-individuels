let match = 50
let playerx = prompt("Combien de joueurs ?")

function matchToRemove() {
    while (match > 0) {
        for (i=1; i <= playerx; i++) {
            let player = parseInt(prompt("Joueur " + i + "\nChoisis un nombre d'allumettes à retirer \nNombre d'allumettes restantes : " + match))
            if (player < 1 || player > 6) {
                alert("Choisis un nombre entre 1 et 6")
                matchToRemove()
            }
            else if (match < player) {
                alert("Choisis un nombre plus petit")
                matchToRemove()
            } else
                match = match - player
                console.log(match)
        }
            if (match === 0) {
                alert("Bravo joueur " + (i-1) +", tu as gagné !")
                // match = 50
                // matchToRemove()
        
        }
    }
}

matchToRemove()