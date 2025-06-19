import { ItemString, ItemTypeString } from './items.js';

export function getMaxInventory(premium: boolean): number {
  return premium ? 50 : 20;
}

export function getItemCooldown(premium: boolean): number {
  return premium ? 5000 : 20000;
}

export function canVote(votedAt: number): boolean {
  return Date.now() - votedAt >= 43200000;
}

export function getItemsByType(inventory: ItemString[], type: ItemTypeString): ItemString[] {
  return inventory.filter(i => i.endsWith(type));
}
