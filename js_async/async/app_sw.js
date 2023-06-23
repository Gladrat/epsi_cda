async function fecthDatasToJSON(url) {

    // const response = await fetch(url)
    // const json = await response.json()
    // return json

    // Equivalent (refactorisé)

    return await fetch(url).then(r => r.json())
}

async function getSWAPIDatas() {

    // const filmResponse = await fetch("https://swapi.dev/api/films/2/")
    // const film = await filmResponse.json()

    const film = await fecthDatasToJSON("https://swapi.dev/api/films/2/")

    for (let carURL of film.characters) {
        // const charReponse = await fetch(carURL)
        // const car = await charReponse.json()

        const car = await fecthDatasToJSON(carURL)

        // const homeResponse = await fetch(car.homeworld)
        // const home = await homeResponse.json()

        const home = await fecthDatasToJSON(car.homeworld)

        console.log(`${car.name} -> ${home.name}`);
    }
}

getSWAPIDatas();
