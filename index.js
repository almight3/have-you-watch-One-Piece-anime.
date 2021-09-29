let readlineSync = require('readline-sync');

const chalk = require('chalk');

let userName = readlineSync.question("Enter your Name \n");
console.log("Hi " + userName );
console.log(chalk.red("1. This is mcq based quiz on One Piece anime."))
console.log(chalk.red("2. choose a b c  optinion to answer."))
let userInput = readlineSync.question(chalk.red("3. type S to start quiz or type Q to exit \n"));
if(userInput.toUpperCase() === 'S'){
let score = 0;
let highScore  = 10;
function play(question, answer){
   let userAnswer = readlineSync.question(question);
   if(userAnswer === answer){
     console.log(chalk.green("right answer"));
     score++;
    }
   else{
     console.log(chalk.redBright("wrong answer"));

   }
  
 



console.log(chalk.green("High score :" + chalk.green (highScore)));
console.log(chalk.yellowBright("current score: " + score));

console.log(chalk.yellowBright("_______________________"));


} 


let arr = [{question :`1. Zoro use how may swords ?\n
a. 1
b. 2
c. 3\n `, 
answer:"c"},
{question : `2. luffy is captain of which pirate ship ?\n
a. WhiteBeard
b. BigMOM Pirates
c. StrawHats\n`,

answer :"c"},
{question : `3.luffy has power of which Devil fruits ?\n
a. GOMU-GOMU no Mi
b. Magu-Magu no Mi  
c. Yami-Yami no Mi \n`,
answer :"a"},


{question : `5.luffy is son of ?\n
a. Monkey D. garp
b. MOnkey D. Dragon  
c. Gol D. Roger \n`,
answer :"b"},

{question : `6.Name of the last Island on Grand line?\n
a. Wano Island
b. Laugh Tale Island 
c. Albama \n`,
answer :"b"},

{question : `7.Proteguse D. Ace is brother of  ?\n
a. Monkey D. Luffy
b. Marco The Phoenix  
c. Diamond Jozu \n`,
answer :"a"},

{question : `8. Which phoneglyph lead to the Laugh Tale ?\n
a. Black Phoneglyph
b. Red  Phoneglyph 
c. Golden Phoneglyph\n`,
answer :"b"},

{question : `9.StrawHats Pirates has How many members ?\n
a. 7
b. 5  
c. 9 \n`,
answer :"c"},

{question : `10.Marchel D. teach eat which devil fruit ?\n
a. GOMU-GOMU no Mi
b. Magu-Magu no Mi  
c. Yami Yami no Mi \n`,
answer :"c"}
]

for(i=0; i<arr.length;i++){
     
      let currentQuestion = arr[i];
      play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.magentaBright("Score Board:  "))
console.log(chalk.magentaBright("adam : 10 "))
console.log(chalk.magentaBright("kris : 8"));
}
else{
  console.log(chalk.magentaBright("thankyou for joining "))
}
























