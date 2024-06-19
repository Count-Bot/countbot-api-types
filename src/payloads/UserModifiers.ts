import { Modifiers } from '../utils/modifiers.js';
import { APIBase } from './Base.js';

export interface CountingUserModifiers {
  userId: string,
  freeze: Modifiers<boolean>;
}

export type APICountingUserModifiers = CountingUserModifiers & APIBase;