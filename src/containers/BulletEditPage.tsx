import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';
import { useCallback, useContext, useMemo, useState } from 'react';
import { slugToBullet } from '../data/gbf_item_data';
import { Counter } from '../components/Counter';
import { BulletCost } from '../data/gbf';

interface BulletEditPageProps extends RouteComponentProps<{bulletid: string}> {
  bulletCosts: BulletCost[];
  onSave: (bulletCosts: BulletCost[]) => any;
}

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

export const BulletEditPage = (props: BulletEditPageProps) => {
  // URLパラメータからバレットIDを取得する。
  // バレットIDは作成バレットリストの中のインデックス値。
  const bulletId = parseInt(props.match.params.bulletid);

  // バレットIDを用いて作成バレットリストからバレットを取得。
  // 削除した時に再レンダリングが走るとIDがずれてバグるのでuseMemoして固定しておく。
  const targetBulletCost = useMemo(() => props.bulletCosts[bulletId], [bulletId]);
  const bullet = slugToBullet[targetBulletCost.item.slug];

  // バレットの個数。
  const [count, setCount] = useState(targetBulletCost.quantity);

  // バレット固有カラーでカードの背景色を決める。
  const coloredCardStyle = useMemo(() => ({
    ...cardStyle,
    backgroundColor: targetBulletCost.item.cssColorString
  }), []);

  // カウンターの値変更時にステートの値も変化させるコールバック。
  const onCountChange = useCallback((newCount: number) => {
    setCount(newCount);
  }, [setCount]);

  // 保存して戻るコールバック。
  const editBulletAndBack = useCallback((event: AnimationPlaybackEvent) => {
    const newBulletCosts = [...props.bulletCosts];
    newBulletCosts[bulletId] = new BulletCost(bullet, count);
    props.onSave(newBulletCosts);
    props.history.goBack();
  }, [props.bulletCosts, props.onSave, count]);

  // バレット削除時のコールバック。
  const deleteBulletAndBack = useCallback((event: AnimationPlaybackEvent) => {
    if(!confirm('このバレットを削除しますか？')) {
      return;
    }

    const newBulletCosts = [...props.bulletCosts];
    newBulletCosts.splice(bulletId, 1);
    props.onSave(newBulletCosts);
    props.history.goBack();
  }, [props.bulletCosts, props.onSave]);

  // バレット作成への必要アイテムリスト。
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