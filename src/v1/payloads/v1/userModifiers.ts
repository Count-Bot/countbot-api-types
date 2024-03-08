interface Modifiers<T> {
	defaultValue: T;
	value: T;
	endTimestamp: number | null;
}

export interface APIUserModifiers {
	userId: string,
	freeze: Modifiers<boolean>;
}