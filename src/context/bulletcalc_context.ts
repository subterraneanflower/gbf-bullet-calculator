import * as React from "react";
import { BulletCalculatorData } from '../data/bulletcalc';
import { BulletCost } from '../data/gbf';

export const BulletCalculatorContext = React.createContext<BulletCalculatorData>({
  bulletCosts: [],
  inventory: {},
  bulletInventory: [],
  systemPreferences: {},
  setBulletCosts: (newBullets: BulletCost[]) => null,
  setInventory: (newInventory: {[slug: string]: number}) => null,
  setBulletInventory: (newBulletInventory: BulletCost[]) => null,
  setActionButton: (newButton?: React.ReactNode) => null,
  setSystemPreferences: (newPref: {[k: string]: any}) => null,
  setInstallPrompt: (prompt: any) => null
});