import type { Modifiers } from '../utils/modifiers.js';

export interface APICountingChannelModifiers {
  /**
   * The Channel ID as identified by Discord
   */
  _id: string;
  /**
   * The coin boost modifier
   */
  coin: Modifiers<number>;
  /**
   * The luck modifier
   */
  luck: Modifiers<number>;
  /**
   * The slowmode modifier
   */
  slowmode: Modifiers<number>;
  /**
   * The xp modifier
   */
  xp: Modifiers<number>;
}
