import { APISummary } from '../../payloads/v1/summary.js';
import { BaseAuthRouteOptions } from '../../utils/base.js';

export interface RESTGetAPISummaryOptions extends BaseAuthRouteOptions<APISummary> {
	Params: { summaryId: string; };
};

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
};