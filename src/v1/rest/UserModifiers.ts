import { APIUserModifiers } from '../payloads/userModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserModifiersOptions extends BaseAuthRouteOptions<APIUserModifiers> {
  Params: { userId: string; };
}