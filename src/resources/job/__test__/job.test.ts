import request from 'supertest';
import jobs from '@/resources/job/jobs.json';

describe('GET /api/jobs/:id', () => {
  it('returns status code 200 when job id is valid', async () => {
    // Get sample job if from jobs.json
    const job = jobs[0];
    await request(global.app).get(`/api/jobs/${job.id}`).expect(200);
  });

  it('returns status code 400 when job id is invalid', async () => {
    await request(global.app).get(`/api/jobs/12345`).expect(400);
  });
});

describe('GET /api/jobs', () => {
  it('returns status code 200', async () => {
    await request(global.app).get('/api/jobs').expect(200);
  });
});
