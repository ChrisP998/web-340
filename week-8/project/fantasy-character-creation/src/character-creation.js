"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */



const fs = require('fs').promises;
const path = require('path');
const characterFile = path.join(__dirname, '../characters.json');

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(characterFile, 'utf8');
    const characters = JSON.parse(data);
    characters.push(character);
    await fs.writeFile(characterFile, JSON.stringify(characters), 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.writeFile(characterFile, JSON.stringify([character]), 'utf8');
    } else {
      throw err;
    }
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await fs.readFile(characterFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
}


// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises