import { APIGuild } from '../payloads/guild.js';
import { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPIGuildOptions extends BaseAuthRouteOptions<APIGuild> {
	Params: { guildId: string; };
};

export interface RESTPatchAPIGuildOptions extends BaseAuthRouteOptions<APIGuild> {
	Params: { guildId: string; };
	Body: {
		channelId?: string | null | undefined;
		language?: LanguageCode | undefined;
		premiumEndTimestamp?: number | undefined;
	};
};

export interface RESTPostAPIGuildOptions extends BaseAuthRouteOptions<APIGuild> {
	Params: { guildId: string; };
	Body: {
		guildId: string;
	};
};