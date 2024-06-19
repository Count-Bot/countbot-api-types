import { StatusCodePhrases } from './codes.js';
import { RequestGenericInterface } from 'fastify';

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