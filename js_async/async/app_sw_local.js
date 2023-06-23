fetch("./ressources/datas.json")
    .then(r => r.json())
    .then(json => {
        json.forEach(element => {
            console.log(element);
        });
    })
    .catch(err => console.log(err))

fetch("./ressources/chat.jpg")
    .then(r => r.blob())
    .then(blob => {
        console.log(blob);
        const imgURL = URL.createObjectURL(blob)
        const img = document.createElement("img")
        img.src = imgURL
        document.body.appendChild(img)
    })