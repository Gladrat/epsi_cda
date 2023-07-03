import { readFile, writeFile } from "node:fs/promises";
import { createServer, request } from "node:http";
import { json } from "node:stream/consumers";

const getTodo = async () => {
    const content = await readFile("./datas/todo.json", {
        encoding: "utf-8",
    });
    return content;
};

const createTodo = async ({ name, due_date }) => {
    const id = 666;
    const closed = false;
    const todo = { id: id, name: name, due_date: due_date, closed: closed };
    let todos = JSON.parse(await getTodo());
    todos = [...todos, todo]
    console.log(todos)
    await writeFile('./datas/todo.json', JSON.stringify(todos))
    return todo
};

const server = createServer(async (req, res) => {
    // Recompose un objet de la classe URL à partir de la requête (req) sur le webserver
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url);

    switch (url.pathname) {
        case "/":
            if (req.method === "GET") {
                const data = await getTodo();
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(data);
            } else if (req.method === "POST") {
                const newData = await json(req);
                console.log(newData);
                const todo = await createTodo(newData);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.write(JSON.stringify(todo));
            }
            break;

        default:
            res.writeHead(404);
            res.write("Incorrect URL... 404 Not found");
    }
    res.end();
});

server.listen(8080);
console.log("Server running at http://127.0.0.1:8080");
