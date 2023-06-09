import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import JobController from '@/resources/job/job.controller';

validateEnv();

const app = new App([new JobController()], Number(process.env.PORT));
app.listen();
