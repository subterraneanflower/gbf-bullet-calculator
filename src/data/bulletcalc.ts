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

export const totalBulletCosts = (bulletCostList: BulletCost[], exclusionBullets: GbfItemCost[] = []): GbfItemCost[] => {
  let remainingExclusionBullets = [...exclusionBullets];
  const calculatedCosts = bulletCostList.map((c) => {
    const {result, remainingExclusions} = c.calcRequiredCosts({exclusionCosts: remainingExclusionBullets});
    remainingExclusionBullets = remainingExclusions;
    return result;
  });

  type costObj = {item: GbfItem, quantity: number};
  const costMap: Map<string, costObj> = new Map<string, costObj>();
  const costList = [];

  for(const result of calculatedCosts) {
    for(const assembly of result) {
      const cost = costMap.get(assembly.item.slug);
      if(cost) {
        cost.quantity += assembly.quantity;
      } else {
        const newCost = {item: assembly.item, quantity: assembly.quantity};
        costMap.set(assembly.item.slug, newCost);
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