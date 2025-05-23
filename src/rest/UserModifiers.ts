import type { APICountingUserModifiers } from '../payloads/UserModifiers.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPICountingUserModifiers<T> extends BaseAuthRouteOptions<APICountingUserModifiers<T> | null> {
  Params: {
    userId: string;
  };
}
