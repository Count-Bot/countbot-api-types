import type { APICountingSummary } from '../payloads/Summary.js';
import type { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummaries<T> = BaseAuthRouteOptions<APICountingSummary<T>[] | null>;

export interface RESTGetAPIDailySummary<T> extends BaseAuthRouteOptions<APICountingSummary<T> | null> {
  Params: {
    summaryId: string;
  };
}
