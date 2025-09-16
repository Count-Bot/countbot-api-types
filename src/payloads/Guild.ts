import type { LanguageCode } from '../utils/index.js';

export interface APICountingGuild {
  /**
   * The Discord Snowflake of the guild
   */
  guildId: string;
  /**
   * The Counting Channels for the guild
   */
  channels: string[];
  /**
   * The ISO-639-1 language code for the guild
   */
  language: LanguageCode;
  /**
   * Whether the guild is premium or not
   */
  premium: boolean;
}
