import { APIChannel } from '../payloads/channel.js';
import { APIChannelModifiers } from '../payloads/channelModifiers.js';
import { BaseAuthRouteOptions } from '../utils/base.js';

export interface RESTGetAPIChannelOptions extends BaseAuthRouteOptions<APIChannel> {
	Params: { channelId: string; };
};

export interface RESTDeleteAPIChannelOptions extends BaseAuthRouteOptions<APIChannel> {
	Params: { channelId: string; };
};

export interface RESTPatchAPIChannelOptions extends BaseAuthRouteOptions<APIChannel> {
	Params: { channelId: string; };
	Body: {
		allowChatting?: boolean | undefined;
		allowItems?: boolean | undefined;
		channelId?: string | undefined;
		consecutiveCounting?: boolean | undefined;
		countValidation?: boolean | undefined;
		suddenDeath?: boolean | undefined;
		count?: number | undefined;
		items?: number | undefined;
		lastCountId?: string | null | undefined;
		mode?: string | undefined;
		goal?: {
			active?: boolean | undefined;
			number?: number | undefined;
			lock?: boolean | undefined;
			reset?: boolean | undefined;
			role?: string | null | undefined;
		} | null | undefined;
	};
};

export interface RESTPostAPIChannelCountOptions extends BaseAuthRouteOptions<APIChannel> {
	Params: { channelId: string; };
	Body: {
		count: number;
		userId: string;
		guildId: string;
	};
}

export interface RESTGetAPIChannelModifiersOptions extends BaseAuthRouteOptions<APIChannelModifiers> {
	Params: { channelId: string; };
};