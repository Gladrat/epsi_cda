"use strict";

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const add = document.querySelector("#add");
const clear = document.querySelector("#clear");
const url = "";
const load = "";

const storage = new ArrayStorage("ma_liste")

function taskToDom(task) {
    if (typeof task === "string" && task) {
        const li = document.createElement("li")
        const remove = document.createElement("button")

        li.textContent = task
        remove.textContent = "REMOVE"

        remove.addEventListener("click", event => {
            storage.remove(task)
            remove.parentNode.remove()
        })

        li.append(remove)
        list.append(li)
    }
}

function newTask(task) {
    if (task != "") {
        storage.set(input.value)
        taskToDom(input.value)
        input.focus()
        input.value = ""
    }
}

// Chargement de la page
storage.list.forEach(e => taskToDom(e))

// Gestion événements globaux
input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        newTask()
    }
})
add.addEventListener("click", event => newTask())

clear.addEventListener("click", () => {
    storage.clear()
    list.innerHTML = ""
})

