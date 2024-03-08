export const APIRoutes = [
	'/v1',
	'/v1/channels',
	'/v1/channels/:id',
	'/v1/guilds',
	'/v1/guilds/:id',
	'/v1/users',
	'/v1/users/:id',
] as const;

export type APIRoute = typeof APIRoutes[number];

export const APIMethods = [
	'GET',
	'POST',
	'PUT',
	'DELETE',
	'PATCH',
] as const;

export type APIMethod = typeof APIMethods[number];

export interface RoutePermission {
	route: APIRoute;
	methods: APIMethod[];
}
