import type { Types } from 'mongoose';
import type { LanguageCode } from 'iso-639-1';

import type { APICountingGuild } from '../payloads/Guild.js';
import type { BaseAuthRouteOptions } from '../utils/index.js';

export interface RESTGetAPIGuilds extends BaseAuthRouteOptions<APICountingGuild<typeof Types.ObjectId> | null> {
  Querystring: {
    guildId?: string;
  };
}

export interface RESTGetAPIGuild extends BaseAuthRouteOptions<APICountingGuild<typeof Types.ObjectId> | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTPatchAPIGuild extends BaseAuthRouteOptions<APICountingGuild<typeof Types.ObjectId> | null> {
  Params: {
    guildId: string;
  };
  Body: {
    language?: LanguageCode;
  };
}

export interface RESTPostAPIGuild extends BaseAuthRouteOptions<APICountingGuild<typeof Types.ObjectId> | null> {
  Body: {
    guildId: string;
    language?: LanguageCode;
  };
}
