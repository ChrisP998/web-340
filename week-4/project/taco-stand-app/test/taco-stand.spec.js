/**
 * Author: Christopher Phan
 * Date: 11/16/25
 * File Name:
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");


// TODO: Write tests for the TacoStandEmitter methods
function testServeCustomer() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on('serve', (customer) => {
      assert.strictEqual(customer, "John");
      console.log("Passed testServeCustomer");
    });
    tacoStand.serveCustomer("John");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
      console.log("Passed testPrepareTaco");
    });
    tacoStand.prepareTaco("beef");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
      console.log("Passed testHandleRush");
    });
    tacoStand.handleRush("lunch");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush()