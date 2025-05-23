import type { APICountingChannelModifiers } from '../payloads/ChannelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiers<T> extends BaseAuthRouteOptions<APICountingChannelModifiers<T> | null> {
  Params: {
    channelId: string;
  };
}
