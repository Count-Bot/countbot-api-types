import type { APICountingChannel } from '../payloads/Channel.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export const CountingModes = [
  'DEFAULT',
  'EVEN',
  'ODD',
  'THREE',
  'FOUR',
  'FIVE',
  'SIX',
  'SEVEN',
  'EIGHT',
  'NINE',
  'TEN',
  'PRIME',
] as const;

export type CountingMode = (typeof CountingModes)[number];

export interface RESTGetAPICountingChannels<T> extends BaseAuthRouteOptions<APICountingChannel<T> | null> {
  Querystring: {
    channelId?: string;
    guildId?: string;
  };
}

export interface RESTGetAPICountingChannel<T> extends BaseAuthRouteOptions<APICountingChannel<T> | null> {
  Params: {
    channelId: string;
  };
}

export interface RESTPatchAPICountingChannel<T> extends BaseAuthRouteOptions<APICountingChannel<T> | null> {
  Params: {
    channelId: string;
  };
  Body: {
    channelId?: string;
    allowChatting?: boolean;
    allowItems?: boolean;
    allowMilestones?: boolean;
    consecutiveCounting?: boolean;
    countValidation?: boolean;
    suddenDeath?: boolean;
    mode?: CountingMode;
  };
}

export interface RESTPostAPICountingChannel<T> extends BaseAuthRouteOptions<APICountingChannel<T> | null> {
  Body: {
    channelId: string;
    guildId: string;
  };
}

export interface RESTGetAPICountingChannelLeaderboard<T> extends BaseAuthRouteOptions<APICountingChannel<T>[] | null> {
  Querystring: {
    page?: number;
  };
}
