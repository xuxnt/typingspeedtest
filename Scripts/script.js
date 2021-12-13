"use strict";

let text = document.querySelector(".text");
let btn = document.querySelector("#start-btn");
let typewords = document.querySelector("#text");
typewords.disabled = true;
let startTime, endTime;
let arr = [
  "This is a first sentence.",
  "This is a second sentence.",
  "This is a third sentence.",
  "This is a fourth sentence.",
  "This is a fifth sentence.",
];

const playGame = () => {
  let ranNum = Math.floor(Math.random() * arr.length);
  text.innerText = arr[ranNum];

  let date = new Date();
  startTime = date.getTime();

  btn.innerText = "Done";
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();

  let totalTime = (endTime - startTime) / 1000;

  let totalStr = typewords.value;
  let wordsCount = wordCounter(totalStr);

  let speed = Math.floor((wordsCount / totalTime) * 60);

  let finalMesz = `Your typing speed is ${speed} wpm and you have typed ${wordsCount} words in ${totalTime} seconds.`;

  finalMesz += compareWords(text.innerText, totalStr);

  text.innerText = finalMesz;

  btn.innerText = "Start";
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach((item, index) => {
    if (item == words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  return ` ${cnt} correct out of ${words1.length} words and the total number of errors are ${errorWords}.`;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typewords.disabled = false;
    playGame();
  } else if ((this.innerText = "Done")) {
    typewords.disabled = true;
    typewords.value = "";
    endGame();
  }
});
