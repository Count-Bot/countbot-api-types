export type ModifierValues<T> = [value: T, timeLeft: number];

export interface Modifiers<T> extends IModifiersMethods<T> {
  /**
   * The default value of the modifier
   */
  defaultValue: T;
  /**
   * The current value of the modifier
   */
  value: T;
  /**
   * The timestamp when the modifier is set to end
   */
  endTimestamp: number | null;
}

export interface IModifiersMethods<T> {
  /**
   * Set the value and duration of the modifier
   * @param value The value to set
   * @param duration The duration in milliseconds
   */
  setModifier(value: T, duration: number): Promise<boolean>;
  /**
   * Get the value and remaining duration of the modifier
   */
  getValue(): Promise<ModifierValues<T>>;
  /**
   * Reset the modifier to its default value
   */
  reset(): Promise<void>;
  /**
   * Set the value of the modifier
   * @param value The value to set
   */
  setValue(value: T): Promise<T>;
}