import type { APICountingUserModifiers } from '../payloads/UserModifiers.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPICountingUserModifiers extends BaseAuthRouteOptions<APICountingUserModifiers | null> {
  Params: {
    userId: string;
  };
}
