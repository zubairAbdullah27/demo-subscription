// src/types/express.d.ts
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}
