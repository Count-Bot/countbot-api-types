import { CountingMode } from '../rest/Channel.js';
import { APIBase } from './Base.js';

interface CountingGoal {
  /**
   * If the goal is active.
   */
  active: boolean;
  /**
   * The goal number.
   */
  number: number;
  /**
   * If the channel locks after goal is reached.
   */
  lock: boolean;
  /**
   * If the channel resets after being reached.
   */
  reset: boolean;
  /**
   * The role ID to assign to the user that reaches the goal.
   */
  role: string | null;
}

export interface CountingChannel extends APIBase {
  /**
   * If the channel allows regular chatting.
   */
  allowChatting: boolean;
  /**
   * If the channel allows items.
   */
  allowItems: boolean;
  /**
   * The channel's Discord ID.
   */
  channelId: string;
  /**
   * The channel's guild Discord ID.
   */
  guildId: string;
  /**
   * If consecutive counting is enabled.
   */
  consecutiveCounting: boolean;
  /**
   * If count validation (reactions) is enabled.
   */
  countValidation: boolean;
  /**
   * If sudden death is enabled.
   */
  suddenDeath: boolean;
  /**
   * The channel count.
   */
  count: number;
  /**
   * The number of items found in the channel.
   */
  items: number;
  /**
   * The last count user ID.
   */
  lastCountId: string | null;
  /**
   * The counting mode.
   */
  mode: CountingMode;
  /**
   * The channel's modifiers Object ID.
   */
  modifiers: string;
  /**
   * The channel's goal.
   */
  goal: CountingGoal | null;
}

export type APICountingChannel = CountingChannel & APIBase; 