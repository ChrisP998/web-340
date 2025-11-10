function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  if (typeof planet1 !== 'number' || typeof planet2 !== 'number') {
    throw new Error('Distance must be a number.');
  }
  return Math.abs(planet1 - planet2);
}

module.exports = calculateDistance;