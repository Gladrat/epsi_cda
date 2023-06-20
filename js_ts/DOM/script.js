// document.getElementById("id")
// document.getElementsByTagName("elementHTML")
// document.getElementsByClassName("classe")

// // 2009 - API Selector

// document.querySelector("selecteur CSS")
// document.querySelectorAll("selecteur CSS")

const article = document.getElementById("mon-article")

const articleTagName = document.getElementsByTagName("article")

const title = document.getElementsByClassName("title_1")

const p = article.querySelector("p")

const a = document.querySelectorAll("a")

console.log(article)
console.log(articleTagName)
console.log(title);
console.log(p);
console.log(a);

console.log(document.body);

document.body.style.backgroundColor = "purple"
document.body.style.padding = "50px"
document.body.style.color = "red"

articleTagName[0].style.backgroundColor = "green"

title[0].classList.add("article-moche")

title[0].id = "mon-titre"
title[0].textContent = "Mon titre modifié"
// p.innerHTML = "Ceci est un <span>paragraphe</span> très intéressant"
a[0].href = "http://www.epsi.fr"