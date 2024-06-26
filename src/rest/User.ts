import type { ObjectId } from '../utils/base.js';

import type { APICountingUser } from '../payloads/User.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUsers extends BaseAuthRouteOptions<APICountingUser<ObjectId> | null> {
  Querystring: {
    userId?: string;
  };
}

export interface RESTGetAPIUser extends BaseAuthRouteOptions<APICountingUser<ObjectId> | null> {
  Params: {
    userId: string;
  };
}

export interface RESTPostAPIUser extends BaseAuthRouteOptions<APICountingUser<ObjectId> | null> {
  Body: {
    userId: string;
  };
}
