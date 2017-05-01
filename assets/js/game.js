//global variables

//set up variables to be used in the game

//grab html
var compScore = $(".compScore");
var winDisplay = $(".wins");
var loseDisplay = $(".loss");
var totalDisplay = $(".totalScore");
var win = 0;
var loss = 0;
var totalScore = 0;
var numbers = [0];
var triVal;
var rubyVal;
var diaVal;
var squareVal;
var compNum;

// ***************************** FUNCTIONS ****************************
function selectRandomNum (){
  //set random number between 19 - 120 for computer
  compNum = Math.floor((Math.random() * 101) + 19);
  //check function
  console.log(compNum);
}


//set random number btw 1 -12 for each crystal button set once then reset during restart
function selectRandomVal(){
  triVal = Math.floor((Math.random() * 12) + 1);
  rubyVal = Math.floor((Math.random() * 12) + 1);
  diaVal = Math.floor((Math.random() * 12) + 1);
  squareVal = Math.floor((Math.random() * 12) + 1);
  //check function
  console.log(triVal);
  console.log(rubyVal);
  console.log(diaVal);
  console.log(squareVal);
}


//find sum off array of numbers
function getSum(total, num){
  return total + num;
}

//check win or lose
function checkWin(){
  if (compNum === numbers.reduce(getSum)) {
    alert("YOU WIN!")
    win++;
    //send win number to html
    winDisplay.html(win);
    newGame();
  }
  if (numbers.reduce(getSum)> compNum) {
    alert("YOU LOSE!")
    loss++;
    //send loss number to html
    loseDisplay.html(loss);
    newGame();
  }
}
function newGame(){
  selectRandomNum();
  selectRandomVal();
  compScore.html(compNum);
  totalScore = 0;
  totalDisplay.html(totalScore);
  numbers = [0];
}
// ***************************** INVOKE FUNCTIONS  ****************************
function gameStart(){
selectRandomNum();
selectRandomVal();
//send random comp number to html
compScore.html(compNum);
//display total score in total field
totalDisplay.html(totalScore);
}
gameStart();

// ***************************** games start function  ****************************
$(document).on("click", "button", function () {
//every time a button is pressed add value of that number to total SCORE
if ($(this).hasClass("triangle")) {
  //if button pressed has class of triangle add triangle value to total score
  numbers.push(triVal);
  console.log(this);
}
if ($(this).hasClass("ruby")) {
  //if button pressed has class of triangle add triangle value to total score
  numbers.push(rubyVal);
  console.log(this);
}
if ($(this).hasClass("diamond")) {
  //if button pressed has class of triangle add triangle value to total score
  numbers.push(diaVal);
  console.log(this);
}
if ($(this).hasClass("square")) {
  //if button pressed has class of triangle add triangle value to total score
  numbers.push(squareVal);
  console.log(this);
}
getSum();
totalDisplay.html(numbers.reduce(getSum));
checkWin();
 });
