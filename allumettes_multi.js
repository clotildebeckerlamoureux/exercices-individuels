let match = 50
let playerx = parseInt(prompt("Combien de joueurs ?"))

function matchToRemove() {
    while (match > 0) {
        for (i=1; i <= playerx; i++) {
            let player = parseInt(prompt("Joueur " + i + "\nChoisis un nombre d'allumettes à retirer \nNombre d'allumettes restantes : " + match))
            let exitLoop = true
            while (exitLoop) {
                switch (true)  {
                    case isNaN(player):{
                        alert("Choisis un nombre")
                        exitLoop = false
                        i = i - 1
                        break
                    } case player < 1 || player > 6 :{
                        alert("Choisis un nombre entre 1 et 6")
                        exitLoop = false
                        i = i - 1
                        break
                    } case match < player : {
                        alert("Choisis un nombre plus petit")
                        exitLoop = false
                        i = i - 1
                        break
                    } case player >= 1 && player <= 6 && match >= player: {
                        match = match - player
                        console.log(match)
                        exitLoop = false
                        continue
                    } case match === 0 : {
                        alert("Bravo joueur " + (i-1) +", tu as gagné !")
                        break
                        // match = 50
                        // matchToRemove()
                    }    
                }
            }    
        }
    }
}

matchToRemove()