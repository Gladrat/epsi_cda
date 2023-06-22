function delay(millisecond) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Waited for ${millisecond}`)
        }, millisecond)
    })
}

console.log("1. Début du script")

async function run(millisecond) {
    if (millisecond === 8000) {
        throw new Error("Pas content !")
    }
    const result = await delay(millisecond)
    console.log(result);
    return millisecond
}

console.log("2. Lancement de l'asynchrone");

// Promise.all([run(5000), run(2000), run(3000)])
//     .then(value => console.log(value))
//     .catch(error => console.log(`ERREUR: ${error}`))

Promise.race([run(5000), run(2000), run(3000)])
    .then(value => console.log(value))
    .catch(error => console.log(error))

Promise.any()

console.log("4. Fin du script")