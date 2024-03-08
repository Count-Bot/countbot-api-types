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
        name: Achievement;
    })[];
    hasVoted: boolean;
    boosting: boolean;
}
export declare enum Achievement {
    CounterAmature = "COUNTER_AMATURE",
    CounterExperienced = "COUNTER_EXPERIENCED",
    Counter_Legendary = "COUNTER_LEGENDARY",
    ItemScavenger = "ITEM_SCAVENGER",
    ItemSeeker = "ITEM_SEEKER",
    ItemHunter = "ITEM_HUNTER",
    CountBotHero = "COUNTBOT_HERO",
    WorstCounter = "WORST_COUNTER"
}
