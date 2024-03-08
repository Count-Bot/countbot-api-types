import { JSONSchemaType } from 'ajv';

import { APIUser } from '../../payloads/v1/user.js';
import { BaseAuthRouteOptions } from '../../utils/base.js';
import { APIUserModifiers } from '../../payloads/v1/userModifiers.js';

export interface RESTGetAPIUserOptions extends BaseAuthRouteOptions<APIUser> {
	Params: { userId: string; };
};

export interface RESTPostAPIUserOptions extends BaseAuthRouteOptions<APIUser> {
	Body: { userId: string; };
};

export interface RESTGetAPIUserModifiersOptions extends BaseAuthRouteOptions<APIUserModifiers> {
	Params: { channelId: string; };
};

export const GETUserParamsSchema: JSONSchemaType<RESTGetAPIUserOptions['Params']> = {
	type: 'object',
	properties: {
		userId: { type: 'string' },
	},
	required: ['userId'],
};

export const POSTUserRouteBodySchema: JSONSchemaType<RESTPostAPIUserOptions['Body']> = {
	type: 'object',
	properties: {
		userId: { type: 'string' },
	},
	required: ['userId'],
};