import { Types } from 'mongoose';

import { APICountingGuild } from '../payloads/guild.js';
import { BaseAuthRouteOptions, LanguageCode } from '../utils/index.js';

export interface RESTGetAPIGuildsOptions extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Querystring: {
    guildId: string;
  };
}

export interface RESTGetAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Params: {
    guildId: string;
  };
}

export interface RESTPatchAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Params: {
    guildId: string;
  };
  Body: {
    language: LanguageCode;
  };
}

export interface RESTPostAPIGuildOptions extends BaseAuthRouteOptions<APICountingGuild<Types.ObjectId> | null> {
  Body: {
    guildId: string;
  };
}
