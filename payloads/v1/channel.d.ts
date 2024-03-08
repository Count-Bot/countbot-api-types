export interface APIChannel {
    allowChatting: boolean;
    allowItems: boolean;
    channelId: string;
    guildId: string;
    consecutiveCounting: boolean;
    countValidation: boolean;
    suddenDeath: boolean;
    count: number;
    items: number;
    lastCountId: string | null;
    mode: string;
    modifiers: string;
    goal: {
        active: boolean;
        number: number;
        lock: boolean;
        reset: boolean;
        role: string | null;
    } | null;
}
