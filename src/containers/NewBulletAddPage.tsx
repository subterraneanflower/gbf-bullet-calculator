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

export const NewBulletAddPage = (props: RouteComponentProps<{bulletslug: string}>) => {
  const [count, setCount] = useState(1);
  const {bulletCosts, setBulletCosts} = useContext(BulletCalculatorContext);

  const bullet = slugToBullet[props.match.params.bulletslug];
  const coloredCardStyle = useMemo(() => ({...cardStyle, backgroundColor: bullet.cssColorString}), []);

  const onCountChange = useCallback((newCount: number) => {
    setCount(newCount);
  }, [setCount]);

  const addBulletAndBack = useCallback((event: AnimationPlaybackEvent) => {
    setBulletCosts([...bulletCosts, new BulletCost(bullet, count)]);
    props.history.replace('/');
  }, [bulletCosts, setBulletCosts, count]);

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
        <CardButton onAnimationFinish={addBulletAndBack} style={addBulletButtonStyle}>
          追加
        </CardButton>
        <div style={costListStyle}>
          {requiredItemList}
        </div>
      </Card>
    </div>
  );
};