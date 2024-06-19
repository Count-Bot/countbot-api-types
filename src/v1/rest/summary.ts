import { APIDailySummary } from '../payloads/summary.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummariesOptions = BaseAuthRouteOptions<APIDailySummary[] | null>;
export interface RESTGetAPIDailySummaryOptions extends BaseAuthRouteOptions<APIDailySummary | null> {
  Params: { summaryId: string; };
}