import type { Types } from 'mongoose';

import { APICountingSummary } from '../payloads/Summary.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummaries = BaseAuthRouteOptions<APICountingSummary<Types.ObjectId>[] | null>;
export interface RESTGetAPIDailySummary extends BaseAuthRouteOptions<APICountingSummary<Types.ObjectId> | null> {
  Params: {
    summaryId: string;
  };
}