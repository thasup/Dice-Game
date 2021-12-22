// Define global variables
const   img1 = document.getElementsByClassName("img1"),
        img2 = document.getElementsByClassName("img2"),
        head = document.getElementsByTagName("h1");

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let result;

img1[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
img2[0].setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins!";
} else if (randomNumber1 > randomNumber2) {
    result = "Player 1 Wins!";
} else {
    result = "Draw!";
}

head[0].innerHTML = `<h1>${result}</h1>`;

