import { APICountingUserModifiers } from '../payloads/UserModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserModifiersOptions extends BaseAuthRouteOptions<APICountingUserModifiers> {
  Params: {
    userId: string;
  };
}