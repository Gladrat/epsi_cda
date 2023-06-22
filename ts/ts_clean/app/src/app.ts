const input = document.getElementById("user-id");

if (input) {
    (input as HTMLInputElement).value = "Hello world !";
}

// Equivalent

// const input = document.getElementById("user-id")! as HTMLInputElement

class Departement {
    private employees: string[] = [];

    constructor(
        private id: string,
        private name: string,
        private creationYear: number = 2023
    ) {}

    describe() {
        console.log(
            `Departement: ${this.name} created at ${this.creationYear}`
        );
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
        console.log(`Ajout de: ${employee}`);
    }

    showEmployees() {
        console.log(`${this.employees.length} employees:`);
        console.log(this.employees);
    }
}

class ITDepartment extends Departement {
    private superAdmin: string;

    constructor(
        // private readonly ???
        id: string,
        name: string,
        creationYear: number = 2023,
        private admins: string[]
    ) {
        super(id, name, creationYear);
        admins.forEach((e) => {
            this.addEmployee(e);
        });
        this.superAdmin = admins[0];
    }

    get getSuperAdmin() {
        console.log("Accès à la valeur de superAdmin");
        return this.superAdmin
    }

    set setSuperAdmin(newSuperAdmin: string) {
        if (this.admins.includes(newSuperAdmin)) {
            this.superAdmin = newSuperAdmin
        } else {
            console.log(`${newSuperAdmin} n'a pas les droits d'administration !`);
        }
    }
}

const dept1 = new Departement("MKG-001", "Maketing", 2010);
dept1.describe();
dept1.addEmployee("Hugo");
dept1.addEmployee("Florian");
dept1.addEmployee("Paul2");
// dept1.employees.push("H4ack3d L0L")
// dept1.employees[0] = "Myriam"
dept1.showEmployees();

const itDept1 = new ITDepartment("IT-001", "Departement SI", 2021, [
    "Max",
    "Elise",
    "Tom",
]);
itDept1.showEmployees();
console.log(itDept1.getSuperAdmin);
itDept1.setSuperAdmin = "HACKER"
console.log(itDept1.getSuperAdmin);