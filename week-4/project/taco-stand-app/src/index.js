/**
 * Author: Christopher Phan
 * Date: 11/16/25
 * File Name:
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  if (command === "serve") {
    tacoStand.serveCustomer(args.join(" "));
  } else if (command === "prepare") {
    tacoStand.prepareTaco(args.join(" "));
  } else if (command === "rush") {
    tacoStand.handleRush(args.join(" "));
  } else {
    console.log("Unknown Command");
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);