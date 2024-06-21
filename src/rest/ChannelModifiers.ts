import { Types } from 'mongoose';

import { APICountingChannelModifiers } from '../payloads/channelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiersOptions extends BaseAuthRouteOptions<APICountingChannelModifiers<Types.ObjectId>> {
  Params: {
    channelId: string;
  };
}