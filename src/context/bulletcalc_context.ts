import * as React from "react";
import { BulletCalculatorData } from '../data/bulletcalc';
import { BulletCost } from '../data/gbf';

export const BulletCalculatorContext = React.createContext<BulletCalculatorData>({
  bulletCosts: [],
  inventory: {},
  systemPreferences: {},
  setBulletCosts: (newBullets: BulletCost[]) => null,
  setInventory: (newInventory: {[slug: string]: number}) => null,
  setActionButton: (newButton?: React.ReactNode) => null,
  setSystemPreferences: (newPref: {[k: string]: any}) => null,
  setInstallPrompt: (prompt: any) => null
});