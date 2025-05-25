export type AchievementId =
  | 'FIRST_COUNT'
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

export interface APIAchievement<IDType> {
  _id: IDType;
  userId: string;
  achievement: AchievementId;
  awardedAt: Date;
}
