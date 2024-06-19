import { Modifiers } from '../utils/modifiers.js';

export interface APIUserModifiers {
  userId: string,
  freeze: Modifiers<boolean>;
}