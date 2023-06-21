class ArrayStorage {
    constructor(key_name) {
        this.key_name = key_name
        this.list = this.get()
        this.show_storage()
    }

    get() {
        if (! localStorage.getItem(this.key_name)) {
            localStorage.setItem(this.key_name, "[]")
        }
        return JSON.parse(localStorage.getItem(this.key_name))
    }

    set(task) {
        if (this.list.indexOf(task) === -1 && task) {
            this.list.push(task)
            localStorage.setItem(this.key_name, JSON.stringify(this.list))
        }
    }

    clear() {
        localStorage.removeItem(this.key_name)
    }

    remove(task) {
        const index = this.list.indexOf(task)
        this.list.splice(index, 1)
        localStorage.setItem(this.key_name, JSON.stringify(this.list))
    }

    show_storage() {
        console.log("Contenu du storage: ");
        console.log(localStorage.getItem(this.key_name));
    }
}