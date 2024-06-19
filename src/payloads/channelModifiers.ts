import { Modifiers } from '../utils/modifiers.js';
import { Base } from './base.js';

export interface CountingChannelChannelModifiers {
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

export type APICountingChannelChannelModifiers = CountingChannelChannelModifiers & Base;