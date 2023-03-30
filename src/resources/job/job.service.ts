import Job, {
  JobQuery,
  JobSearchResult,
} from '@/resources/job/job.interface';
import JobModel from '@/resources/job/job.model';

class JobService {
  private job = new JobModel();

  public async get(id: string): Promise<Job | Error> {
    const job = await this.job.findOne(id);
    return job;
  }

  public async getAll(
    query: JobQuery
  ): Promise<JobSearchResult | Error> {
    const jobs = await this.job.find(query);
    return jobs;
  }
}

export default JobService;
