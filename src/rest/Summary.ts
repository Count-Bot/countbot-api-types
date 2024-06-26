import type { Types } from 'mongoose';

import type { APICountingSummary } from '../payloads/Summary.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummaries = BaseAuthRouteOptions<APICountingSummary<typeof Types.ObjectId>[] | null>;
export interface RESTGetAPIDailySummary extends BaseAuthRouteOptions<APICountingSummary<typeof Types.ObjectId> | null> {
  Params: {
    summaryId: string;
  };
}