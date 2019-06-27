import * as React from 'react';
import { useCallback, useContext } from 'react';
import { BulletCalculatorContext } from '../context/bulletcalc_context';
import { totalBulletCosts } from '../data/bulletcalc';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';
import { withRouter } from 'react-router';
import { ProgressBar } from '../components/ProgressBar';
import { useMemo } from 'react';

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  marginBottom: '1em'
};

const bulletCardStyle: React.CSSProperties = {
  ...cardStyle,
  backgroundColor: 'rgb(38,171,82)'
};

const bulletInventoryCardStyle: React.CSSProperties = {
  ...cardStyle,
  backgroundColor: 'rgb(218,169,28)'
};

const progressCardStyle: React.CSSProperties = {
  ...cardStyle,
  backgroundColor: 'rgb(222,88,125)'
};

const costCardStyle: React.CSSProperties = {
  ...cardStyle,
  backgroundColor: 'rgb(88,109,197)'
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.2em',
  fontWeight: 'normal',
  textAlign: 'center',
  marginBottom: '1em'
};

const percentageStyle: React.CSSProperties = {
  fontSize: '3em',
  textAlign: 'center'
};

const progressBarStyle: React.CSSProperties = {
  width: '100%'
};

const costListStyle: React.CSSProperties = {
  fontSize: '0.7em',
  width: '20em',
  maxWidth: '90%'
};

const costListItemContainerStyle: React.CSSProperties = {
  marginBottom: '1.5em'
};

const costListItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em 0'
};

const costIconStyle: React.CSSProperties = {
  height: '1.5em'
};

const costNameStyle: React.CSSProperties = {
  flex: '1',
  padding: '0 0.5em'
};

const costQuantityStyle: React.CSSProperties = {
  paddingLeft: '1em',
  textAlign: 'right'
};

const inputItemsButtonStyle: React.CSSProperties = {
  backgroundColor: 'var(--positive-color)',
  color: 'white',
  boxShadow: 'none',
  width: '10em',
  maxWidth: '70%',
  margin: '1em 0',
  padding: '0.3em 0'
};

const emptyMessageStyle: React.CSSProperties = {
  textAlign: 'center'
};

export const CostCalcPage = withRouter(({history}) => {
  const {bulletCosts, inventory, bulletInventory} = useContext(BulletCalculatorContext);

  // 全ての作成バレットの素材を合計して列挙する。
  // 所持バレット分の素材は除外する。
  const totalCosts = useMemo(
    () => totalBulletCosts(bulletCosts, bulletInventory),
    [bulletCosts, bulletInventory]
  );

  // アイテム所持数入力ページへ遷移するためのコールバック。
  const goToItemInput = useCallback((event: AnimationPlaybackEvent) => {
    history.push('/calc/input/item')
  }, [history]);

  // 作成バレットリスト。
  const bulletList = bulletCosts.map((bullet, index) => {
    return (
      <div key={'bullet-list-' + bullet.item.slug + `-${index}`} style={costListItemStyle}>
        <img src={`img/${bullet.item.iconFileName || 'treasure.svg'}`} style={costIconStyle}/>
        <div style={costNameStyle}>{bullet.item.name.ja}</div>
        <div style={costQuantityStyle}>{bullet.quantity}個</div>
      </div>
    );
  });

  // 所持バレットリスト。
  const bulletInventoryList = bulletInventory.map((bullet, index) => {
    return (
      <div key={'bullet-inventory-' + bullet.item.slug + `-${index}`} style={costListItemStyle}>
        <img src={`img/${bullet.item.iconFileName || 'treasure.svg'}`} style={costIconStyle}/>
        <div style={costNameStyle}>{bullet.item.name.ja}</div>
        <div style={costQuantityStyle}>{bullet.quantity}個</div>
      </div>
    );
  });

  // 必要アイテムリスト。
  const requiredItemList = totalCosts.map((cost) => {
    const inventoryQuantity = cost.item.slug in inventory ? inventory[cost.item.slug] : 0;
    const progress = cost.quantity > 0 ? inventoryQuantity / cost.quantity : 0;

    return (
      <div key={cost.item.slug} style={costListItemContainerStyle}>
        <div style={costListItemStyle}>
          <img src={`img/${cost.item.iconFileName || 'treasure.svg'}`} style={costIconStyle}/>
          <div style={costNameStyle}>{cost.item.name.ja}</div>
          <div style={costQuantityStyle}>{inventoryQuantity}/{cost.quantity}個</div>
        </div>
        <ProgressBar progress={progress}/>
      </div>
    );
  });

  // 必要アイテムがひとつでもあるかどうか。
  const hasCosts = bulletList.length > 0 && requiredItemList.length > 0;

  // 必要アイテムリストが長すぎるかどうか。
  // 10個を超えたら「長すぎる」扱いにする。
  const isTooLong = requiredItemList.length > 10;

  // 全アイテムの合計個数。
  const costSum = useMemo(
    () =>totalCosts.reduce((prev, current) => prev + current.quantity, 0),
    [bulletCosts, inventory]
  );

  // 全所持アイテムの合計個数。
  const totalInventory = useMemo(
    () => totalCosts.reduce((prev, current) => (
      prev + (current.item.slug in inventory ? Math.min(inventory[current.item.slug], current.quantity) : 0)
    ), 0),
    [bulletCosts, inventory]
  );

  // 全体の進捗（0.0から1.0）。
  const progress = costSum > 0 ? totalInventory/costSum : 0;

  return (
    <div className="page">
      <Card style={bulletCardStyle}>
        <h2 style={cardTitleStyle}>作成バレット</h2>
        <div style={costListStyle}>
          {hasCosts ? bulletList : <div style={emptyMessageStyle}>バレットがありません</div>}
        </div>
      </Card>

      <Card style={bulletInventoryCardStyle}>
        <h2 style={cardTitleStyle}>素材バレット</h2>
        <div style={costListStyle}>
          {bulletInventoryList.length > 0 ?
            bulletInventoryList :
            <div style={emptyMessageStyle}>バレットがありません</div>
          }
        </div>
      </Card>

      <Card style={progressCardStyle}>
        <h2 style={cardTitleStyle}>進捗</h2>
        <div>
          <div style={percentageStyle}>{(progress * 100).toFixed(2)}%</div>
          <ProgressBar progress={progress} style={progressBarStyle}/>
        </div>
      </Card>

      <Card style={costCardStyle}>
        <h2 style={cardTitleStyle}>必要素材</h2>
        {hasCosts ?
          <CardButton
            onAnimationFinish={goToItemInput}
            style={inputItemsButtonStyle}>
            所持数入力
          </CardButton> : null}
        <div style={costListStyle}>
          {hasCosts ? requiredItemList : <div style={emptyMessageStyle}>なし</div>}
        </div>
        {hasCosts && isTooLong ?
          <CardButton
            onAnimationFinish={goToItemInput}
            style={inputItemsButtonStyle}>
            所持数入力
          </CardButton> : null}
      </Card>
    </div>
  );
});