import type { APICountingChannelModifiers } from '../payloads/ChannelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiers extends BaseAuthRouteOptions<APICountingChannelModifiers | null> {
  Params: {
    channelId: string;
  };
}
