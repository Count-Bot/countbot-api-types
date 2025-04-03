import type { LanguageCode } from '../utils/index.js';

export enum PremiumType {
  Default = 0,
  Plus = 1,
  Infinity = 2,
}

export enum PremiumCycle {
  Monthly = 1,
  Yearly = 2,
  Lifetime = 3,
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
   * The premium status of the guild
   */
  premium: number;
}
