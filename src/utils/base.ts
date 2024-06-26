import type { Types } from 'mongoose';
import type { StatusCodePhrases } from './codes.js';

export interface BaseAuthRouteOptions<Response = null> {
  Header: {
    Authorization: string;
  };
  Reply: {
    error: boolean;
    message: StatusCodePhrases;
    data: Response;
  };
}

export type ObjectId = typeof Types.ObjectId;