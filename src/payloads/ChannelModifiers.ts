import type { ObjectId } from '../utils/base.js';

import type { Modifiers } from '../utils/modifiers.js';

export interface APICountingChannelModifiers<IDType extends string | ObjectId> {
  /**
   * The ObjectID of the channel modifiers
   */
  _id: IDType;
  /**
   * The ID of the channel these modifiers are for.
   */
  channelId: string;
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