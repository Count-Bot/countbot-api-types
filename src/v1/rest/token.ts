import { APIToken } from '../payloads/token.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTPostAPITokenOptions extends BaseAuthRouteOptions<APIToken | null> {
	Body: { userId: string; };
}