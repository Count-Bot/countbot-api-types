import { Types } from 'mongoose';

import { APICountingSummary } from '../payloads/summary.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummariesOptions = BaseAuthRouteOptions<APICountingSummary<Types.ObjectId>[] | null>;
export interface RESTGetAPIDailySummaryOptions extends BaseAuthRouteOptions<APICountingSummary<Types.ObjectId> | null> {
  Params: { summaryId: string; };
}