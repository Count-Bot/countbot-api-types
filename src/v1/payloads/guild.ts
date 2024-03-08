import { LanguageCode } from '../utils/languages.js';

export interface APIGuild {
	channel: string | null;
	guildId: string;
	language: LanguageCode;
	premiumEndTimestamp: number;
}