import { Types } from 'mongoose';

import { APICountingUserModifiers } from '../payloads/UserModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserModifiers extends BaseAuthRouteOptions<APICountingUserModifiers<Types.ObjectId>> {
  Params: {
    userId: string;
  };
}