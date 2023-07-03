const express = require("express");
const { writeFile } = require("node:fs/promises");
const { getAllTodos, findTodoById, countTodos, createTodo } = require("./todo");
const { InitializeDb } = require('./bdd')

const app = express();
const port = 8080;

InitializeDb()

app.use(express.json());

app.use(async (req, res, next) => {
    const url = `${Date(Date.now())} - (${req.method}) URL: ${req.url} ${JSON.stringify(req.body)} \n`;
    console.log(url);
    await writeFile("url_log.txt", url, { flag: "a+" });
    next();
});

app.get("/", async (req, res) => {
    const data = await getAllTodos();
    res.json(data);
});
// Strictement equivalent à

// app.get("/", async (req, res) => res.json(await getAllTodos()));

app.post("/create", async (req, res) => {
    const body = req.body;
    const todo = await createTodo(body);
    res.json(todo);
});

app.get("/details/:id", async (req, res) => {
    const id = +req.params.id;
    const data = await findTodoById(id);
    if (!data) {
        res.status(404);
        res.json({ message: "404 ressource not found", status: 404 });
    }
    res.json(data);
});

app.get("/count", async (req, res) => {
    const count = await countTodos();
    res.json({ count });
});

app.get("/date/:yyyy/:mm/:dd", (req, res) => {
    const { yyyy, mm, dd } = req.params;
    res.send(`List of tasks at date: ${yyyy}/${dd}/${mm}`);
});

app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}`);
});
