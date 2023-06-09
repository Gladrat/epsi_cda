// const firstName = "Geoffroy";
// console.log(firstName);

// Ceci est un commentaire

/* Ceci est un
commentaire multi ligne */

let age = 25;

// if... else if... else

if (typeof age == Number && age >= 18) {
    console.log("Je suis majeur");
} else if (age == 0) {
    console.log("Non");
} else {
    console.log("Je suis mineur");
}

const estMajeur = age >= 18 ? "Je suis majeur" : "Je suis mineur";

const role = "user";

// switch case

switch (role) {
    case "user":
        console.log("Je suis user");
        break;

    case "admin":
        console.log("Je suis admin");
        break;

    default:
        break;
}

// Boucle While

let i = 0;
while (i < 100) {
    console.log(i + 1);
    i++;
    // i--;
}

// Répéter jusqu'à

i = 0;

do {
    console.log(i + 1);
    i++;
} while (i < 100);

// For

for (let i = 0; i < 100; i++) {
    console.log(i + 1);
    continue;
    if (i == 50) {
        break;
        //
    }
}

// fonctions

const nb = 12;
let nb2 = 22;

const roles = ["ADMIN", "USER", "VISITOR"];
const lien = document.getElementsByTagName("a");

roles.push("ANONYMOUS");
console.log(roles);

function agent(firstName = "John", lastName = "Doe") {
    const nb = 3;
    console.log(`My name is ${lastName}, ${firstName} ${lastName}`);
    return `My name is ${lastName}, ${firstName} ${lastName}`;
}

const phrase = agent("James", "Bond");
console.log(phrase);

// Callback

setTimeout(function hello() {
    console.log("Hello world !");
}, 3000);

const tab = ["Geoffroy", "Tom", "Elise", "Adrien", "Lisa"];

for (let i = 0; i < tab.length; i++) {
    const element = tab[i];
    console.log(element);
}

tab.forEach((e) => console.log(e));

for (let prenom of tab) {
    console.log(prenom);
}

const tab = [12, 25, 67, 99]
const tab_au_carre = tab.map((value) => {
    return value**2
})

// LOL
const tab_filtered = tab.filter(_ => [] == !{})

console.log(tab_au_carre);
console.log(tab_filtered);

const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", (event) =>
        console.log(`Clic sur le bouton ${event.target.textContent}`)
    );
}

let [prenom1, ...prenomsRestants] = tab;
console.log(prenom1);
console.log(prenomsRestants);