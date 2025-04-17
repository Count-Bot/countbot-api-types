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

export interface APICountingChannel<IDType> {
  _id: IDType;
  config: {
    chatting: boolean;
    itemUse: boolean;
    consecutiveCounting: boolean;
    suddenDeath: boolean;
    countReactions: boolean;
    correctReaction: string;
    incorrectReaction: string;
  };
  notifications: {
    achievements: boolean;
    itemDrop: boolean;
    milestones: boolean;
  };
  channelId: string;
  guildId: string;
  count: number;
  items: number;
  lastCountId: string | null;
  mode: CountingMode;
  modifiers: IDType;
  goal: CountingGoal | null;
}
