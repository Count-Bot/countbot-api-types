import type { LanguageCode } from '../utils/index.js';

export enum GuildPremiumType {
  Default = 0,
  Plus = 1,
}

export interface APICountingGuild<IDType> {
  /**
   * The ObjectID of the guild
   */
  _id: IDType;
  /**
   * The counting channel of the guild
   */
  channels: string[];
  /**
   * The Discord Snowflake ID of the guild
   */
  guildId: string;
  /**
   * The ISO-639-1 language code for the guild
   */
  language: LanguageCode;
  /**
   * The premium type of the guild
   */
  premium: GuildPremiumType;
}
