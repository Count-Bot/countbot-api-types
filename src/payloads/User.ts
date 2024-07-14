import type { Achievement } from '../utils/achievements.js';
import type { CBItemString } from '../utils/items.js';

export interface UserAchievement {
  /**
   * The timestamp when the achievement was achieved
   */
  achievedAt: number;
  /**
   * The name of the achievement
   */
  name: Achievement;
}

export interface APICountingUser<IDType> {
  /**
   * The ObjectID of the user
   */
  _id: IDType;
  /**
   * The Discord Snowflake ID of the user
   */
  userId: string;
  /**
   * The modifiers of the user
   */
  modifiers: IDType;
  /**
   * The amount of coins the user has
   */
  coins: number;
  /**
   * The amount of XP the user has
   */
  xp: number;
  /**
   * The total numbers counted by the user
   */
  numbersCounted: number;
  /**
   * The total items found by the user
   */
  itemsFound: number;
  /**
   * The user's inventory
   */
  inventory: CBItemString[];
  /**
   * The achievements of the user
   */
  achievements: UserAchievement[];
  /**
   * The timestamp when the user last voted
   */
  votedAt: number;
  /**
   * The number of votes the user has
   */
  votes: number;
  /**
   * The boosting status of the user
   */
  premiumEndAt: number;
  /**
   * The number of items bought today
   */
  itemsBoughtToday: number;
  /**
   * The timestamp when the user reached the item limit
   */
  itemLimitReachedAt: number;
  /**
   * The timestamp when the user used an item cooldown
   */
  itemUseCooldownEndAt: number;
  /**
   * The lifetime status of the user
   */
  lifetime: boolean;
}
