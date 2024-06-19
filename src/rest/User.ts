import { APICountingUser } from '../payloads/User.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUsersOptions extends BaseAuthRouteOptions<APICountingUser | null> {
  Querystring: {
    userId: string;
  };
}

export interface RESTGetAPIUserOptions extends BaseAuthRouteOptions<APICountingUser | null> {
  Params: {
    id: string;
  };
}

export interface RESTPostAPIUserOptions extends BaseAuthRouteOptions<APICountingUser | null> {
  Body: {
    userId: string;
  };
}

