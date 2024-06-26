import type { Types } from 'mongoose';

import type { Modifiers } from '../utils/modifiers.js';

export interface APICountingUserModifiers<IDType extends string | typeof Types.ObjectId> {
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