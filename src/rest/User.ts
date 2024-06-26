import type { Types } from 'mongoose';

import type { APICountingUser } from '../payloads/User.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUsers extends BaseAuthRouteOptions<APICountingUser<Types.ObjectId> | null> {
  Querystring: {
    userId?: string;
  };
}

export interface RESTGetAPIUser extends BaseAuthRouteOptions<APICountingUser<Types.ObjectId> | null> {
  Params: {
    userId: string;
  };
}

export interface RESTPostAPIUser extends BaseAuthRouteOptions<APICountingUser<Types.ObjectId> | null> {
  Body: {
    userId: string;
  };
}
