import { exec, spawn } from "node:child_process";
import { watch } from 'node:fs/promises'

let [node, current, file, ...args] = process.argv;
console.log({ node, current, file, args });

function watchServer() {
    // "C:\\Program Files\\nodejs\\node.exe"
    // const dir = spawn("node", [file]);
    const dir = spawn(node, [file]);

    // dir.stdout.on('data', data => {
    //     console.log(data.toString('utf8'));
    // })

    // dir.stderr.on('data', data => {
    //     console.log(data.toString('utf8'));
    // })

    dir.stdout.pipe(process.stdout)
    dir.stderr.pipe(process.stderr)

    dir.on('close', code => {
        if (code > 0) {
            throw new Error(`Process exited: ${code}`)
        }
    })

    return dir
}

let server = watchServer()
let counter;

const watcher = watch('./', {recursive: true})
for await (const event of watcher) {
    if (event.filename.endsWith('.js') && event.filename !== 'reloader.js') {
        clearTimeout(counter)
        counter = setTimeout(() => {
            // console.log(event);
            server.kill('SIGKILL')
            console.log('Restart process...');
            server = watchServer()
        }, 2000)
    }
}