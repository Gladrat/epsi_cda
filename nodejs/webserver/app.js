import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const hotsname = "127.0.0.1"
const port = "80"

const server = createServer(async (req, res) => {
    console.log(`Request from ... on url: ${req.url}`)
    res.statusCode = 200

    // save url res logs

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html")
        const html = await readFile('index.html', {encoding: 'utf-8'})
        res.end(html)
    } else if (req.url === "/api/users") {
        res.setHeader("Content-Type", "application/json")
        const text = await readFile('datas.json', {encoding: "utf-8"})
        res.end(text)
    } else {
        res.statusCode = 404
        res.end("404 Not Found...")
    }
})

console.log(`Server running on http://${hotsname}:${port}`);
server.listen(port, hotsname)