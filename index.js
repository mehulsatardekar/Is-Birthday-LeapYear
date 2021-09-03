const chalk = require('chalk');
const readlinesync = require('readline-sync');

console.log(chalk.bgMagenta("------------------------------------- \n"))
const userName = readlinesync.question( chalk.bgGreen('Enter you name to begin \n'));

const birthYear = Number(readlinesync.question(chalk.bgGreen(`hey ${userName} enter your birthyear \n`)));
console.log(chalk.bgMagenta("--------------------------------------"))


checkResult();

 function checkResult(){

   let result = isLeapYear(birthYear);

   if(result){
     console.log(chalk.blue('\n Your birthday  is a leap year \n'))
   }else{
     console.log(chalk.blue('\n Your birthday is not a leap year.. \n'))
   }
 }

function isLeapYear(birthyear){
   

   if(birthyear %400 ===0) return true;

   if(birthyear %100 ===0 ) return false;

   if(birthyear %4 ===0)return true;

}

