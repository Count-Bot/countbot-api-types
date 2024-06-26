import type { LanguageCode } from 'iso-639-1';
import type { Types } from 'mongoose';


export interface APICountingGuild<IDType extends string | typeof Types.ObjectId> {
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
   * Timestamp when CountBot Plus ends (milliseconds since epoch)
   */
  premiumEndTimestamp: number;
  /**
   * If the guild has a lifetime subscription
   */
  lifetime: boolean;
}