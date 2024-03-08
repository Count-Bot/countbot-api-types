export declare const APIRoutes: readonly ["/v1", "/v1/channels", "/v1/channels/:id", "/v1/guilds", "/v1/guilds/:id", "/v1/users", "/v1/users/:id"];
export type APIRoute = typeof APIRoutes[number];
export declare const APIMethods: readonly ["GET", "POST", "PUT", "DELETE", "PATCH"];
export type APIMethod = typeof APIMethods[number];
export interface RoutePermission {
    route: APIRoute;
    methods: APIMethod[];
}
