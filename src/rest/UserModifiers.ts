import type { ObjectId } from '../utils/base.js';

import type { APICountingUserModifiers } from '../payloads/UserModifiers.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserModifiers extends BaseAuthRouteOptions<APICountingUserModifiers<ObjectId> | null> {
  Params: {
    userId: string;
  };
}