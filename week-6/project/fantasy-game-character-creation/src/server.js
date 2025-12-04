const express = require('express');
const app = express();
const PORT = 3000;

// In a real app, you would use a database
let character = null;

// Middleware for parsing query parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for creating a character
app.post('/create-character', (req, res) => {
  const { class: characterClass, gender, funFact } = req.query;

  // Validate character class
  const validClasses = ['Warrior', 'Mage', 'Rogue'];
  if (!validClasses.includes(characterClass)) {
    return res.status(400).json({
      error: 'Invalid character class. Must be one of: Warrior, Mage, Rogue'
    });
  }

  // Validate gender
  const validGenders = ['Male', 'Female', 'Other'];
  if (!validGenders.includes(gender)) {
    return res.status(400).json({
      error: 'Invalid gender. Must be one of: Male, Female, Other'
    });
  }

  // Create character
  character = { class: characterClass, gender, funFact };

  return res.status(200).json({
    message: 'Character created successfully',
    character
  });
});

// Route for confirming character creation
app.post('/confirm-character', (req, res) => {
  if (!character) {
    return res.status(404).json({ error: 'No character exists to confirm' });
  }

  return res.status(200).json({
    message: 'Character confirmed successfully',
    character
  });
});

// Route for viewing the character
app.get('/view-character', (req, res) => {
  if (!character) {
    return res.status(404).json({ error: 'No character exists' });
  }

  return res.status(200).json({ character });
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for testing
module.exports = app;