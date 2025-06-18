export type CBItemTypeString = keyof typeof CBItemType;
export type CBItemRarityString = keyof typeof CBItemRarity;

export type CBItemTypeStringUppercase = Uppercase<CBItemTypeString>;

export enum ItemMode {
  FOUND = 'FOUND',
  USED = 'USED',
}

export enum CBItemRarity {
  Common = 1,
  Rare,
  Epic,
  Mythic,
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

export type ShopItem = [CBItemString, number];

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

export const ITEM_STRINGS: Record<CBItemType, CBItemTypeString> = {
  [CBItemType.Skip]: 'Skip',
  [CBItemType.Slowmode]: 'Slowmode',
  [CBItemType.Luck]: 'Luck',
  [CBItemType.CoinBooster]: 'CoinBooster',
  [CBItemType.XPBooster]: 'XPBooster',
  [CBItemType.Lightning]: 'Lightning',
  [CBItemType.Freeze]: 'Freeze',
  [CBItemType.LootCrate]: 'LootCrate',
};

export const RARITY_STRINGS: Record<CBItemRarity, CBItemRarityString> = {
  [CBItemRarity.Common]: 'Common',
  [CBItemRarity.Rare]: 'Rare',
  [CBItemRarity.Epic]: 'Epic',
  [CBItemRarity.Mythic]: 'Mythic',
};

/**
 * Convert a rarity to a string
 * @param {CBItemRarity} rarity The rarity type
 * @returns {CBItemRarityString} The item rarity string
 */
export function rarityToString(rarity: CBItemRarity): CBItemRarityString {
  return RARITY_STRINGS[rarity];
}

/**
 * Convert a rarity to a string
 * @param {CBItemType} type The item type
 * @returns {CBItemTypeString} Item type string
 */
export function typeToString(type: CBItemType): CBItemTypeString {
  return ITEM_STRINGS[type];
}

export function itemStringToRarityAndType(itemStr: CBItemString): [rarity: CBItemRarity, type: CBItemType] {
  const [rarityStr, typeStr] = itemStringToRarityAndTypeString(itemStr);

  return [CBItemRarity[rarityStr], CBItemType[typeStr]];
}

export function itemStringToRarityAndTypeString(
  itemStr: CBItemString,
): [rarity: CBItemRarityString, type: CBItemTypeString] {
  const [rarityStr, typeStr] = itemStr.split('_') as [CBItemRarityString, CBItemTypeString];

  return [rarityStr, typeStr];
}
