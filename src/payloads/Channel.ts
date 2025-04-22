import type { CountingMode } from '../rest/Channel.js';

export interface CountingGoal {
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

export interface CountingConfig {
  chatting: boolean;
  itemDrop: boolean;
  itemUse: boolean;
  consecutiveCounting: boolean;
  suddenDeath: boolean;
  countReactions: boolean;
  correctReaction: string;
  incorrectReaction: string;
}

export interface CountingNotifications {
  achievements: boolean;
  milestones: boolean;
}

export interface APICountingChannel<IDType> {
  _id: IDType;
  enabled: boolean;
  config: CountingConfig;
  notifications: CountingNotifications;
  channelId: string;
  guildId: string;
  count: number;
  items: number;
  lastCountId: string | null;
  mode: CountingMode;
  modifiers: IDType;
  goal: CountingGoal | null;
}
