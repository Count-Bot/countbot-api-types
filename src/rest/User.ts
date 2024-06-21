import { Types } from 'mongoose';

import { APICountingUser } from '../payloads/user.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUsersOptions extends BaseAuthRouteOptions<APICountingUser<Types.ObjectId> | null> {
  Querystring: {
    userId: string;
  };
}

export interface RESTGetAPIUserOptions extends BaseAuthRouteOptions<APICountingUser<Types.ObjectId> | null> {
  Params: {
    userId: string;
  };
}

export interface RESTPostAPIUserOptions extends BaseAuthRouteOptions<APICountingUser<Types.ObjectId> | null> {
  Body: {
    userId: string;
  };
}

