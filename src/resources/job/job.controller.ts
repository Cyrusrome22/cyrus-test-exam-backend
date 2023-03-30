import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import JobService from '@/resources/job/job.service';
import BadRequestException from '@/utils/exceptions/bad-request.exception';
import { JobQuery } from './job.interface';

class JobController implements Controller {
  public path = '/jobs';
  public router = Router();
  private jobService = new JobService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/:id`, this.get);
    this.router.get(`${this.path}`, this.getAll);
  }

  private get = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;

      if (!id) {
        return next(new BadRequestException('Id is required'));
      }

      const job = await this.jobService.get(id);
      res.status(200).json(job);
    } catch (err: any) {
      next(new BadRequestException(err.message));
    }
  };

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const query: JobQuery = {
      page: 1,
      limit: 10,
    };
    const { q, page, limit } = req.query;
    if (q) {
      query['q'] = q as string;
    }

    try {
      query['page'] = page ? parseInt(page as string) : query['page'];
      query['limit'] = limit
        ? parseInt(limit as string)
        : query['limit'];

      const jobs = await this.jobService.getAll(query);
      res.status(200).json(jobs);
    } catch (e: any) {
      next(new BadRequestException(e));
    }
  };
}

export default JobController;
