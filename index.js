let characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "?",
  "{",
  "}",
  "-",
  "+",
  "=",
  "[",
  "]",
  "|",
  "~",
  "`",
  "@",
];
let randomNumbers = [];
let passElOne = document.getElementById("pass-el-one");
let passElTwo = document.getElementById("pass-el-two");
let passElThree = document.getElementById("pass-el-three");
let passElFour = document.getElementById("pass-el-four");
let lengthValueEl = document.getElementById("length-value");
let randomNum = 0;
let generateButton = document.getElementById("generate");

function randomNumber() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return randomChar;
}

function setInitialInputValue() {
  passElOne.textContent = "";
  passElTwo.textContent = "";
  passElThree.textContent = "";
  passElFour.textContent = "";
}

generateButton.addEventListener("mousedown", function () {
  setInitialInputValue();
  let randomIndexOne;
  let randomIndexTwo;
  let randomIndexThree;
  let randomIndexFour;

  for (let i = 0; i < lengthValueEl.value; i++) {
    randomIndexOne = randomNumber();
    randomIndexTwo = randomNumber();
    randomIndexThree = randomNumber();
    randomIndexFour = randomNumber();
    passElOne.textContent += characters[randomIndexOne];
    passElTwo.textContent += characters[randomIndexTwo];
    passElThree.textContent += characters[randomIndexThree];
    passElFour.textContent += characters[randomIndexFour];
  }
});
