#! /usr/bin/node env

import inquirer from "inquirer";

const num=Math.round(Math.random()*100);
// console.log(num);

type ans={
    userguess:number,
    rounds:number
}
const r:ans= await inquirer.prompt([
    {
        type: "number",
        name: "rounds",
        message:"How many rounds(Chances) you want to awail : "
    }])
    const {rounds}=r;

welcomeMsg("WELCOME TO NUMBER GUESSING GAME !",rounds);

function welcomeMsg(Msg:string,round:number){
    const answers=Msg;
    
    console.log(answers);

   getInputFormUser(round);

   
}



async function getInputFormUser(round:number) {
    while(round!=0){
    console.log("REMAINING CHANCES : "+round);
    round--;
const answer:ans= await inquirer.prompt([    
    {
    type: "number",
    name: "userguess",
    message:"Guess a number between 1 to 100 : "
    }

])
console.log(answer.userguess);
if(answer.userguess==num){
    console.log("CONGRATS ! You Guessed the right number \n\n");
    break;
}
else{
    console.log("Oops ! Your Guess is wrong \n\n");
    if(round==0){
        console.log("YOUR CHANCES ARE FINISHED \n YOU FaIlEd");
    }
}

}
    }