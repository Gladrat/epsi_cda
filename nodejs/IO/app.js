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
    // console.log(async_content2);
    // const data = JSON.parse(async_content2)
    // console.log(data[46000].address.street);

    // const tab = ["Tom", "Bernard", "Elise", "Franck"];
    // tab.forEach((el) => {
    //     el += "\n";
    //     writeFile("demo.txt", el, { flag: "a+" });
    // });

    // https://jsonplaceholder.typicode.com/users
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(r => r.text())
    //     .then(body => {
    //         writeFile('users.json', body)
    //     })

    // Equivalent

    const text = await fetch("https://jsonplaceholder.typicode.com/users").then(r => r.text())
    await writeFile('users.json', text)
}

main();
console.log("Hello world of asynchronous !");
