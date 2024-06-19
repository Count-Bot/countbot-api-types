import { APICountingUser } from '../payloads/user.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserOptions extends BaseAuthRouteOptions<APICountingUser | null> {
  Params: { userId: string; };
}

export interface RESTPostAPIUserOptions extends BaseAuthRouteOptions<APICountingUser | null> {
  Body: { userId: string; };
}

