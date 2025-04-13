let nbAleatoire = Math.floor(Math.random() * 10)
console.log(nbAleatoire)
let cpt = 0
function devine() {
    cpt++
    var nbUser = document.getElementById("dv1").value;
    if (cpt < 3) {
        if (nbAleatoire == nbUser) {
            document.getElementById("resultat").innerHTML = "Success";
            document.getElementById("btn").disabled = true
        } else if (nbAleatoire > nbUser) {
            document.getElementById("resultat").innerHTML = "Le nombre aleatoire est plus grand";
        } else {
            document.getElementById("resultat").innerHTML = "Le nombre aleatoire est plus petit";
        }
    } else {
        document.getElementById("resultat").innerHTML = "game over"
        document.getElementById("btn").disabled = true
    }
}

