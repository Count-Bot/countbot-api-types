import { APICountingGuild } from '../payloads/Guild.js';
import { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPIGuildsOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Querystring: {
    guildId: string;
  };
}

export interface RESTGetAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Params: {
    id: string;
  };
}

export interface RESTPatchAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Params: { id: string; };
  Body: {
    language: LanguageCode;
  };
}

export interface RESTPostAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Body: {
    guildId: string;
  };
}
