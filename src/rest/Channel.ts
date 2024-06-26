import type { ObjectId } from '../utils/base.js';

import type { APICountingChannel } from '../payloads/Channel.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export const CountingModes = ['DEFAULT', 'EVEN', 'ODD', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'PRIME'] as const;

export type CountingMode = typeof CountingModes[number];

export interface RESTGetAPICountingChannels extends BaseAuthRouteOptions<APICountingChannel<ObjectId> | null> {
  Querystring: {
    channelId?: string;
  };
}

export interface RESTGetAPICountingChannel extends BaseAuthRouteOptions<APICountingChannel<ObjectId> | null> {
  Params: {
    channelId: string;
  };
}

export interface RESTPatchAPICountingChannel extends BaseAuthRouteOptions<APICountingChannel<ObjectId> | null> {
  Params: {
    channelId: string;
  };
  Body: {
    channelId?: string;
    allowChatting?: boolean;
    allowItems?: boolean;
    consecutiveCounting?: boolean;
    countValidation?: boolean;
    suddenDeath?: boolean;
    mode?: CountingMode;
  };
}

export interface RESTPostAPICountingChannel extends BaseAuthRouteOptions<APICountingChannel<ObjectId> | null> {
  Body: {
    channelId: string;
    guildId: string;
    allowChatting?: boolean;
    allowItems?: boolean;
    consecutiveCounting?: boolean;
    countValidation?: boolean;
    suddenDeath?: boolean;
    mode?: CountingMode;
  };
}