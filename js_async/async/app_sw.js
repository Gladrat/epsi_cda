async function fetchDatas() {

    const filmResponse = await fetch("https://swapi.dev/api/films/2/")
    const film = await filmResponse.json()

    for (let carURL of film.characters) {
        const charReponse = await fetch(carURL)
        // fetch
        const car = await charReponse.json()

        const homeResponse = await fetch(car.homeworld)
        const home = await homeResponse.json()

        console.log(`${car.name} -> ${home.name}`);
    }
}

fetchDatas();
