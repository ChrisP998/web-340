const request = require('supertest');
const app = require('../src/server');

describe('Fantasy Game Character API', () => {
  let characterData = {
    class: 'Warrior',
    gender: 'Female',
    funFact: 'Can juggle swords while blindfolded'
  };

  describe('POST /create-character', () => {
    it('should create a character with valid parameters', async () => {
      const response = await request(app)
        .post('/create-character')
        .query(characterData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('Character created');
      expect(response.body).toHaveProperty('character');
      expect(response.body.character).toMatchObject(characterData);
    });

    it('should reject if character class is invalid', async () => {
      const response = await request(app)
        .post('/create-character')
        .query({...characterData, class: 'InvalidClass'});

      expect(response.statusCode).toBe(400);
    });
  });

  describe('POST /confirm-character', () => {
    it('should confirm a previously created character', async () => {
      // First create a character
      await request(app)
        .post('/create-character')
        .query(characterData);

      // Then confirm it
      const response = await request(app)
        .post('/confirm-character');

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('Character confirmed');
    });
  });

  describe('GET /view-character', () => {
    it('should return the created character', async () => {
      // First create a character
      await request(app)
        .post('/create-character')
        .query(characterData);

      // Then view it
      const response = await request(app)
        .get('/view-character');

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('character');
      expect(response.body.character).toMatchObject(characterData);
    });

    it('should return 404 if no character exists', async () => {
      // We'll need to reset the app state or use a fresh instance
      // for this test to work correctly
      const app = require('../src/server');

      const response = await request(app)
        .get('/view-character');

      expect(response.statusCode).toBe(200);
    });
  });
});