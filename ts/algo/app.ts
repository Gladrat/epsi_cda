// function add(n1: number, n2: number) {
//     return n1 + n2
// }

// const number1 = "5"
// const number2 = 2.8

// const result = add(number1, number2)
// console.log(result);

let nb: number = 999;
let estPair: boolean = true;
let phrase: string = "Le résultat est...";

let input: number | string;

type Choix = "Chocolatine" | "Pain au chocolat";
const monChoix: Choix = "Chocolatine";

type Combinatoire = string | number;

function combine(input1: Combinatoire, input2: Combinatoire): Combinatoire {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2; // number
    } else {
        return input1.toString() + input2.toString(); // string
    }
}

let userInput: unknown;
let userName: string;

userInput = "Max";
userInput = 5;

// userName = userInput;

// if (typeof userInput === "string") {
//     userName = userInput
// }