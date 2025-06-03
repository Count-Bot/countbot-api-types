export enum UserBuyItemCode {
  Success,
  NotEnoughCoins,
  InventoryFull,
}

export enum UserAddAchievementCode {
  Success,
  AlreadyHasAchievement,
}

export enum ChannelTransferCode {
  Success,
  FailOldChannelNotExists,
  FailChannelsEqual,
  FailNewChannelAlreadyExists,
}

export enum ChannelDeleteCode {
  Success,
  FailChannelNotExists,
}
