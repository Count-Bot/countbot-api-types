import type { ObjectId } from '../utils/base.js';

import type { APICountingChannelModifiers } from '../payloads/ChannelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiers extends BaseAuthRouteOptions<APICountingChannelModifiers<ObjectId> | null> {
  Params: {
    channelId: string;
  };
}