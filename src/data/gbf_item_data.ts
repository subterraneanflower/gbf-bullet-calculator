import { Bullet, BulletCost, BulletType, GbfItem, GbfItemCost } from './gbf';

// アイテム
const ironCluster = new GbfItem({ja: '鉄鉱石'}, 'iron-cluster');
const blisteringOre = new GbfItem({ja: '赤熱鉱'}, 'blistering-ore');
const untamedFlame = new GbfItem({ja: '原初の砂'}, 'untamed-flame');
const prosperityFlame = new GbfItem({ja: '栄華の炎'}, 'prosperity-flame');
const steelLiquid = new GbfItem({ja: 'リキッドスチール'}, 'steel-liquid');

const fireOrb = new GbfItem({ja: '炎の宝珠'}, 'fire-orb');
const infernoOrb = new GbfItem({ja: '紅蓮の宝珠'}, 'inferno-orb');
const infernalWhorl = new GbfItem({ja: 'ファイア・ジーン'}, 'infernal-whorl');
const waterOrb = new GbfItem({ja: '水の宝珠'}, 'water-orb');
const frostOrb = new GbfItem({ja: '霧氷の宝珠'}, 'frost-orb');
const tidalWhorl = new GbfItem({ja: 'アクア・ジーン'}, 'tidal-whorl');
const windOrb = new GbfItem({ja: '風の宝珠'}, 'wind-orb');
const cycloneOrb = new GbfItem({ja: '烈空の宝珠'}, 'cyclone-orb');
const tempestWhorl = new GbfItem({ja: 'ウィンド・ジーン'}, 'tempest-whorl');
const earthOrb = new GbfItem({ja: '土の宝珠'}, 'earth-orb');
const rumblingOrb = new GbfItem({ja: '大地の宝珠'}, 'rumbling-orb');
const seismicWhorl = new GbfItem({ja: 'アース・ジーン'}, 'seismic-whorl');
const lightOrb = new GbfItem({ja: '光の宝珠'}, 'light-orb');
const shiningOrb = new GbfItem({ja: '煌光の宝珠'}, 'shining-orb');
const radiantWhorl = new GbfItem({ja: 'ホーリー・ジーン'}, 'radiant-whorl');
const darkOrb = new GbfItem({ja: '闇の宝珠'}, 'dark-orb');
const abysmOrb = new GbfItem({ja: '奈落の宝珠'}, 'abysm-orb');
const umbralWhorl = new GbfItem({ja: 'ダーク・ジーン'}, 'umbral-whorl');

const hollowSoul = new GbfItem({ja: '虚ろなる魄'}, 'hollow-soul');
const corrodedCartridge = new GbfItem({ja: '錆びた薬莢'}, 'corroded-cartridge');
const primevalHorn = new GbfItem({ja: 'バハムートの紫電角'}, 'primeval-horn');
const bastionBlock = new GbfItem({ja: '要塞の壁片'}, 'bastion-block');
const sandBrick = new GbfItem({ja: '砂レンガ'}, 'sand-brick');
const coarseAllvium = new GbfItem({ja: '真理の土'}, 'coarse-alluvium');
const silverCentrum = new GbfItem({ja: '銀天の輝き'}, 'silver-centrum');
const explosiveMaterial = new GbfItem({ja: '赤色火薬の原料'}, 'explosive-material');
const fineSandBottle = new GbfItem({ja: '綺麗な砂'}, 'fine-sand-bottle');
const flyingSprout = new GbfItem({ja: '風切四つ葉'}, 'flying-sprout');
const flawedPrism = new GbfItem({ja: '星晶の欠片'}, 'flawed-prism');
const lacrimosa = new GbfItem({ja: 'ラクリモサ'}, 'lacrimosa');
const meteorite = new GbfItem({ja: 'メテオライト'}, 'meteorite');
const graySandstone = new GbfItem({ja: '灰白砂岩'}, 'gray-sandstone');
const rustyEave = new GbfItem({ja: '錆びついた掛瓦'}, 'rusty-eave');
const antiqueCloth = new GbfItem({ja: '古代布'}, 'antique-cloth');
const bloodAmber = new GbfItem({ja: 'オルディネシュタイン'}, 'blood-amber');

const resoluteReactor = new GbfItem({ja: 'プロミネンスリアクター'}, 'resolute-reactor');
const fannedFin = new GbfItem({ja: '海神の扇尾'}, 'fanned-fin');
const genesisBud = new GbfItem({ja: '創樹の花蕾'}, 'genesis-bud');
const greenDragonEye = new GbfItem({ja: '嵐竜の琥珀眼'}, 'green-dragon-eye');
const primalBit = new GbfItem({ja: 'プライマルビット'}, 'primal-bit');
const blackFogSphere = new GbfItem({ja: '黒霧の結晶'}, 'black-fog-sphere');

const brokenTeacup = new GbfItem({ja: '割れたティーカップ'}, 'broken-teacup');
const rawGemstone = new GbfItem({ja: '天然翡翠'}, 'raw-gemstone');
const jumboBeastBone = new GbfItem({ja: '巨獣骨'}, 'jumbo-beast-bone');
const translucentSilk = new GbfItem({ja: '透き通るような絹'}, 'translucent-silk');
const maliceFragment = new GbfItem({ja: 'マリス・フラグメント'}, 'malice-fragment');

const ifritAnima = new GbfItem({ja: 'イフリートのアニマ'}, 'ifrit-anima');
const redTome = new GbfItem({ja: '赤の書'}, 'red-tome');
const hellfireScroll = new GbfItem({ja: '業火の巻'}, 'hellfire-scroll');
const redDragonScale = new GbfItem({ja: '赤竜鱗'}, 'red-dragon-scale');
const trueFireAnima = new GbfItem({ja: '真なる火のアニマ'}, 'true-fire-anima');
const fireQuartz = new GbfItem({ja: '火晶のエレメント'}, 'fire-quartz');

const cocytusAnima = new GbfItem({ja: 'コキュートスのアニマ'}, 'cocytus-anima');
const blueTome = new GbfItem({ja: '青の書'}, 'blue-tome');
const floodScroll = new GbfItem({ja: '濁流の巻'}, 'flood-scroll');
const blueDragonScale = new GbfItem({ja: '青竜鱗'}, 'blue-dragon-scale');
const trueWaterAnima = new GbfItem({ja: '真なる水のアニマ'}, 'true-water-anima');
const waterQuartz = new GbfItem({ja: '水晶のエレメント'}, 'water-quartz');

const vohuManahAnima = new GbfItem({ja: 'ウォフマナフのアニマ'}, 'vohu-manah-anima');
const brownTome = new GbfItem({ja: '橙の書'}, 'brown-tome');
const thunderScroll = new GbfItem({ja: '地裂の巻'}, 'thunder-scroll');
const brownDragonScale = new GbfItem({ja: '地竜鱗'}, 'brown-dragon-scale');
const trueEarthAnima = new GbfItem({ja: '真なる土のアニマ'}, 'true-earth-anima');
const earthQuartz = new GbfItem({ja: '土晶のエレメント'}, 'earth-quartz');

const sagittariusAnima = new GbfItem({ja: 'サジタリウスのアニマ'}, 'sagittarius-anima');
const greenTome = new GbfItem({ja: '緑の書'}, 'green-tome');
const galeScroll = new GbfItem({ja: '疾風の巻'}, 'gale-scroll');
const greenDragonScale = new GbfItem({ja: '風竜鱗'}, 'green-dragon-scale');
const trueWindAnima = new GbfItem({ja: '真なる風のアニマ'}, 'true-wind-anima');
const windQuartz = new GbfItem({ja: '風晶のエレメント'}, 'wind-quartz');

const corowAnima = new GbfItem({ja: 'コロゥのアニマ'}, 'corow-anima');
const whiteTome = new GbfItem({ja: '白の書'}, 'white-tome');
const skylightScroll = new GbfItem({ja: '天光の巻'}, 'skylight-scroll');
const whiteDragonScale = new GbfItem({ja: '白竜鱗'}, 'white-dragon-scale');
const trueLightAnima = new GbfItem({ja: '真なる光のアニマ'}, 'true-light-anima');
const lightQuartz = new GbfItem({ja: '光晶のエレメント'}, 'light-quartz');

const diabloAnima = new GbfItem({ja: 'ディアボロスのアニマ'}, 'diablo-anima');
const blackTome = new GbfItem({ja: '黒の書'}, 'black-tome');
const chasmScroll = new GbfItem({ja: '深淵の巻'}, 'chasm-scroll');
const blackDragonScale = new GbfItem({ja: '黒竜鱗'}, 'black-dragon-scale');
const trueDarkAnima = new GbfItem({ja: '真なる闇のアニマ'}, 'true-dark-anima');
const darkQuartz = new GbfItem({ja: '闇晶のエレメント'}, 'dark-quartz');

const fireGrimoire = new GbfItem({ja: '灼熱の書'}, 'fire-grimoire');
const waterGrimoire = new GbfItem({ja: '水分の書'}, 'water-grimoire');
const earthGrimoire = new GbfItem({ja: '巨人の書'}, 'earth-grimoire');
const windGrimoire = new GbfItem({ja: '風凪の書'}, 'wind-grimoire');

const fireUrn = new GbfItem({ja: '火のプシュケー'}, 'fire-urn');
const waterUrn = new GbfItem({ja: '水のプシュケー'}, 'water-urn');
const earthUrn = new GbfItem({ja: '土のプシュケー'}, 'earth-urn');
const windUrn = new GbfItem({ja: '風のプシュケー'}, 'wind-urn');
const lightUrn = new GbfItem({ja: '光のプシュケー'}, 'light-urn');
const darkUrn = new GbfItem({ja: '闇のプシュケー'}, 'dark-urn');

const rubeusCentrum = new GbfItem({ja: '赤星の輝き'}, 'rubeus-centrum');
const indicusCentrum = new GbfItem({ja: '青星の輝き'}, 'indicus-centrum');
const luteusCentrum = new GbfItem({ja: '黄星の輝き'}, 'luteus-centrum');
const galbinusCentrum = new GbfItem({ja: '緑星の輝き'}, 'galbinus-centrum');
const niveusCentrum = new GbfItem({ja: '白星の輝き'}, 'niveus-centrum');
const aterCentrum = new GbfItem({ja: '黒星の輝き'}, 'ater-centrum');



// パラベラム弾
const ironBullet = new Bullet(
  {ja: 'アイアンバレット'},
  'iron-bullet',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 2),
    new GbfItemCost(blisteringOre, 2)
  ],
  {
    cssColorString: 'rgb(100, 100, 100)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet2 = new Bullet(
  {ja: 'アイアンバレットII'},
  'iron-bullet-2',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 5),
    new GbfItemCost(blisteringOre, 5),
    new BulletCost(ironBullet, 1)
  ],
  {
    cssColorString: 'rgb(80, 80, 80)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet3 = new Bullet(
  {ja: 'アイアンバレットIII'},
  'iron-bullet-3',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 12),
    new GbfItemCost(blisteringOre, 8),
    new BulletCost(ironBullet2, 2),
    new GbfItemCost(untamedFlame, 5)
  ],
  {
    cssColorString: 'rgb(60, 60, 60)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet4 = new Bullet(
  {ja: 'アイアンバレットIV'},
  'iron-bullet-4',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 25),
    new GbfItemCost(blisteringOre, 20),
    new BulletCost(ironBullet3, 5),
    new GbfItemCost(prosperityFlame, 20)
  ],
  {
    cssColorString: 'rgb(40, 40, 40)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const ironBullet5 = new Bullet(
  {ja: 'アイアンバレットV'},
  'iron-bullet-5',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 40),
    new GbfItemCost(blisteringOre, 30),
    new BulletCost(ironBullet4, 3),
    new BulletCost(ironBullet3, 2)
  ],
  {
    cssColorString: 'rgb(20, 20, 20)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet = new Bullet(
  {ja: 'ライトバレット'},
  'rapid-bullet',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 2),
    new GbfItemCost(prosperityFlame, 2),
    new GbfItemCost(steelLiquid, 3)
  ],
  {
    cssColorString: 'rgb(204,203,15)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet2 = new Bullet(
  {ja: 'ライトバレットII'},
  'rapid-bullet-2',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 4),
    new GbfItemCost(prosperityFlame, 4),
    new GbfItemCost(steelLiquid, 7),
    new BulletCost(rapidBullet, 1)
  ],
  {
    cssColorString: 'rgb(190,189,14)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet3 = new Bullet(
  {ja: 'ライトバレットIII'},
  'rapid-bullet-3',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 20),
    new GbfItemCost(prosperityFlame, 20),
    new GbfItemCost(steelLiquid, 20),
    new BulletCost(rapidBullet2, 2)
  ],
  {
    cssColorString: 'rgb(176,175,13)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const rapidBullet4 = new Bullet(
  {ja: 'ライトバレットIV'},
  'rapid-bullet-4',
  BulletType.PARABELLUM,
  [
    new GbfItemCost(ironCluster, 30),
    new GbfItemCost(prosperityFlame, 30),
    new GbfItemCost(steelLiquid, 25),
    new BulletCost(rapidBullet3, 2)
  ],
  {
    cssColorString: 'rgb(161,160,12)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const flameBullet = new Bullet(
  {ja: 'フレイムバレット'},
  'flame-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(fireOrb, 10),
    new GbfItemCost(infernalWhorl, 7),
    new GbfItemCost(prosperityFlame, 5)
  ],
  {
    cssColorString: 'rgb(161,74,56)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const poisonBullet = new Bullet(
  {ja: 'ポイズンバレット'},
  'poison-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(waterOrb, 10),
    new GbfItemCost(tidalWhorl, 7),
    new GbfItemCost(prosperityFlame, 5)
  ],
  {
    cssColorString: 'rgb(117,59,161)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const sleepBullet = new Bullet(
  {ja: 'スリープバレット'},
  'sleep-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(windOrb, 10),
    new GbfItemCost(tempestWhorl, 7),
    new GbfItemCost(prosperityFlame, 5)
  ],
  {
    cssColorString: 'rgb(97,134,161)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const shieldBullet = new Bullet(
  {ja: 'バリアシード'},
  'shield-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(rapidBullet2, 5),
    new GbfItemCost(radiantWhorl, 20),
    new GbfItemCost(hollowSoul, 10),
    new GbfItemCost(prosperityFlame, 10)
  ],
  {
    cssColorString: 'rgb(204,176,26)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const charmBullet = new Bullet(
  {ja: 'チャームバレット'},
  'charm-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet, 5),
    new GbfItemCost(earthOrb, 10),
    new GbfItemCost(seismicWhorl, 7),
    new GbfItemCost(corrodedCartridge, 2)
  ],
  {
    cssColorString: 'rgb(207,80,155)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const paralyzeBullet = new Bullet(
  {ja: 'パラライズバレット'},
  'paralyze-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet5, 1),
    new BulletCost(rapidBullet4, 1),
    new GbfItemCost(primevalHorn, 2),
    new GbfItemCost(bastionBlock, 5)
  ],
  {
    cssColorString: 'rgb(100,161,160)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

const healingBullet = new Bullet(
  {ja: 'ヒールバレット'},
  'healing-bullet',
  BulletType.PARABELLUM,
  [
    new BulletCost(ironBullet5, 1),
    new BulletCost(rapidBullet4, 1),
    new GbfItemCost(silverCentrum, 2),
    new GbfItemCost(bastionBlock, 5)
  ],
  {
    cssColorString: 'rgb(78,161,94)',
    iconFileName: 'parabellum-bullet.svg'
  }
);

// ライフル弾
const fullMetalJacket = new Bullet(
  {ja: 'フルメタルジャケット'},
  'full-metal-jacket',
  BulletType.RIFLE,
  [
    new GbfItemCost(ironCluster, 3),
    new GbfItemCost(sandBrick, 3),
    new GbfItemCost(coarseAllvium, 7),
    new GbfItemCost(rumblingOrb, 2)
  ],
  {
    cssColorString: 'rgb(100, 100, 100)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket2 = new Bullet(
  {ja: 'フルメタルジャケットII'},
  'full-metal-jacket-2',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket, 1),
    new GbfItemCost(ironCluster, 7),
    new GbfItemCost(coarseAllvium, 10),
    new GbfItemCost(rumblingOrb, 5)
  ],
  {
    cssColorString: 'rgb(80, 80, 80)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket3 = new Bullet(
  {ja: 'フルメタルジャケットIII'},
  'full-metal-jacket-3',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket2, 2),
    new GbfItemCost(ironCluster, 12),
    new GbfItemCost(steelLiquid, 10),
    new GbfItemCost(untamedFlame, 12)
  ],
  {
    cssColorString: 'rgb(60, 60, 60)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket4 = new Bullet(
  {ja: 'フルメタルジャケットIV'},
  'full-metal-jacket-4',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket3, 5),
    new GbfItemCost(ironCluster, 25),
    new GbfItemCost(steelLiquid, 20),
    new GbfItemCost(sandBrick, 25)
  ],
  {
    cssColorString: 'rgb(40, 40, 40)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const fullMetalJacket5 = new Bullet(
  {ja: 'フルメタルジャケットV'},
  'full-metal-jacket-5',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket4, 5),
    new GbfItemCost(ironCluster, 30),
    new GbfItemCost(steelLiquid, 25),
    new GbfItemCost(sandBrick, 30)
  ],
  {
    cssColorString: 'rgb(20, 20, 20)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const exploder = new Bullet(
  {ja: 'エクスプローダー'},
  'exploder',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket, 3),
    new GbfItemCost(explosiveMaterial, 4),
    new GbfItemCost(fineSandBottle, 7),
    new GbfItemCost(blisteringOre, 4)
  ],
  {
    cssColorString: 'rgb(188,177,32)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const exploder2 = new Bullet(
  {ja: 'エクスプローダーII'},
  'exploder-2',
  BulletType.RIFLE,
  [
    new BulletCost(exploder, 1),
    new GbfItemCost(explosiveMaterial, 8),
    new GbfItemCost(fineSandBottle, 10),
    new GbfItemCost(blisteringOre, 8)
  ],
  {
    cssColorString: 'rgb(171,161,29)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const exploder3 = new Bullet(
  {ja: 'エクスプローダーIII'},
  'exploder-3',
  BulletType.RIFLE,
  [
    new BulletCost(exploder2, 2),
    new GbfItemCost(explosiveMaterial, 8),
    new GbfItemCost(fineSandBottle, 15),
    new GbfItemCost(blisteringOre, 15)
  ],
  {
    cssColorString: 'rgb(156,147,26)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const armorPiercing = new Bullet(
  {ja: 'アーマーピアシング'},
  'armor-piercing',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket2, 3),
    new GbfItemCost(ironCluster, 5),
    new GbfItemCost(coarseAllvium, 5),
    new GbfItemCost(flyingSprout, 10)
  ],
  {
    cssColorString: 'rgb(200,78,72)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const armorPiercing2 = new Bullet(
  {ja: 'アーマーピアシングII'},
  'armor-piercing-2',
  BulletType.RIFLE,
  [
    new BulletCost(armorPiercing, 1),
    new GbfItemCost(ironCluster, 8),
    new GbfItemCost(coarseAllvium, 8),
    new GbfItemCost(flyingSprout, 14)
  ],
  {
    cssColorString: 'rgb(184,71,66)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const armorPiercing3 = new Bullet(
  {ja: 'アーマーピアシングIII'},
  'armor-piercing-3',
  BulletType.RIFLE,
  [
    new BulletCost(armorPiercing2, 2),
    new GbfItemCost(ironCluster, 18),
    new GbfItemCost(coarseAllvium, 24),
    new GbfItemCost(flyingSprout, 20)
  ],
  {
    cssColorString: 'rgb(165,64,59)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const silverBullet = new Bullet(
  {ja: 'シルバーバレット'},
  'silver-bullet',
  BulletType.RIFLE,
  [
    new BulletCost(fullMetalJacket2, 3),
    new GbfItemCost(flawedPrism, 8),
    new GbfItemCost(seismicWhorl, 20),
    new GbfItemCost(lacrimosa, 5)
  ],
  {
    cssColorString: 'rgb(131,131,131)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const silverBullet2 = new Bullet(
  {ja: 'シルバーバレットII'},
  'silver-bullet-2',
  BulletType.RIFLE,
  [
    new BulletCost(silverBullet, 7),
    new GbfItemCost(flawedPrism, 20),
    new GbfItemCost(seismicWhorl, 30),
    new GbfItemCost(lacrimosa, 10)
  ],
  {
    cssColorString: 'rgb(120,120,120)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const silverBullet3 = new Bullet(
  {ja: 'シルバーバレットIII'},
  'silver-bullet-3',
  BulletType.RIFLE,
  [
    new BulletCost(silverBullet2, 10),
    new GbfItemCost(flawedPrism, 30),
    new GbfItemCost(seismicWhorl, 40),
    new GbfItemCost(lacrimosa, 20)
  ],
  {
    cssColorString: 'rgb(98,98,98)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const goldBullet = new Bullet(
  {ja: 'ゴールドバレット'},
  'gold-bullet',
  BulletType.RIFLE,
  [
    new BulletCost(silverBullet, 10),
    new BulletCost(fullMetalJacket5, 2),
    new GbfItemCost(meteorite, 1)
  ],
  {
    cssColorString: 'rgb(171,160,46)',
    iconFileName: 'rifle-bullet.svg'
  }
);

const goldBullet2 = new Bullet(
  {ja: 'ゴールドバレットII'},
  'gold-bullet-2',
  BulletType.RIFLE,
  [
    new BulletCost(goldBullet, 2),
    new GbfItemCost(graySandstone, 5),
    new GbfItemCost(meteorite, 5),
    new GbfItemCost(rustyEave, 5)
  ],
  {
    cssColorString: 'rgb(155,145,42)',
    iconFileName: 'rifle-bullet.svg'
  }
);

// カートリッジ
const shotshell = new Bullet(
  {ja: 'シェルバレット'},
  'shotshell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 4),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(blisteringOre, 5)
  ],
  {
    cssColorString: 'rgb(190,68,50)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell2 = new Bullet(
  {ja: 'シェルバレットII'},
  'shotshell-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 7),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(blisteringOre, 7),
    new BulletCost(shotshell, 1)
  ],
  {
    cssColorString: 'rgb(177,63,47)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell3 = new Bullet(
  {ja: 'シェルバレットIII'},
  'shotshell-3',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 10),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(blisteringOre, 10),
    new BulletCost(shotshell2, 2)
  ],
  {
    cssColorString: 'rgb(168,60,45)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell4 = new Bullet(
  {ja: 'シェルバレットIV'},
  'shotshell-4',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 20),
    new GbfItemCost(explosiveMaterial, 30),
    new GbfItemCost(blisteringOre, 20),
    new BulletCost(shotshell3, 5)
  ],
  {
    cssColorString: 'rgb(152,54,41)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const shotshell5 = new Bullet(
  {ja: 'シェルバレットV'},
  'shotshell-5',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 30),
    new GbfItemCost(explosiveMaterial, 40),
    new GbfItemCost(blisteringOre, 30),
    new BulletCost(shotshell4, 5)
  ],
  {
    cssColorString: 'rgb(145,50,39)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const strikeShell = new Bullet(
  {ja: 'アサルトシェル'},
  'strike-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 7),
    new GbfItemCost(explosiveMaterial, 15),
    new GbfItemCost(blisteringOre, 5)
  ],
  {
    cssColorString: 'rgb(79,176,68)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const strikeShell2 = new Bullet(
  {ja: 'アサルトシェルII'},
  'strike-shell-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(prosperityFlame, 10),
    new GbfItemCost(explosiveMaterial, 20),
    new GbfItemCost(blisteringOre, 16),
    new BulletCost(strikeShell, 1)
  ],
  {
    cssColorString: 'rgb(71,159,61)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const fireCylinder = new Bullet(
  {ja: 'ヒートシリンダー'},
  'fire-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(infernalWhorl, 30)
  ],
  {
    cssColorString: 'rgb(204,50,44)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const fireCylinder2 = new Bullet(
  {ja: 'ヒートシリンダーII'},
  'fire-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(resoluteReactor, 5),
    new BulletCost(fireCylinder, 1)
  ],
  {
    cssColorString: 'rgb(178,44,38)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const waterCylinder = new Bullet(
  {ja: 'コールドシリンダー'},
  'water-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(tidalWhorl, 30)
  ],
  {
    cssColorString: 'rgb(75,131,204)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const waterCylinder2 = new Bullet(
  {ja: 'コールドシリンダーII'},
  'water-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(fannedFin, 5),
    new BulletCost(waterCylinder, 1)
  ],
  {
    cssColorString: 'rgb(62,108,168)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const earthCylinder = new Bullet(
  {ja: 'アースシリンダー'},
  'earth-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(seismicWhorl, 30)
  ],
  {
    cssColorString: 'rgb(103,66,30)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const earthCylinder2 = new Bullet(
  {ja: 'アースシリンダーII'},
  'earth-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(genesisBud, 5),
    new BulletCost(earthCylinder, 1)
  ],
  {
    cssColorString: 'rgb(84,54,24)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const windCylinder = new Bullet(
  {ja: 'ゲイルシリンダー'},
  'wind-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(tempestWhorl, 30)
  ],
  {
    cssColorString: 'rgb(62,155,54)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const windCylinder2 = new Bullet(
  {ja: 'ゲイルシリンダーII'},
  'wind-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(greenDragonEye, 5),
    new BulletCost(windCylinder, 1)
  ],
  {
    cssColorString: 'rgb(49,122,43)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const lightCylinder = new Bullet(
  {ja: 'サンダーシリンダー'},
  'light-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(radiantWhorl, 30)
  ],
  {
    cssColorString: 'rgb(176,177,55)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const lightCylinder2 = new Bullet(
  {ja: 'サンダーシリンダーII'},
  'light-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(primalBit, 5),
    new BulletCost(lightCylinder, 1)
  ],
  {
    cssColorString: 'rgb(155,156,48)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const darkCylinder = new Bullet(
  {ja: 'ダークシリンダー'},
  'dark-cylinder',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 2),
    new GbfItemCost(explosiveMaterial, 5),
    new GbfItemCost(umbralWhorl, 30)
  ],
  {
    cssColorString: 'rgb(84,47,131)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const darkCylinder2 = new Bullet(
  {ja: 'ダークシリンダーII'},
  'dark-cylinder-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(antiqueCloth, 5),
    new GbfItemCost(explosiveMaterial, 10),
    new GbfItemCost(blackFogSphere, 5),
    new BulletCost(darkCylinder, 1)
  ],
  {
    cssColorString: 'rgb(65,36,101)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const guardBreaker = new Bullet(
  {ja: 'アーマーブレイカー'},
  'guard-breaker',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 10),
    new GbfItemCost(prosperityFlame, 20),
    new BulletCost(armorPiercing2, 5),
    new BulletCost(armorPiercing, 5)
  ],
  {
    cssColorString: 'rgb(204,136,40)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const guardBreaker2 = new Bullet(
  {ja: 'アーマーブレイカーII'},
  'guard-breaker-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 24),
    new GbfItemCost(explosiveMaterial, 20),
    new BulletCost(guardBreaker, 1)
  ],
  {
    cssColorString: 'rgb(171,114,33)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const slugShot = new Bullet(
  {ja: 'スラッグショット'},
  'slug-shot',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 20),
    new GbfItemCost(prosperityFlame, 20),
    new BulletCost(fullMetalJacket3, 5),
    new BulletCost(ironBullet3, 5)
  ],
  {
    cssColorString: 'rgb(78,133,204)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const slugShot2 = new Bullet(
  {ja: 'スラッグショットII'},
  'slug-shot-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 70),
    new GbfItemCost(explosiveMaterial, 20),
    new BulletCost(slugShot, 1)
  ],
  {
    cssColorString: 'rgb(66,112,172)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const stickyShell = new Bullet(
  {ja: 'スティッキーシェル'},
  'sticky-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 10),
    new GbfItemCost(corrodedCartridge, 8),
    new BulletCost(armorPiercing2, 5),
    new BulletCost(armorPiercing, 5)
  ],
  {
    cssColorString: 'rgb(193,204,48)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const stickyShell2 = new Bullet(
  {ja: 'スティッキーシェルII'},
  'sticky-shell-2',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(steelLiquid, 20),
    new GbfItemCost(corrodedCartridge, 15),
    new BulletCost(stickyShell, 10)
  ],
  {
    cssColorString: 'rgb(171,181,43)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const chaiserShell = new Bullet(
  {ja: 'チェイスシェル'},
  'chaiser-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(brokenTeacup, 10),
    new GbfItemCost(rawGemstone, 10),
    new GbfItemCost(maliceFragment, 5),
    new BulletCost(shotshell5, 2)
  ],
  {
    cssColorString: 'rgb(205,126,35)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

const enhancingShell = new Bullet(
  {ja: 'エンハンスシェル'},
  'enhancing-shell',
  BulletType.CARTRIDGE,
  [
    new GbfItemCost(jumboBeastBone, 10),
    new GbfItemCost(translucentSilk, 10),
    new GbfItemCost(maliceFragment, 5),
    new BulletCost(shotshell5, 2)
  ],
  {
    cssColorString: 'rgb(159,73,205)',
    iconFileName: 'cartridge-bullet.svg'
  }
);

// エーテリアル弾
const ifritPoint = new Bullet(
  {ja: 'イフリートポイント'},
  'ifrit-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(fireOrb, 20),
    new GbfItemCost(infernoOrb, 10),
    new GbfItemCost(infernalWhorl, 20),
    new GbfItemCost(ifritAnima, 20)
  ],
  {
    cssColorString: 'rgb(204,73,54)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const ifritPoint2 = new Bullet(
  {ja: 'イフリートポイントII'},
  'ifrit-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(redTome, 24),
    new GbfItemCost(hellfireScroll, 12),
    new GbfItemCost(redDragonScale, 16),
    new BulletCost(ifritPoint, 2)
  ],
  {
    cssColorString: 'rgb(191,68,51)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const ifritPoint3 = new Bullet(
  {ja: 'イフリートポイントIII'},
  'ifrit-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueFireAnima, 20),
    new GbfItemCost(fireQuartz, 10),
    new GbfItemCost(redDragonScale, 20),
    new BulletCost(ifritPoint2, 5)
  ],
  {
    cssColorString: 'rgb(178,63,47)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const cocytusPoint = new Bullet(
  {ja: 'コキュートスポイント'},
  'cocytus-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(waterOrb, 20),
    new GbfItemCost(frostOrb, 10),
    new GbfItemCost(tidalWhorl, 20),
    new GbfItemCost(cocytusAnima, 20)
  ],
  {
    cssColorString: 'rgb(56,76,204)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const cocytusPoint2 = new Bullet(
  {ja: 'コキュートスポイントII'},
  'cocytus-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(blueTome, 24),
    new GbfItemCost(floodScroll, 12),
    new GbfItemCost(blueDragonScale, 16),
    new BulletCost(cocytusPoint, 2)
  ],
  {
    cssColorString: 'rgb(53,72,192)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const cocytusPoint3 = new Bullet(
  {ja: 'コキュートスポイントIII'},
  'cocytus-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueWaterAnima, 20),
    new GbfItemCost(waterQuartz, 10),
    new GbfItemCost(blueDragonScale, 20),
    new BulletCost(cocytusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(49,66,177)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const vohuManahPoint = new Bullet(
  {ja: 'ウォフマナフポイント'},
  'vohu-manah-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(earthOrb, 20),
    new GbfItemCost(rumblingOrb, 10),
    new GbfItemCost(seismicWhorl, 20),
    new GbfItemCost(vohuManahAnima, 20)
  ],
  {
    cssColorString: 'rgb(161,107,65)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const vohuManahPoint2 = new Bullet(
  {ja: 'ウォフマナフポイントII'},
  'vohu-manah-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(brownTome, 24),
    new GbfItemCost(thunderScroll, 12),
    new GbfItemCost(brownDragonScale, 16),
    new BulletCost(vohuManahPoint, 2)
  ],
  {
    cssColorString: 'rgb(143,95,58)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const vohuManahPoint3 = new Bullet(
  {ja: 'ウォフマナフポイントIII'},
  'vohu-manah-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueEarthAnima, 20),
    new GbfItemCost(earthQuartz, 10),
    new GbfItemCost(brownDragonScale, 20),
    new BulletCost(vohuManahPoint2, 5)
  ],
  {
    cssColorString: 'rgb(123,82,50)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const sagittariusPoint = new Bullet(
  {ja: 'サジタリウスポイント'},
  'sagittarius-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(windOrb, 20),
    new GbfItemCost(cycloneOrb, 10),
    new GbfItemCost(tempestWhorl, 20),
    new GbfItemCost(sagittariusAnima, 20)
  ],
  {
    cssColorString: 'rgb(62,161,69)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const sagittariusPoint2 = new Bullet(
  {ja: 'サジタリウスポイントII'},
  'sagittarius-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(greenTome, 24),
    new GbfItemCost(galeScroll, 12),
    new GbfItemCost(greenDragonScale, 16),
    new BulletCost(sagittariusPoint, 2)
  ],
  {
    cssColorString: 'rgb(56,145,62)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const sagittariusPoint3 = new Bullet(
  {ja: 'サジタリウスポイントIII'},
  'sagittarius-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueWindAnima, 20),
    new GbfItemCost(windQuartz, 10),
    new GbfItemCost(greenDragonScale, 20),
    new BulletCost(sagittariusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(50,129,55)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const corowPoint = new Bullet(
  {ja: 'コロゥポイント'},
  'corow-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(lightOrb, 20),
    new GbfItemCost(shiningOrb, 10),
    new GbfItemCost(radiantWhorl, 20),
    new GbfItemCost(corowAnima, 20)
  ],
  {
    cssColorString: 'rgb(191,182,38)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const corowPoint2 = new Bullet(
  {ja: 'コロゥポイントII'},
  'corow-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(whiteTome, 24),
    new GbfItemCost(skylightScroll, 12),
    new GbfItemCost(whiteDragonScale, 16),
    new BulletCost(corowPoint, 2)
  ],
  {
    cssColorString: 'rgb(174,166,35)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const corowPoint3 = new Bullet(
  {ja: 'コロゥポイントIII'},
  'corow-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueLightAnima, 20),
    new GbfItemCost(lightQuartz, 10),
    new GbfItemCost(whiteDragonScale, 20),
    new BulletCost(corowPoint2, 5)
  ],
  {
    cssColorString: 'rgb(149,142,30)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const diabloPoint = new Bullet(
  {ja: 'ディアボロスポイント'},
  'diablo-point',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(darkOrb, 20),
    new GbfItemCost(abysmOrb, 10),
    new GbfItemCost(umbralWhorl, 20),
    new GbfItemCost(diabloAnima, 20)
  ],
  {
    cssColorString: 'rgb(75,27,145)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const diabloPoint2 = new Bullet(
  {ja: 'ディアボロスポイントII'},
  'diablo-point-2',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(blackTome, 24),
    new GbfItemCost(chasmScroll, 12),
    new GbfItemCost(blackDragonScale, 16),
    new BulletCost(diabloPoint, 2)
  ],
  {
    cssColorString: 'rgb(67,24,130)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const diabloPoint3 = new Bullet(
  {ja: 'ディアボロスポイントIII'},
  'diablo-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(trueDarkAnima, 20),
    new GbfItemCost(darkQuartz, 10),
    new GbfItemCost(blackDragonScale, 20),
    new BulletCost(diabloPoint2, 5)
  ],
  {
    cssColorString: 'rgb(57,21,111)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const agniPoint = new Bullet(
  {ja: 'アグニスポイント'},
  'agni-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(ifritPoint2, 3),
    new GbfItemCost(fireGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(204,73,54)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const agniPoint2 = new Bullet(
  {ja: 'アグニスポイントII'},
  'agni-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(agniPoint, 1),
    new GbfItemCost(fireGrimoire, 7),
    new GbfItemCost(fireQuartz, 30),
    new GbfItemCost(lightQuartz, 20)
  ],
  {
    cssColorString: 'rgb(191,68,51)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const agniPoint3 = new Bullet(
  {ja: 'アグニスポイントIII'},
  'agni-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(rubeusCentrum, 20),
    new GbfItemCost(fireQuartz, 20),
    new GbfItemCost(fireUrn, 3),
    new BulletCost(agniPoint2, 5)
  ],
  {
    cssColorString: 'rgb(178,63,47)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const neptunePoint = new Bullet(
  {ja: 'ネプチューンポイント'},
  'neptune-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(cocytusPoint2, 3),
    new GbfItemCost(waterGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(56,76,204)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const neptunePoint2 = new Bullet(
  {ja: 'ネプチューンポイントII'},
  'neptune-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(neptunePoint, 1),
    new GbfItemCost(waterGrimoire, 7),
    new GbfItemCost(waterQuartz, 30),
    new GbfItemCost(darkQuartz, 20)
  ],
  {
    cssColorString: 'rgb(53,72,192)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const neptunePoint3 = new Bullet(
  {ja: 'ネプチューンポイントIII'},
  'neptune-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(indicusCentrum, 20),
    new GbfItemCost(waterQuartz, 20),
    new GbfItemCost(waterUrn, 3),
    new BulletCost(neptunePoint2, 5)
  ],
  {
    cssColorString: 'rgb(49,66,177)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const titanPoint = new Bullet(
  {ja: 'ティターンポイント'},
  'titan-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(vohuManahPoint2, 3),
    new GbfItemCost(earthGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(161,107,65)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const titanPoint2 = new Bullet(
  {ja: 'ティターンポイントII'},
  'titan-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(titanPoint, 1),
    new GbfItemCost(earthGrimoire, 7),
    new GbfItemCost(earthQuartz, 30),
    new GbfItemCost(darkQuartz, 20)
  ],
  {
    cssColorString: 'rgb(143,95,58)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const titanPoint3 = new Bullet(
  {ja: 'ティターンポイントIII'},
  'titan-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(luteusCentrum, 20),
    new GbfItemCost(earthQuartz, 20),
    new GbfItemCost(earthUrn, 3),
    new BulletCost(titanPoint2, 5)
  ],
  {
    cssColorString: 'rgb(123,82,50)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zephyrusPoint = new Bullet(
  {ja: 'ゼピュロスポイント'},
  'zephyrus-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(sagittariusPoint2, 3),
    new GbfItemCost(windGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(62,161,69)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zephyrusPoint2 = new Bullet(
  {ja: 'ゼピュロスポイントII'},
  'zephyrus-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(zephyrusPoint, 1),
    new GbfItemCost(windGrimoire, 7),
    new GbfItemCost(windQuartz, 30),
    new GbfItemCost(lightQuartz, 20)
  ],
  {
    cssColorString: 'rgb(56,145,62)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zephyrusPoint3 = new Bullet(
  {ja: 'ゼピュロスポイントIII'},
  'zephyrus-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(galbinusCentrum, 20),
    new GbfItemCost(windQuartz, 20),
    new GbfItemCost(windUrn, 3),
    new BulletCost(zephyrusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(50,129,55)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zeusPoint = new Bullet(
  {ja: 'ゼウスポイント'},
  'zeus-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(corowPoint2, 3),
    new GbfItemCost(fireGrimoire, 5),
    new GbfItemCost(windGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(191,182,38)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zeusPoint2 = new Bullet(
  {ja: 'ゼウスポイントII'},
  'zeus-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(zeusPoint, 1),
    new GbfItemCost(fireGrimoire, 7),
    new GbfItemCost(windGrimoire, 7),
    new GbfItemCost(lightQuartz, 20)
  ],
  {
    cssColorString: 'rgb(174,166,35)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const zeusPoint3 = new Bullet(
  {ja: 'ゼウスポイントIII'},
  'zeus-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(niveusCentrum, 20),
    new GbfItemCost(lightQuartz, 20),
    new GbfItemCost(lightUrn, 3),
    new BulletCost(zeusPoint2, 5)
  ],
  {
    cssColorString: 'rgb(149,142,30)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const hadesPoint = new Bullet(
  {ja: 'ハデスポイント'},
  'hades-point',
  BulletType.AETHERIAL,
  [
    new BulletCost(diabloPoint2, 3),
    new GbfItemCost(waterGrimoire, 5),
    new GbfItemCost(earthGrimoire, 5),
    new GbfItemCost(bloodAmber, 7)
  ],
  {
    cssColorString: 'rgb(75,27,145)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const hadesPoint2 = new Bullet(
  {ja: 'ハデスポイントII'},
  'hades-point-2',
  BulletType.AETHERIAL,
  [
    new BulletCost(hadesPoint, 1),
    new GbfItemCost(waterGrimoire, 7),
    new GbfItemCost(earthGrimoire, 7),
    new GbfItemCost(darkQuartz, 20)
  ],
  {
    cssColorString: 'rgb(67,24,130)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

const hadesPoint3 = new Bullet(
  {ja: 'ハデスポイントIII'},
  'hades-point-3',
  BulletType.AETHERIAL,
  [
    new GbfItemCost(aterCentrum, 20),
    new GbfItemCost(darkQuartz, 20),
    new GbfItemCost(darkUrn, 3),
    new BulletCost(hadesPoint2, 5)
  ],
  {
    cssColorString: 'rgb(57,21,111)',
    iconFileName: 'aetherial-bullet.svg'
  }
);

// バレットリスト
const parabellum: Bullet[] = [
  ironBullet,
  ironBullet2,
  ironBullet3,
  ironBullet4,
  ironBullet5,
  rapidBullet,
  rapidBullet2,
  rapidBullet3,
  rapidBullet4,
  flameBullet,
  poisonBullet,
  sleepBullet,
  shieldBullet,
  charmBullet,
  paralyzeBullet,
  healingBullet
];

const rifle: Bullet[] = [
  fullMetalJacket,
  fullMetalJacket2,
  fullMetalJacket3,
  fullMetalJacket4,
  fullMetalJacket5,
  exploder,
  exploder2,
  exploder3,
  armorPiercing,
  armorPiercing2,
  armorPiercing3,
  silverBullet,
  silverBullet2,
  silverBullet3,
  goldBullet,
  goldBullet2
];

const cartridge: Bullet[] = [
  shotshell,
  shotshell2,
  shotshell3,
  shotshell4,
  shotshell5,
  strikeShell,
  strikeShell2,
  fireCylinder,
  fireCylinder2,
  waterCylinder,
  waterCylinder2,
  earthCylinder,
  earthCylinder2,
  windCylinder,
  windCylinder2,
  lightCylinder,
  lightCylinder2,
  darkCylinder,
  darkCylinder2,
  guardBreaker,
  guardBreaker2,
  slugShot,
  slugShot2,
  stickyShell,
  stickyShell2,
  chaiserShell,
  enhancingShell
];

const aetherial: Bullet[] = [
  ifritPoint,
  ifritPoint2,
  ifritPoint3,
  cocytusPoint,
  cocytusPoint2,
  cocytusPoint3,
  vohuManahPoint,
  vohuManahPoint2,
  vohuManahPoint3,
  sagittariusPoint,
  sagittariusPoint2,
  sagittariusPoint3,
  corowPoint,
  corowPoint2,
  corowPoint3,
  diabloPoint,
  diabloPoint2,
  diabloPoint3,
  agniPoint,
  agniPoint2,
  agniPoint3,
  neptunePoint,
  neptunePoint2,
  neptunePoint3,
  titanPoint,
  titanPoint2,
  titanPoint3,
  zephyrusPoint,
  zephyrusPoint2,
  zephyrusPoint3,
  zeusPoint,
  zeusPoint2,
  zeusPoint3,
  hadesPoint,
  hadesPoint2,
  hadesPoint3
];

export const bullet: {[k: string]: Bullet[]} = {
  parabellum,
  rifle,
  cartridge,
  aetherial
};

// バレットマップ
// slug -> bullet
const slugToBullet: {[k: string]: Bullet} = {};
for(const bullet of [...parabellum, ...rifle, ...cartridge, ...aetherial]) {
  slugToBullet[bullet.slug] = bullet;
}

export { slugToBullet };