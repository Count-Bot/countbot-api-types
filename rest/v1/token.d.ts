import { JSONSchemaType } from 'ajv';
import { APIToken } from '../../payloads/v1/token.js';
import { BaseAuthRouteOptions } from '../../utils/base.js';
export interface RESTGetAPITokenOptions extends BaseAuthRouteOptions<APIToken> {
    Params: {
        tokenId: string;
    };
}
export interface RESTPostAPITokenOptions extends BaseAuthRouteOptions<APIToken> {
    Body: {
        userId: string;
    };
}
export declare const GetAPITokenParamsSchema: JSONSchemaType<RESTGetAPITokenOptions['Params']>;
export declare const PostAPITokenBodySchema: JSONSchemaType<RESTPostAPITokenOptions['Body']>;
