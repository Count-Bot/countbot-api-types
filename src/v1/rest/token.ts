import { JSONSchemaType } from 'ajv';
import { APIToken } from '../payloads/token.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPITokenOptions extends BaseAuthRouteOptions<APIToken> {
	Params: { tokenId: string; };
};

export interface RESTPostAPITokenOptions extends BaseAuthRouteOptions<APIToken> {
	Body: { userId: string; };
};
export const GetAPITokenParamsSchema: JSONSchemaType<RESTGetAPITokenOptions['Params']> = {
	type: 'object',
	properties: {
		tokenId: { type: 'string' },
	},
	required: ['tokenId'],
};

export const PostAPITokenBodySchema: JSONSchemaType<RESTPostAPITokenOptions['Body']> = {
	type: 'object',
	properties: {
		userId: { type: 'string' },
	},
	required: ['userId'],
};