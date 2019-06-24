import { LocaleString } from './locale';

interface GbfItemOption {
  cssColorString?: string;
  iconFileName?: string;
}

export class GbfItem {
  protected _name: LocaleString;
  protected _slug: string;
  protected _cssColorString: string;
  protected _iconFileName?: string;

  constructor(name: LocaleString, slug: string, option?: GbfItemOption) {
    this._name = name;
    this._slug = slug;
    this._cssColorString = (option && option.cssColorString) || 'rgb(82, 82, 82)';
    this._iconFileName = option && option.iconFileName;
  }

  get name(): LocaleString {
    return this._name;
  }

  get slug(): string {
    return this._slug;
  }

  get cssColorString(): string {
    return this._cssColorString;
  }

  get iconFileName(): string | undefined {
    return this._iconFileName;
  }
}

export class GbfItemCost {
  protected _item: GbfItem;
  protected _quantity: number;

  constructor(item: GbfItem, quantity: number) {
    this._item = item;
    this._quantity = quantity;
  }

  get item(): GbfItem {
    return this._item;
  }

  get quantity(): number {
    return this._quantity;
  }

  calcRequiredCosts(): GbfItemCost[] {
    return [this];
  }
}

export enum BulletType {
  PARABELLUM = 'PARABELLUM',
  RIFLE = 'RIFLE',
  CARTRIDGE = 'CARTRIDGE',
  AETHERIAL = 'AETHERIAL'
}

export class Bullet extends GbfItem {
  protected _bulletType: BulletType;
  protected _requiredCosts: GbfItemCost[];

  constructor(
    name: LocaleString,
    slug: string,
    bulletType: BulletType,
    requiredCosts: GbfItemCost[],
    option?: GbfItemOption
  ) {
    super(name, slug, option);
    this._bulletType = bulletType;
    this._requiredCosts = [...requiredCosts];
  }

  get bulletType(): BulletType {
    return this._bulletType;
  }

  get requiredCosts(): GbfItemCost[] {
    return this._requiredCosts;
  }
}

export class BulletCost extends GbfItemCost {
  protected _bullet: Bullet;
  protected _requiredItemsCache: GbfItemCost[] | null;

  constructor(bullet: Bullet, quantity: number) {
    super(bullet, quantity);
    this._bullet = bullet;
    this._requiredItemsCache = null;
  }

  calcRequiredCosts(): GbfItemCost[] {
    if(this._requiredItemsCache) {
      return this._requiredItemsCache;
    }

    // 必要素材を計算する。
    // このときアイテムの順序をできる限り入れ替わらないようにしている。

    type costObj = {item: GbfItem, quantity: number};
    const costMap: Map<string, costObj> = new Map<string, costObj>();
    const costList = [];

    // 各アイテムを必要アイテムに分解する。
    // このときバレットはアイテムに分解されるが、アイテムはそのままになる。
    const assemblies = this._bullet.requiredCosts.map((c) => c.calcRequiredCosts()).flat();

    // 分解したアイテムごとに個数をカウントする。
    // すでに存在する場合はそこに加算し、存在しない場合は新たに加える。
    for(const assembly of assemblies) {
      const cost = costMap.get(assembly.item.slug);
      if(cost) {
        cost.quantity += assembly.quantity;
      } else {
        const newCost = {item: assembly.item, quantity: assembly.quantity};
        costMap.set(assembly.item.slug, newCost);
        costList.push(newCost);
      }
    }

    // 計算結果をGbfItemオブジェクトに戻す。
    // 最終的な要求アイテムはバレットの個数分だけ乗算する。
    const calcResult = costList.map((c) => new GbfItemCost(c.item, c.quantity * this._quantity));

    // キャッシュする。
    this._requiredItemsCache = calcResult;

    return calcResult;
  }
}