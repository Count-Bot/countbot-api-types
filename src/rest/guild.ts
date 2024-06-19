import { APICountingGuild } from '../payloads/Guild.js';
import { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Params: { guildId: string; };
}

export interface RESTPatchAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Params: { guildId: string; };
  Body: {
    language: LanguageCode;
  };
}

export interface RESTPostAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild | null> {
  Body: {
    guildId: string;
  };
}