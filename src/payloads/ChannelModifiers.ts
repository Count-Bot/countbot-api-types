import type { Modifiers } from '../utils/BaseModifier.js';

export interface APICountingChannelModifiers<IDType = string> {
  /**
   * The ObjectID of the channel modifiers
   */
  _id: IDType;
  /**
   * The ID of the channel these modifiers are for.
   */
  channelId: string;
  /**
   * The Coin Boost modifier
   */
  coin: Modifiers<number>;
  /**
   * The Luck modifier
   */
  luck: Modifiers<number>;
  /**
   * The XP Boost modifier
   */
  xp: Modifiers<number>;
}
