// m'affichiez dans la console
// la planète d'origine des personnages du films n°2

fetch("https://swapi.dev/api/films/2/")
    .then(response => response.json())
    .then(carUrlList => {
        let caracterPromises = []
        carUrlList.characters.forEach(carUrl => {
            let promise = fetch(carUrl)
                .then(response => response.json())
                .then(car => {
                    return fetch(car.homeworld)
                        .then(response => response.json())
                        .then(planet => {
                            return {name: car.name, homeworld: planet.name}
                        })
                })
            caracterPromises.push(promise)
        });
        console.log(caracterPromises);
        return Promise.all(caracterPromises)
    })
    .then((caracters) => {
        for (let car of caracters) {
            console.log(`${car.name} -> ${car.homeworld}`);
        }
        console.log(JSON.stringify(caracters));
    })