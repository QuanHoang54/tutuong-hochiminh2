/**
 * Chat Routes Tests
 * Unit tests cho chat endpoints
 */

const request = require('supertest');
const express = require('express');
const chatRoutes = require('./chat');

// Mock services
jest.mock('../services/ai');
jest.mock('../services/fallback');

const aiService = require('../services/ai');
const fallbackService = require('../services/fallback');

// Setup test app
const app = express();
app.use(express.json());
app.use('/api', chatRoutes);

describe('POST /api/chat', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return 400 if message is empty', async () => {
    const response = await request(app)
      .post('/api/chat')
      .send({ message: '' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Bad Request');
  });

  test('should return 400 if message is missing', async () => {
    const response = await request(app)
      .post('/api/chat')
      .send({});

    expect(response.status).toBe(400);
  });

  test('should use fallback when no AI API key', async () => {
    delete process.env.AI_API_KEY;
    fallbackService.generateReply.mockReturnValue('Fallback response');

    const response = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toBe('Fallback response');
    expect(response.body.source).toBe('fallback');
    expect(fallbackService.generateReply).toHaveBeenCalledWith('Hello');
  });

  test('should use AI when API key is available', async () => {
    process.env.AI_API_KEY = 'test-key';
    aiService.generateReply.mockResolvedValue('AI response');

    const response = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello', sessionId: 'test-session' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toBe('AI response');
    expect(response.body.source).toBe('ai');
    expect(response.body.sessionId).toBe('test-session');
    expect(aiService.generateReply).toHaveBeenCalledWith('Hello', 'test-session');
  });

  test('should fallback to rule-based if AI fails', async () => {
    process.env.AI_API_KEY = 'test-key';
    aiService.generateReply.mockRejectedValue(new Error('AI Error'));
    fallbackService.generateReply.mockReturnValue('Fallback response');

    const response = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello' });

    expect(response.status).toBe(200);
    expect(response.body.reply).toBe('Fallback response');
    expect(response.body.source).toBe('fallback');
  });

  test('should generate sessionId if not provided', async () => {
    fallbackService.generateReply.mockReturnValue('Response');

    const response = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello' });

    expect(response.status).toBe(200);
    expect(response.body.sessionId).toMatch(/^session-\d+$/);
  });
});

describe('GET /api/chat/topics', () => {
  test('should return list of topics', async () => {
    const mockTopics = [
      { id: 'intro', title: 'Giới thiệu' },
      { id: 'contact', title: 'Liên hệ' }
    ];
    fallbackService.getAvailableTopics.mockReturnValue(mockTopics);

    const response = await request(app)
      .get('/api/chat/topics');

    expect(response.status).toBe(200);
    expect(response.body.topics).toEqual(mockTopics);
    expect(response.body.message).toBeDefined();
  });
});
