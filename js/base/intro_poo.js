"use strict";

// Litteral d'objet
const userMe = {
    name: "Geoffroy",
    email: "geoffroy@gl-conseil.dev",
    // info: function () { // fonction anonyme
    info() {
        // This est présent car on est dans un objet
        return `Hello my name is ${this.name} and my email: ${this.email}`;
    },
};

const BDD = {
    port: 3306,
    password: "root",
    user: "admin",
};

console.log(userMe.name);
console.log(userMe.info());

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    info() {
        return `Hello my name is ${this.name} and my email: ${this.email}`;
    }
}

const george = new User("George", "george@epsi.fr");
const steven = new User("Steven", "steven@epsi.fr");

console.log(george);
console.log(george.info());

steven.name = "Lisa";

console.log(steven);

class Admin extends User {
    constructor(name, email, adress) {
        super(name, email);
        this.adress = adress;
    }
}

document.addEventListener("click", function () {
    console.log("Click");
});

document.addEventListener("click", () => console.log("Click again"));

function hello(name) {
    
}

class Person {
    constructor(firsName) {
        this.firstName = firsName;
    }

    // fonction KO car this fait référence au navigateur dans les fonctions anonymes "classiques"
    printNameKO() {
        setTimeout(function() {
            console.log(`Mon prénom est: ${this}`);
            console.log(this);
        }, 1000);
    }

    printName() {
        setTimeout(() => {
            console.log(`Mon prénom est: ${this.firstName}`);
        }, 1000);
    }
}

const bob = new Person("Bob");
bob.printNameKO();
bob.printName();

let tasks = ["Coder en C++", "Coder en LUA"]

try {
    const div = document.createElement()
} catch (error) {
    console.warn(error.message);
    console.warn(error.name);
}

console.log(document.defaultView);


