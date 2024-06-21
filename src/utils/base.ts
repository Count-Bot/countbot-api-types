import { RequestGenericInterface } from 'fastify';

import { StatusCodePhrases } from './codes.js';

export interface BaseAuthRouteOptions<Response = null> extends RequestGenericInterface {
  Header: {
    Authorization: string;
  };
  Reply: {
    error: boolean;
    message: StatusCodePhrases;
    data: Response;
  };
}