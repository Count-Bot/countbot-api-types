import { APICountingChannel } from '../payloads/Channel.js';
import type { APICountingGuild } from '../payloads/Guild.js';
import type { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPICountingGuilds<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Querystring: {
    guildId?: string;
  };
}

export interface RESTGetAPICountingGuild<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTGetAPICountingGuildChannels<T> extends BaseAuthRouteOptions<APICountingChannel<T>[] | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTPatchAPICountingGuild<T> extends BaseAuthRouteOptions<APICountingGuild<T> | null> {
  Params: {
    guildId: string;
  };
  Body: {
    language?: LanguageCode;
  };
}

export interface RESTPostAPICountingGuild<T> extends BaseAuthRouteOptions<APICountingGuild<T>> {
  Body: {
    guildId: string;
  };
}
