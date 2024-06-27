import type { APICountingUser } from '../payloads/User.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUsers<T> extends BaseAuthRouteOptions<APICountingUser<T> | null> {
  Querystring: {
    userId?: string;
  };
}

export interface RESTGetAPIUser<T> extends BaseAuthRouteOptions<APICountingUser<T> | null> {
  Params: {
    userId: string;
  };
}

export interface RESTPostAPIUser<T> extends BaseAuthRouteOptions<APICountingUser<T> | null> {
  Body: {
    userId: string;
  };
}
