const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.characterData = '';
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data = chunk.toString();
    if (!data) {
      this.emit('error', new Error('Invalid Input'));
    } else {
      this.characterData += data;
      callback();
    }
  }

  _read(size) {
    // TODO: Implement your _read method here
    this.push(this.characterData);
    this.push(null);
  }

  formatCharacter() {
    const [characterClass, gender, funFact] = this.characterData.split(';');
    return `Character: ${characterClass}, Character Gender: ${gender}, Fun Fact: ${funFact}`;
  }
}

module.exports = CharacterCreator;