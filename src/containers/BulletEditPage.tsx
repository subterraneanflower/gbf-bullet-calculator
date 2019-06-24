import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';
import { useCallback, useContext, useMemo, useState } from 'react';
import { slugToBullet } from '../data/gbf_item_data';
import { Counter } from '../components/Counter';
import { BulletCalculatorContext } from '../context/bulletcalc_context';
import { BulletCost } from '../data/gbf';

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  width: '100%'
};

const bulletFigureStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const addBulletButtonStyle: React.CSSProperties = {
  backgroundColor: 'var(--positive-color)',
  color: 'white',
  border: 'solid 1px white',
  boxShadow: 'none',
  width: '10em',
  maxWidth: '70%',
  margin: '1em 0',
  padding: '0.3em 0'
};

const deleteBulletButtonStyle: React.CSSProperties = {
  backgroundColor: 'var(--danger-color)',
  color: 'white',
  border: 'solid 1px white',
  boxShadow: 'none',
  width: '10em',
  maxWidth: '70%',
  margin: '1em 0',
  padding: '0.3em 0'
};

const costListStyle: React.CSSProperties = {
  fontSize: '0.7em',
  width: '20em',
  maxWidth: '90%'
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

export const BulletEditPage = (props: RouteComponentProps<{bulletid: string}>) => {
  const bulletId = parseInt(props.match.params.bulletid);
  const {bulletCosts, setBulletCosts} = useContext(BulletCalculatorContext);
  const targetBulletCost = useMemo(() => bulletCosts[bulletId], [bulletId]);
  const bullet = slugToBullet[targetBulletCost.item.slug];
  const [count, setCount] = useState(targetBulletCost.quantity);

  const coloredCardStyle = useMemo(() => ({
    ...cardStyle,
    backgroundColor: targetBulletCost.item.cssColorString
  }), []);

  const onCountChange = useCallback((newCount: number) => {
    setCount(newCount);
  }, [setCount]);

  const editBulletAndBack = useCallback((event: AnimationPlaybackEvent) => {
    const newBulletCosts = [...bulletCosts];
    newBulletCosts[bulletId] = new BulletCost(bullet, count);
    setBulletCosts(newBulletCosts);
    props.history.goBack();
  }, [bulletCosts, setBulletCosts, count]);

  const deleteBulletAndBack = useCallback((event: AnimationPlaybackEvent) => {
    if(!confirm('このバレットを削除しますか？')) {
      return;
    }

    const newBulletCosts = [...bulletCosts];
    newBulletCosts.splice(bulletId, 1);
    setBulletCosts(newBulletCosts);
    props.history.goBack();
  }, [bulletCosts, setBulletCosts]);

  const requiredItemList = bullet.requiredCosts.map((cost) => {
    return (
      <div key={cost.item.slug} style={costListItemStyle}>
        <img src={`img/${cost.item.iconFileName || 'treasure.svg'}`} style={costIconStyle}/>
        <div style={costNameStyle}>{cost.item.name.ja}</div>
        <div style={costQuantityStyle}>{cost.quantity * count}個</div>
      </div>
    );
  });

  return (
    <div className="page">
      <Card style={coloredCardStyle}>
        <div style={bulletFigureStyle}>
          <img src={`img/${bullet.iconFileName || 'treasure.svg'}`}/>
          <div>{bullet.name.ja}</div>
        </div>

        <Counter initialValue={count} min={1} max={99} unit="個" onCountChange={onCountChange}/>

        <CardButton onAnimationFinish={editBulletAndBack} style={addBulletButtonStyle}>
          保存
        </CardButton>

        <div style={costListStyle}>
          {requiredItemList}
        </div>

        <CardButton onAnimationFinish={deleteBulletAndBack} style={deleteBulletButtonStyle}>
          削除
        </CardButton>
      </Card>
    </div>
  );
};