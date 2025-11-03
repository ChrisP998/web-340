/**
 * Author: Christopher Phan
 * Date: 11/2/25
 * File Name:
 * Description:
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require('./recipes');
// TODO: Implement your CLI program here


console.log(createRecipe(['flour', 'sugar', 'eggs']));

console.log(setTimer(15));

console.log(quit());