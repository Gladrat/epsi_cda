const button = document.querySelector("button")

// Ajout d'un listener d'événément sur le bouton (au click)
button.addEventListener("click", e => {
    if (document.body.style.backgroundColor === "purple") {
        document.body.style.backgroundColor = "blue"
    } else {
        document.body.style.backgroundColor = "purple"
    }
    if (e.altKey) {
        console.error("La touche alt est appuyée");
    }
})

// Exemple d'événement clavier

const input = document.querySelector("#saisie")

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        // Attribut du paramètre event qui indique si la touche alt est appuyée lors de l'événement
        if (event.altKey) {
            // Retourne à la ligne
            console.log("retour à la ligne")
        } else {
            // Envoie le message
            console.warn(`Envoi du message: ${input.value}`)
            input.value = ""
        }
    }
})

const a = document.querySelector("a")

a.addEventListener("click", event => {
    console.log("Click sur le bouton")
    event.preventDefault()
})

const container = document.querySelector("#container")

const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")
const button3 = document.querySelector("#btn3")

document.body.addEventListener("click", event => {
    if (event.target == button1) {
        container.innerText = "Clic sur le bouton 1"
    }
    if (event.target == button2) {
        container.innerText = "Clic sur le bouton 2"
    }
    if (event.target == button3) {
        container.innerText = "Clic sur le bouton 3"
    }
})