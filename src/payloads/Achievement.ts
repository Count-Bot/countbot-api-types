export enum AchievementId {
  FirstCount = 'FIRST_COUNT',
  CounterAmature = 'COUNTER_AMATURE',
  CounterExperienced = 'COUNTER_EXPERIENCED',
  CounterLegendary = 'COUNTER_LEGENDARY',
  ItemScavenger = 'ITEM_SCAVENGER',
  ItemSeeker = 'ITEM_SEEKER',
  ItemHunter = 'ITEM_HUNTER',
  CountBotHero = 'COUNTBOT_HERO',
  CountBotChampion = 'COUNTBOT_CHAMPION',
  CountBotVillain = 'COUNTBOT_VILLIAN',
  SelflessCounter = 'SELFLESS_COUNTER',
  BotKiller = 'BOT_KILLER',
}

export interface APIAchievement<IDType = string> {
  _id: IDType;
  /**
   * The Discord Snowflake ID of the user who earned the achievement.
   */
  userId: string;
  /**
   * The ID of the achievement that was earned.
   */
  achievement: AchievementId;
  /**
   * The date when the achievement was awarded.
   */
  awardedAt: Date;
}
