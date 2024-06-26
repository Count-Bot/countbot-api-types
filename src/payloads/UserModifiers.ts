import type { Types } from 'mongoose';

import { Modifiers } from '../utils/modifiers.js';

export interface APICountingUserModifiers<ID extends string | Types.ObjectId> {
  /**
   * The ObjectID of the user modifiers
   */
  _id: ID;
  /**
   * The ID of the user these modifiers are for.
   */
  userId: string,
  /**
   * The freeze modifier
   */
  freeze: Modifiers<boolean>;
}