import { APIToken } from '../payloads/Token.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTPostAPIToken extends BaseAuthRouteOptions<APIToken | null> {
  Body: { userId: string; };
}