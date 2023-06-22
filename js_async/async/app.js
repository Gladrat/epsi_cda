// async function async_hello() {
//     return "Hello async !";
// }
// async_hello()
//     .then((value) => console.log(value))

// async function async_hello_ko() {
//     const err = new Error("Async KO")
//     throw err
// }

function delay(millisecond) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Waited for ${millisecond}`)
        }, millisecond)
    })
}

// delay(3000)
//     .then((value) => {
//         console.log(value)
//         delay(2000)
//             .then((value) => {
//                 console.log(value)
//                 delay(5000)
//                     .then((value) => {
//                         console.log(valye);
//                     })
//             })
//     })

console.log("1. Début du script")

async function run() {
    console.log("3. Début de l'asynchrone");
    let result;
 
    result = await delay(3000)
    console.log(result);

    result = await delay(2000)
    console.log(result);

    result = await delay(5000)
    console.log(result);
    console.log("5. Fin de l'asynchrone");
}

console.log("2. Lancement de l'asynchrone");
run();

console.log("4. Fin du script")