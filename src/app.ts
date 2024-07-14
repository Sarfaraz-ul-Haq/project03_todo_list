import inquirer from "inquirer";
import chalk from "chalk";
import PromptOptions from "./interface.js";

let todos: string[] = [];
let addAgain = true;

while (addAgain) {
  const { options, addedItem, again } = await inquirer.prompt([
    {
      name: "selected",
      type: "list",
      choices: ["Add Items", "Delete Items", "View Items"],
      message: "What do you want to do:",
    },
    {
      name: "addedItem",
      type: "input",
      message: "Add your item",
    },
    {
      name: "again",
      type: "confirm",
      message: "Do you want to add more items?",
      default: false,
    },
  ]);

  addAgain = again;
  todos.push(addedItem);
  console.log(todos);
}
