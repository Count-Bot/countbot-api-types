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