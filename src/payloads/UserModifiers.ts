import type { Modifiers } from '../utils/modifiers.js';

export interface APICountingUserModifiers<IDType> {
  /**
   * The ObjectID of the user modifiers
   */
  _id: IDType;
  /**
   * The ID of the user these modifiers are for.
   */
  userId: string,
  /**
   * The freeze modifier
   */
  freeze: Modifiers<boolean>;
}