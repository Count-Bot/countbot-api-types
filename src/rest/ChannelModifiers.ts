import type { Types } from 'mongoose';

import type { APICountingChannelModifiers } from '../payloads/ChannelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiers extends BaseAuthRouteOptions<APICountingChannelModifiers<typeof Types.ObjectId> | null> {
  Params: {
    channelId: string;
  };
}