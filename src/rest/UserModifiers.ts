import { Types } from 'mongoose';

import { APICountingUserModifiers } from '../payloads/userModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIUserModifiersOptions extends BaseAuthRouteOptions<APICountingUserModifiers<Types.ObjectId>> {
  Params: {
    userId: string;
  };
}