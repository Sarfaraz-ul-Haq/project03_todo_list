import inquirer from "inquirer";
import chalk from "chalk";

let todo_list: string[] = [];

const selected = await inquirer.prompt({
  name: "option",
  type: "list",
  choices: ["Add Items", "Delete Items", "View Items"],
  message: "Select an option:",
});

if (selected.option == "Add Items") {
  const userInput = await inquirer.prompt({
    name: "item",
    type: "input",
    message: "Add your item",
  });

  todo_list.push(userInput.item);
  console.log(todo_list);
}
