export type Achievement =
  | 'COUNTER_AMATURE'
  | 'COUNTER_EXPERIENCED'
  | 'COUNTER_LEGENDARY'
  | 'ITEM_SCAVENGER'
  | 'ITEM_SEEKER'
  | 'ITEM_HUNTER'
  | 'COUNTBOT_HERO'
  | 'COUNTBOT_CHAMPION'
  | 'COUNTBOT_VILLIAN'
  | 'SELFLESS_COUNTER'
  | 'BOT_KILLER';

export interface AchievementAward {
  /**
   * Coins to award a user
   */
  coins: number;
  /**
   * XP to award a user
   */
  xp: number;
}
