/* eslint-disable */

//import "../assets/img/rigo-baby.jpg";
//import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".number").innerHTML = generateRandomNumber();
  //document.querySelectorAll("#symbol").classList.add(generateRandomSuit());
  //document.querySelector(".bottomlogo").innerHTML = generateRamdonSuit();
};

let generateRandomNumber = () => {
  var numbers = [
    "A",
    "K",
    "Q",
    "J",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  var suit = ["spade", "diamond", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
