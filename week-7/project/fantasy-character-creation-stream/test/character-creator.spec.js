const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("1. should process data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write('Character: Warrior, Character Gender: Male, Fun Fact: Loves to throw weapons');

    let output = '';
    characterCreator.on('data', chunk => {
      output += chunk.toString();
    });

    characterCreator.on('end', () => {
      expect(output).toBe('Character: Warrior, Character Gender: Male, Fun Fact: Loves to throw weapons');
      done();
    });
  });

  test("2. should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Invalid Input');
      done();
    });

    characterCreator.write('');

  });

  test("3. should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write('Character: Rogue, Character Gender: Female, Fun Fact: Can turn to mist');

    let output = '';
    characterCreator.on('data', chunk => {
      output += chunk.toString();
    });

    characterCreator.on('end', () => {
      expect(output).toBe('Character: Rogue, Character Gender: Female, Fun Fact: Can turn to mist');
      done();
    });
  });
});