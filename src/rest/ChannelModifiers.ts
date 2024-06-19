import { APICountingChannelChannelModifiers } from '../payloads/ChannelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelModifiersOptions extends BaseAuthRouteOptions<APICountingChannelChannelModifiers> {
  Params: { channelId: string; };
}