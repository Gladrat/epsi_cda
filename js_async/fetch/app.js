// GET
fetch("https://jsonplaceholder.typicode.com/users?paul_est_un=boss")
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Erreur when caling API")
        }
    })
    .then((json) => console.log(json))
    .catch((error) => console.log(error))

// // Equivalent
// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let response = JSON.parse(xhr.responseText);
//         console.log(response);
//     }
// };

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
// xhr.send();

// POST
data = {
    names: "James",
    age: 50,
    password: "root"
}

fetch("https://jsonplaceholder.typicode.com/users", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))