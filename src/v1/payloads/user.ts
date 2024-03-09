export interface APIUser {
	userId: string;
	modifiers: string;
	coins: number;
	xp: number;
	numbersCounted: number;
	itemsFound: number;
	inventory: number[];
	achievements: ({
		achievedAt: number;
		name: UserAchievement;
	})[];
	hasVoted: boolean;
	boosting: boolean;
}

export type UserAchievement = 'COUNTER_AMATURE' | 'COUNTER_EXPERIENCED' | 'COUNTER_LEGENDARY' | 'ITEM_SCAVENGER' | 'ITEM_SEEKER' | 'ITEM_HUNTER' | 'COUNTBOT_HERO' | 'WORST_COUNTER';