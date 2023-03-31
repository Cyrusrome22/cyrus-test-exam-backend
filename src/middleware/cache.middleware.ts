import { Request, Response, NextFunction } from 'express';
import localCache from '@/utils/cache';

const cacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query) {
    const data = localCache.get(JSON.stringify(req.query));
    if (data) {
      return res.status(200).json(data);
    }
  }

  next();
};

export default cacheMiddleware;
