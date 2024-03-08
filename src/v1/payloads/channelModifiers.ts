interface Modifiers<T> {
	defaultValue: T;
	value: T;
	endTimestamp: number | null;
}

export interface APIChannelModifiers {
	channelId: string;
	coin: Modifiers<number>;
	luck: Modifiers<number>;
	slowmode: Modifiers<number>;
	xp: Modifiers<number>;
}