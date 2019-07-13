var Word = require("./word.js");

var inquirer = require("inquirer");

var gameWords = ["red", "orange", "yellow", "green", "blue", "violet"];

function randomWord(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}