import type { Modifiers } from '../utils/BaseModifier.js';

export interface APICountingUserModifiers {
  /**
   * The id of the user modifiers
   */
  id: string;
  /**
   * The ID of the user these modifiers are for.
   */
  userId: string;
  /**
   * The freeze modifier
   */
  freeze: Modifiers<boolean>;
}
