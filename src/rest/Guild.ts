import type { ObjectId } from '../utils/base.js';
import type { LanguageCode } from 'iso-639-1';

import type { APICountingGuild } from '../payloads/Guild.js';
import type { BaseAuthRouteOptions } from '../utils/index.js';

export interface RESTGetAPIGuilds extends BaseAuthRouteOptions<APICountingGuild<ObjectId> | null> {
  Querystring: {
    guildId?: string;
  };
}

export interface RESTGetAPIGuild extends BaseAuthRouteOptions<APICountingGuild<ObjectId> | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTPatchAPIGuild extends BaseAuthRouteOptions<APICountingGuild<ObjectId> | null> {
  Params: {
    guildId: string;
  };
  Body: {
    language?: LanguageCode;
  };
}

export interface RESTPostAPIGuild extends BaseAuthRouteOptions<APICountingGuild<ObjectId> | null> {
  Body: {
    guildId: string;
    language?: LanguageCode;
  };
}
