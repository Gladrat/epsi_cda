// Une bien belle promesse !
new Promise((resolve, reject) => resolve("lorem ipsum"))
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(_ => console.log("the end"));

new Promise((resolve, reject) => {

    // ---------------
    // Simulation d'un appel API qui prend 5 secondes pour nous renvoyer les données
    // https://api.mon-site.fr/user
    setTimeout(() => {
        const infos = {
            name: "Geoffroy",
            email: "geoffroy@gl-conseil.dev",
            statut: "acheteur",
        };
        resolve(JSON.stringify(infos));
    }, 5000);
    // ---------------
})
    .then((value) => {
        console.log(`Promesse n°1 résolue: ${value}`);
        const infos = JSON.parse(value);
        
        return new Promise((resolve, reject) => {
            // ---------------
            // Simulation d'un appel API qui prend 5 secondes pour nous renvoyer les données
            // https://api.mon-site.fr/orders
            setTimeout(() => {
                resolve("LISTE DES COMMANDES")
                
            }, 5000)
            setTimeout(() => {
                reject("404")

            }, 2000)
            // ---------------
        });
    })
    .then((value) => {
        console.log(`Promesse n°2 résolue: ${value}`);
    })
    .catch((error) => {
        console.log("Promesse rejetée");
        console.log(`Detail de l'erreur: ${error}`);
    })
    .finally(() => {
        console.log("Fin des appels API");
    })