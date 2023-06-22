new Promise((resolve, reject) => {
    const tab = ["Max", "Tom", "Elise"];

    console.log(`Données originales: ${tab}`);

    // setTimeout(() => {
    //     resolve(JSON.stringify(tab));
    // }, 5000)
    resolve(JSON.stringify(tab));


    // reject("Hello world of rejected !");
})
    .then((value) => {
        console.log("Promesse résolue");
        console.log(`Detail de la valeur récupérée: ${value}`);
        const liste_prenoms = JSON.parse(value);
        console.log(liste_prenoms);
        document.body.textContent = value
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log("Promesse rejetée");
        console.log(`Detail de l'erreur: ${error}`);
    });

console.log("Hello world of real asynchronous !");