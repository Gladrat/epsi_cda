// function add(n1: number, n2: number) {
//     return n1 + n2
// }
// const number1 = "5"
// const number2 = 2.8
// const result = add(number1, number2)
// console.log(result);
var nb = 999;
var estPair = true;
var phrase = "Le résultat est...";
var input;
var monChoix = "Chocolatine";
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2; // number
    }
    else {
        return input1.toString() + input2.toString(); // string
    }
}
var userInput;
var userName;
userInput = "Max";
userInput = 5;
// userName = userInput;
// if (typeof userInput === "string") {
//     userName = userInput
// }
