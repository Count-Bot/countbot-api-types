import { APISummary } from '../payloads/summary.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export type RESTGetAPISummariesOptions = BaseAuthRouteOptions<APISummary[] | null>;
export interface RESTGetAPISummaryOptions extends BaseAuthRouteOptions<APISummary | null> {
	Params: { summaryId: string; };
}

export interface RESTPatchAPISummaryOptions extends BaseAuthRouteOptions<APISummary> {
	Params: { summaryId: string; };
	Body: {
		current?: boolean | undefined;
		commands?: boolean | undefined;
		counts?: boolean | undefined;
		guilds?: boolean | undefined;
		items?: boolean | undefined;
		users?: boolean | undefined;
		votes?: boolean | undefined;
	};
}