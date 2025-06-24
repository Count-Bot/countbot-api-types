import { ItemString } from '../utils/items.js';

export interface APICountingUser<IDType = string> {
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
   * The number of achievements the user has
   */
  achievements: number;
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
  inventory: ItemString[];
  /**
   * The timestamp when the user last voted
   */
  votedAt: number;
  /**
   * The number of votes the user has
   */
  votes: number;
  /**
   * The timestamp when the user used an item cooldown
   */
  itemUseCooldownEndAt: number;
  /**
   * The lifetime status of the user
   */
  premium: boolean;
  /**
   * Initialized when the user was created but will be updated at every count.
   */
  lastCountAt: Date;
}
