import type { APIToken } from '../payloads/Token.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTPostAPIToken extends BaseAuthRouteOptions<APIToken | null> {
  Body: { userId: string; };
}