//global variables

//set up variables to be used in the game

//grab html
var compScore = $(".compScore");
var winDisplay = $(".wins");
var loseDisplay = $(".loss");
var totalDisplay = $(".totalScore");
var win = 0;
var loss = 0;
var triVal;
var rubyVal;
var diaVal;
var squareVal;
var compNum;

//set random number between 19 - 120 for computer
function selectRandomNum (){
  compNum = Math.floor((Math.random() * 101) + 19);
}
selectRandomNum();
compScore.html(compNum);
winDisplay.html(win);
loseDisplay.html(loss);

console.log(compNum);

//set random number btw 1 -12 for each crystal button set once then reset during restart
function selectRandomVal(){
  triVal = Math.floor((Math.random() * 12) + 1);
  rubyVal = Math.floor((Math.random() * 12) + 1);
  diaVal = Math.floor((Math.random() * 12) + 1);
  squareVal = Math.floor((Math.random() * 12) + 1);
}
selectRandomVal();
console.log(triVal);
console.log(rubyVal);
console.log(diaVal);
console.log(squareVal);


//games start function
$(document).on('keyup', function (event) {
//send random comp number to html

//every time a button is pressed add value of that number to total SCORE

//display total score in total field

//if total score equals computer gen score then win

//if total score is greater than comp gen then lose
 });
