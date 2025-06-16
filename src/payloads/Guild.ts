import type { LanguageCode } from '../utils/index.js';

export interface APICountingGuild<IDType> {
  /**
   * The ObjectID of the guild
   */
  _id: IDType;
  /**
   * The Discord Snowflake ID of the guild
   */
  guildId: string;
  /**
   * The counting channel of the guild
   */
  channels: string[];
  /**
   * The ISO-639-1 language code for the guild
   */
  language: LanguageCode;
  /**
   * The premium type of the guild
   */
  premium: boolean;
  /**
   * Initialized when the guild was created but will be updated at every count.
   */
  lastCountAt: Date;
}
