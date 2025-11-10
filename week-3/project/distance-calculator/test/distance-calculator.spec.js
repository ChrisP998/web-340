const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

const distances = {
  'Earth': 1,
  'Mars': 1.52,
  'Jupiter': 5.2,
  'Mercury': 0.39
};
function testEarthToMars() {
  // TODO: Implement this function
  try {
    const distanceEarth = distances['Earth'];
    const distanceMars = distances['Mars'];
    const expectedValue = 0.52;
    const actualValue = calculateDistance(distanceEarth, distanceMars);
    assert.strictEqual(actualValue, expectedValue, `Expected ${expectedValue}, but got ${actualValue}.`);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}.`);
    return false;
  }
}

function testMarsToJupiter() {
  try {
    const distanceMars = distances['Mars'];
    const distanceJupiter = distances['Jupiter'];
    const expectedValue = 3.68;
    const actualValue = calculateDistance(distanceMars, distanceJupiter);
    assert.strictEqual(actualValue, expectedValue, `Expected ${expectedValue}, but got ${actualValue}.`);
    console.log('Passed testMarsToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testMarsToJupiter: ${error.message}.`);
    return false;
  }
}

function testMercuryToJupiter() {
  try {
    const distanceMercury = distances['Mercury'];
    const distanceJupiter = distances['Jupiter'];
    const expectedValue = 4.8100000000000005;
    const actualValue = calculateDistance(distanceMercury, distanceJupiter);
    assert.strictEqual(actualValue, expectedValue, `Expected ${expectedValue}, but got ${actualValue}.`);
    console.log('Passed testMercuryToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToJupiter: ${error.message}.`);
    return false;
  }
}
// Call your test functions here
testEarthToMars();
testMarsToJupiter();
testMercuryToJupiter();