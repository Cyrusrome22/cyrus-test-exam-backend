import 'dotenv/config';
import 'module-alias/register';
import JobController from '@/resources/job/job.controller';
import { Express } from 'express';
import App from '../app';

declare global {
  var app: Express;
}

let app = new App([new JobController()], Number(process.env.PORT));

beforeAll(() => {
  app.listen();
});

afterAll(() => {
  app.server.close();
});

global.app = app.express;
