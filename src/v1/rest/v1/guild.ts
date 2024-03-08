import { APIGuild } from '../../payloads/v1/guild.js';
import { BaseAuthRouteOptions } from '../../utils/base.js';
import { LanguageCode } from '../../utils/languages.js';

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
		name: string;
	};
};