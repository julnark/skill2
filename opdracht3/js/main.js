/*JS Input text change*/
const updock = document.getElementById("js--updock");
const Merienda = document.getElementById("js--Merienda");
const Pattrick = document.getElementById("js--Patrick");
const input = document.getElementById("js--input");

input.oninput = function (event) {
    updock.innerText = event.target.value;
    Merienda.innerText = event.target.value
    Pattrick.innerText = event.target.value
}


// javascript for favorites //

const hearts = document.getElementsByClassName("heart");
for (let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function () {

        for (let i = 0; i < hearts.length; i++) {
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo";
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}