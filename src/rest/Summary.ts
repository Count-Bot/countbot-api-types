import type { ObjectId } from '../utils/base.js';

import type { APICountingSummary } from '../payloads/Summary.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummaries = BaseAuthRouteOptions<APICountingSummary<ObjectId>[] | null>;
export interface RESTGetAPIDailySummary extends BaseAuthRouteOptions<APICountingSummary<ObjectId> | null> {
  Params: {
    summaryId: string;
  };
}