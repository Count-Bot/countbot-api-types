import type { APICountingGuild } from '../payloads/Guild.js';
import type { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPIGuilds<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Querystring: {
    guildId?: string;
  };
}

export interface RESTGetAPIGuild<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTPatchAPIGuild<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Params: {
    guildId: string;
  };
  Body: {
    language?: LanguageCode;
  };
}

export interface RESTPostAPIGuild<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Body: {
    guildId: string;
    language?: LanguageCode;
  };
}
