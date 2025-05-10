export type CBItemTypeString = keyof typeof CBItemType;
export type CBItemRarityString = keyof typeof CBItemRarity;

export type CBItemTypeStringUppercase = Uppercase<CBItemTypeString>;

export enum ItemMode {
  FOUND = 'FOUND',
  USED = 'USED',
}

export enum CBItemRarity {
  Common = 5,
  Rare = 15,
  Epic = 40,
  Mythic = 100,
}

export enum CBItemType {
  Skip = 1024,
  Slowmode = 2048,
  Luck = 4096,
  CoinBooster = 8192,
  XPBooster = 16384,
  Lightning = 32768,
  Freeze = 65536,
  LootCrate = 131072,
}

export type CBItemString = `${CBItemRarityString}_${CBItemTypeString}`;

export interface ItemDropResult {
  count: number;
  rarity: CBItemRarity;
  type?: CBItemType;
  skipped?: number;
  lightning?: number;
  duration?: number;
  boost?: number;
  luck?: number;
  slowmode?: number;
  coins?: number;
  xp?: number;
  item?: CBItemString;
}
