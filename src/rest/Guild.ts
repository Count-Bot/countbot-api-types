import type { APICountingGuild } from '../payloads/Guild.js';
import type { BaseAuthRouteOptions } from '../utils/index.js';

export interface RESTGetAPIGuilds extends BaseAuthRouteOptions<APICountingGuild | null> {
  Querystring: Record<string, string>;
}

export interface RESTGetAPIGuild extends BaseAuthRouteOptions<APICountingGuild | null> {
  Params: {
    guildId: string;
  };
}
export interface RESTPostAPIGuild extends BaseAuthRouteOptions<APICountingGuild | null> {
  Body: {
    guildId: string;
  };
}
