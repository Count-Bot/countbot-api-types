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

export interface APIAchievement<IDType> {
  _id: IDType;
  userId: string;
  achievement: AchievementId;
  awardedAt: Date;
}
