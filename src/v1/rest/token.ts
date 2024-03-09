import { APIToken } from '../payloads/token.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPITokenOptions extends BaseAuthRouteOptions<APIToken> {
	Params: { tokenId: string; };
};

export interface RESTPostAPITokenOptions extends BaseAuthRouteOptions<APIToken> {
	Body: { userId: string; };
};