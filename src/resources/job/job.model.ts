import Job, {
  JobQuery,
  JobSearchResult,
} from '@/resources/job/job.interface';
import jobs from '@/resources/job/jobs.json';

// This imitates a mongoose document

class JobModel {
  private data: Job[] = jobs;

  public async findOne(id: string): Promise<Job | Error> {
    return new Promise((resolve, reject) => {
      const job: Job | undefined = this.data.find(
        (task: Job) => task.id === id
      );

      if (!job) {
        return reject({ message: `Job with id: ${id} not found.` });
      }

      resolve(job);
    });
  }

  public async find(
    query: JobQuery
  ): Promise<JobSearchResult | Error> {
    return new Promise((resolve, reject) => {
      let result = [...this.data];

      if (query.q) {
        result = this.data.filter((job) =>
          job.jobTitle.toLowerCase().includes(query.q!.toLowerCase())
        );
      }

      const startIndex = (query.page - 1) * query.limit;
      let endIndex = query.page * query.limit;
      let totalPage = Math.ceil(result.length / query.limit);

      if (startIndex > result.length - 1) {
        return reject('Page is out of bound');
      }

      if (endIndex > result.length - 1) {
        endIndex = result.length - 1;
      }

      resolve({
        data: result.slice(startIndex, endIndex),
        page: query.page,
        limit: query.limit,
        total: result.length,
        totalPage: totalPage,
      });
    });
  }
}

export default JobModel;
