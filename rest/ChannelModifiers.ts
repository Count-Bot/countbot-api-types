import { Types } from 'mongoose';

import { APICountingChannelModifiers } from '../payloads/ChannelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiers extends BaseAuthRouteOptions<APICountingChannelModifiers<Types.ObjectId>> {
  Params: {
    channelId: string;
  };
}