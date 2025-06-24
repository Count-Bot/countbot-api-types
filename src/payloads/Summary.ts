export interface APICountingSummary<IDType = string> {
  _id: IDType;
  /**
   * If the summary is the current one
   */
  current: boolean;
  /**
   * Number of Counting Channels created for the day
   */
  channels: number;
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
