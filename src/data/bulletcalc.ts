import { BulletCost, GbfItem, GbfItemCost } from './gbf';
import * as React from 'react';
import { slugToBullet } from './gbf_item_data';

export interface BulletCalculatorData {
  bulletCosts: BulletCost[];
  inventory: {[slug: string]: number};
  bulletInventory: BulletCost[];
  actionButton?: React.ReactNode;
  installPrompt?: any;
  systemPreferences: {[item: string]: any};
  setBulletCosts: (newBullets: BulletCost[]) => any;
  setInventory: (newInventory: {[slug: string]: number}) => any;
  setBulletInventory: (newBulletInventory: BulletCost[]) => any;
  setActionButton: (button: React.ReactNode | undefined) => any;
  setSystemPreferences: (pref: {[item: string]: any}) => any;
  setInstallPrompt: (prompt: any) => any;
}

// 重複バレットをまとめる。
// e.g. アイアン*1、アイアン*1、シルバー*1 -> アイアン*2、シルバー*1
export const combineDuplicatedInventoryBullets = (exclusionBullets: GbfItemCost[]) => {
  const quantityArray: GbfItemCost[] = [];

  for(const itemCost of exclusionBullets) {
    const index = quantityArray.findIndex((q) => q.item === itemCost.item);
    if(index < 0) {
      quantityArray.push(itemCost);
    } else {
      const baseCost = quantityArray[index];
      quantityArray[index] = new GbfItemCost(baseCost.item, baseCost.quantity + itemCost.quantity);
    }
  }

  return quantityArray;
}

export const totalBulletCosts = (bulletCostList: BulletCost[], exclusionBullets: GbfItemCost[] = []): GbfItemCost[] => {
  // 素材バレットを消費しながら計算を進めていく。
  let remainingExclusionBullets = [...exclusionBullets];

  const calculatedCosts = bulletCostList.map((c) => {
    const {result, remainingExclusions} = c.calcRequiredCosts({exclusionCosts: remainingExclusionBullets});
    remainingExclusionBullets = remainingExclusions; // 残りバレット
    return result;
  });

  // バレットごとに素材がバラバラに出てくるので、
  // 各素材をひとつにまとめる。
  type costObj = {item: GbfItem, quantity: number};
  const costMap: Map<string, costObj> = new Map<string, costObj>();
  const costList = [];

  for(const result of calculatedCosts) {
    for(const c of result) {
      const cost = costMap.get(c.item.slug);
      if(cost) {
        cost.quantity += c.quantity;
      } else {
        const newCost = {item: c.item, quantity: c.quantity};
        costMap.set(c.item.slug, newCost);
        costList.push(newCost);
      }
    }
  }

  return costList.map((c) => new GbfItemCost(c.item, c.quantity));
};

export const bulletCostsToJson = (costs: BulletCost[]) => {
  return costs.map((c) => ({slug: c.item.slug, quantity: c.quantity}));
};

export const jsonToBulletCosts = (json: any[]) => {
  if(json.some((item) => {
      const hasSlug = 'slug' in item && typeof item.slug === 'string';
      const hasQuantity = 'quantity' in item && typeof item.quantity === 'number';
      const validBullet = slugToBullet[item.slug];
      return !hasSlug || !hasQuantity || !validBullet;
  })) {
    return [];
  }

  return json.map((item) => new BulletCost(slugToBullet[item.slug], item.quantity));
};