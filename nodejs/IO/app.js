import { readFile, writeFile } from "node:fs/promises"; // ES6 - asynchrone promises
// import { readFile, readFileSync } from "node:fs"; // ES6 - asynchrone callback
// const { readFile, readFileSync } = require('fs'); // CommonJS - performante

console.log("Hello world of NodeJS !");

// Synchrone
// const content = readFileSync('./datas.json', { encoding: 'utf-8' })
// console.log(content)

// Asynchrone avec callback (donc provoque callback hell)
// const async_content = readFile('./datas.json', { encoding: 'utf8' }, (err, data) => {
//     console.log(data);
// })

// Asynchrone avec promesse - then
// const async_content = readFile('./datas.json', { encoding: 'utf8' })
//                         .then((content) => console.log(content))
//                         .catch(err => console.log(err))

// Asynchrone async/await

async function main() {
    const async_content2 = await readFile("./datas.json", { encoding: "utf8" });
    console.log(async_content2);

    const tab = ["Tom", "Bernard", "Elise", "Franck"];
    tab.forEach((el) => {
        el += "\n";
        writeFile("demo.txt", el, { flag: "a+" });
    });
}

main();
console.log("Hello world of asynchronous !");

// De manière asynchrone
// tab = ["Tom", "Bernard", "Elise", "Franck"]
// Ecrire le contenu de ce tableau dans un fichier `demo.txt`
