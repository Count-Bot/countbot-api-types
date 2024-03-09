import { APIUser } from '../payloads/user.js';
import { APIUserModifiers } from '../payloads/userModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserOptions extends BaseAuthRouteOptions<APIUser> {
	Params: { userId: string; };
};

export interface RESTPostAPIUserOptions extends BaseAuthRouteOptions<APIUser> {
	Body: { userId: string; };
};

export interface RESTGetAPIUserModifiersOptions extends BaseAuthRouteOptions<APIUserModifiers> {
	Params: { channelId: string; };
};