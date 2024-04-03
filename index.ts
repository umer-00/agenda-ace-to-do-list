#! /usr/bin/env node


import inquirer from "inquirer";
import chalk    from "chalk";

let todolist =[];
let condition = true;


console.log(chalk.blueBright.bold("\n\twelcome umer\n\t"));
console.log(chalk.yellow.italic("\there's your to do list\t\n"));



while(condition){
let addtask=await inquirer.prompt(
 [
 {
    name: "task",
    type: "input",
    message: "what you wanht to add in your to do list"}
 ]
);
todolist.push(addtask.task);
console.log (`${addtask.task} ::task addeded inyour to do list`);


let addmoretask =await inquirer.prompt([

 {
    name: "addmore",
    type: "confirm",
    message: "do you want to add more task",
    default: "false",
 }]);
 
 condition = addmoretask.addmore;

}
console.log(chalk.magenta.bold("\nyour updated todo list:\n"));
console.log(chalk.green(`${todolist}`));