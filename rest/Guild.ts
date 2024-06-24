import { Types } from 'mongoose';

import { APICountingGuild } from '../payloads/Guild.js';
import { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPIGuilds extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Querystring: {
    guildId?: string;
  };
}

export interface RESTGetAPIGuild extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTPatchAPIGuild extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Params: {
    guildId: string;
  };
  Body: {
    language?: LanguageCode;
  };
}

export interface RESTPostAPIGuild extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Body: {
    guildId: string;
    language?: LanguageCode;
  };
}
