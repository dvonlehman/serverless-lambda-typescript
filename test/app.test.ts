import request from 'supertest';
import app from '../src/lib/app';

test('app', () => {
  return request(app)
    .get('/')
    .expect(200)
    .expect(res => {
      expect(res.body).toEqual({ status: 'OK' });
    });
});
