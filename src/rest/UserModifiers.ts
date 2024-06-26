import type { Types } from 'mongoose';

import type { APICountingUserModifiers } from '../payloads/UserModifiers.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserModifiers extends BaseAuthRouteOptions<APICountingUserModifiers<Types.ObjectId> | null> {
  Params: {
    userId: string;
  };
}