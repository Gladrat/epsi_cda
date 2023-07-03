// Asynchrone !
// 1. Lire le contenu du fichier JSON dans une fonction
// 2. Proposer un endpoint GET sur la racine "/" d'un webserver (127.0.0.1:8000)
// Qui charge le contenu du fichier JSON

import { readFile, writeFile } from "node:fs/promises";
import { createServer, request } from "node:http";
import { json } from 'node:stream/consumers'

const getTodo = async () => {
    const content = await readFile("./datas/todo.json", {
        encoding: "utf-8",
    });
    return content;
};

const server = createServer(async (req, res) => {
    // Recompose un objet de la classe URL à partir de la requête (req) sur le webserver
    const url = new URL(req.url, `http://${req.headers.host}`)
    console.log(url);

    switch (url.pathname) {
        case "/":
            if (req.method === "GET") {
                const data = await getTodo()
                res.writeHead(200, {"Content-Type": "application/json"})
                res.write(data)
            }
            else if (req.method === "POST") {
                const newData = await json(req)
                console.log(newData);
                // Ecriture en BDD
                const id = 666;
                const closed = false;
                res.writeHead(201)
                // res.write()
            }
            break;
            
        default:
            res.writeHead(404);
            res.write("Incorrect URL... 404 Not found");
    }
    res.end();
});

server.listen(8080);
console.log('Server running at http://127.0.0.1:8080');