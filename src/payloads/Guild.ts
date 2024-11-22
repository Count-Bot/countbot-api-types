import type { LanguageCode } from '../utils/index.js';

/**
 * Premium is either enabled or disabled on the user-end
 * MONTHLY, YEARLY, and LIFETIME are only used for display purposes, not for any actual logic
 */
export enum PremiumStatus {
  /**
   * The guild is not premium
   */
  NONE = 0,
  /**
   * The guild is premium
   */
  MONTHLY = 1,
  /**
   * The guild has a yearly subscription
   */
  YEARLY = 2,
  /**
   * The guild has a lifetime subscription
   */
  LIFETIME = 3,
}

export interface APICountingGuild<IDType> {
  /**
   * The ObjectID of the guild
   */
  _id: IDType;
  /**
   * The counting channel of the guild
   */
  channel: IDType | null;
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
  premium: PremiumStatus;
}
