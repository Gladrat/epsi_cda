"use strict";

const formatNumber = () => {
    const input = document.getElementById("ipt-estimation");
    const formated = document.getElementById("formated");

    let value = +input.value.replace(/\s/g, "");
    // let value = +input.value
    // let value = parseInt(input.value)

    // formated.textContent = value.toLocaleString("fr-FR")
    input.value = value.toLocaleString("fr-FR");
}

document.addEventListener("input", formatNumber);