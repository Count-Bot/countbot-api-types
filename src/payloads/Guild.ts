import type { LanguageCode } from '../utils/index.js';

export enum GuildPremiumType {
  Default = 0,
  Plus = 1,
}

export interface APICountingGuild {
  /**
   * The Channel ID as identified by Discord
   */
  _id: string;
  /**
   * An array of Counting Channel IDs
   */
  channels: string[];
  /**
   * The ISO-639-1 language code for the guild
   */
  lng: LanguageCode;
  /**
   * The premium type of the guild
   */
  premium: GuildPremiumType;
  /**
   * Initialized when the guild was created but will be updated at every count.
   */
  lastCountAt: Date;
}
