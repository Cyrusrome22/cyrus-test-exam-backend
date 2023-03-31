import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';

const localCache = new NodeCache();

export default localCache;
