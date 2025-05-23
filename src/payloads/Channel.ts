import type { CountingMode } from '../rest/Channel.js';

export interface CountingChannelGoal {
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

export interface CountingChannelReactionEmojis {
  /**
   * The emoji to use for correct counts.
   */
  correct?: string | null;
  /**
   * The emoji to use for incorrect counts.
   */
  incorrect?: string | null;
}

export interface CountingChannelReactions {
  /**
   * If the reactions are enabled.
   */
  enabled: boolean;
  /**
   * The emojis to use for the reactions.
   */
  emojis?: CountingChannelReactionEmojis;
}

export interface CountingChannelConfig {
  /**
   * If the channel is enabled.
   */
  chatting: boolean;
  /**
   * If item drops are enabled.
   */
  itemDrop: boolean;
  /**
   * If item use is enabled.
   */
  itemUse: boolean;
  /**
   * If consecutive counting is enabled.
   */
  consecutiveCounting: boolean;
  /**
   * If sudden death mode is enabled.
   */
  suddenDeath: boolean;
  /**
   * If incorrect counts are deleted.
   */
  deleteIncorrect: boolean;
  /**
   * The counting mode
   */
  mode: CountingMode;
}

export interface CountingChannelNotifications {
  /**
   * Enabled: Achievements are sent to the counting channel. DM user fallback.
   * Disabled: Achievements are sent to the user.
   */
  achievements: boolean;
  /**
   * Enabled: Milestones are sent to the counting channel.
   * Disabled: Milestones are not sent at all.
   */
  milestones: boolean;
}

export interface APICountingChannel<IDType> {
  _id: IDType;
  /**
   * If the channel is enabled.
   */
  enabled: boolean;
  /**
   * The channel configuration.
   */
  config: CountingChannelConfig;
  /**
   * The channel notification configuration.
   */
  notifications: CountingChannelNotifications;
  /**
   * The channel reactions configuration.
   */
  reactions: CountingChannelReactions;
  /**
   * The channel ID.
   */
  channelId: string;
  /**
   * The guild ID.
   */
  guildId: string;
  /**
   * The channels current count.
   */
  count: number;
  /**
   * The channels score (all time counts).
   */
  items: number;
  /**
   * The user ID of the last user that counted.
   */
  lastCountId: string | null;
  /**
   * The modifiers of the channel
   */
  modifiers: IDType;
  /**
   * The counting goal of the channel
   */
  goal: CountingChannelGoal | null;
}
