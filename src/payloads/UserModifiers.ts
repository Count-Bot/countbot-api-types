import type { Modifiers } from '../utils/modifiers.js';

export interface APICountingUserModifiers {
  /**
   * The User ID as identified by Discord
   */
  _id: string;
  /**
   * The freeze modifier
   */
  freeze: Modifiers<boolean>;
}
