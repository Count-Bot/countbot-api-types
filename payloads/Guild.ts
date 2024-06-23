import { Types } from 'mongoose';

import { LanguageCode } from '../utils/languages.js';

export interface APICountingGuild<ID extends string | Types.ObjectId> {
  /**
   * The ObjectID of the guild
   */
  _id: ID;
  /**
   * The counting channel of the guild
   */
  channel: Types.ObjectId | null;
  /**
   * The Discord Snowflake ID of the guild
   */
  guildId: string;
  /**
   * The ISO-639-1 language code for the guild
   */
  language: LanguageCode;
  /**
   * Timestamp when CountBot Plus ends (milliseconds since epoch)
   */
  premiumEndTimestamp: number;
  /**
   * If the guild has a lifetime subscription
   */
  lifetime: boolean;
}