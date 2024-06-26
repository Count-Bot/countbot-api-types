import type { Types } from 'mongoose';

export interface APICountingSummary<IDType extends string | typeof Types.ObjectId> {
  _id: IDType;
  /**
   * If the summary is the current one
   */
  current: boolean;
  /**
   * Number of commands executed for the day
   */
  commands: number;
  /**
   * Number of counts for the day
   */
  counts: number;
  /**
   * Number of new guilds for the day
   */
  guilds: number;
  /**
   * Number of new users for the day
   */
  users: number;
  /**
   * Number of votes for the day
   */
  votes: number;
  /**
   * End of the day timestamp (milliseconds since epoch)
   */
  endOfDayTimestamp: number;
}