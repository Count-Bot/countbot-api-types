import { StatusCodePhrases } from './http_phrases.js';

export interface BaseAuthRouteOptions<D = null> {
	Header: {
		Authorization: string;
	};
	Reply: {
		error: boolean;
		message: StatusCodePhrases;
		data: D | null;
	};
}