import * as React from 'react';
import { CardIconButton } from '../components/CardIconButton';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { CardButton } from '../components/CardButton';
import { BulletCost } from '../data/gbf';

interface BulletListPageProps extends RouteComponentProps {
  title?: string;
  description?: string;
  basepath: string;
  bulletCosts: BulletCost[]
}

const titleStyle: React.CSSProperties = {
  color: 'rgb(60, 60, 60)',
  fontWeight: 'normal',
  fontSize: '1.3em',
  textAlign: 'center'
};

const descriptionStyle: React.CSSProperties = {
  color: 'rgb(90, 90, 90)',
  fontWeight: 'normal',
  fontSize: '1em',
  textAlign: 'center'
};

const buttonStyle: React.CSSProperties = {
  color: 'white',
  margin: '1em 0',
  height: '7em'
};

const bulletButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  display: 'flex',
  flexDirection: 'row',
  fontSize: '0.9em'
};

const bulletButtonIconStyle: React.CSSProperties = {
  display: 'block',
  width: '3em'
};

const bulletButtonLabelStyle: React.CSSProperties = {
  width: '11em',
  textAlign: 'left'
};

const bulletButtonQuantityStyle: React.CSSProperties = {
  paddingLeft: '0.8em'
};

const addButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'var(--positive-color)'
};

export const BulletListPage = withRouter((props: BulletListPageProps) => {
  const bulletCosts = props.bulletCosts;

  // バレット新規作成ページへの遷移用コールバック。
  const goToNewBulletPage = (event: AnimationPlaybackEvent) => {
    props.history.push(`${props.basepath}/newbullet`, {backable: true});
  };

  // バレット一覧。
  const bulletList = bulletCosts.map((cost, index) => {
    // バレットクリック時の編集ページへの遷移用コールバック。
    const goToEditBulletPage = (event: AnimationPlaybackEvent) => {
      props.history.push(`${props.basepath}/edit/${index}`, {backable: true});
    };

    return (
      <CardButton
        key={cost.item.slug + '-' + index}
        onAnimationFinish={goToEditBulletPage}
        style={{...bulletButtonStyle, backgroundColor: cost.item.cssColorString}}
      >
        <img src={`img/${cost.item.iconFileName || 'treasure.svg'}`} style={bulletButtonIconStyle}/>
        <div style={bulletButtonLabelStyle}>{cost.item.name.ja}</div>
        <div style={bulletButtonQuantityStyle}>{cost.quantity}個</div>
      </CardButton>
    );
  });

  return (
    <div className="page" >
      <h2 style={titleStyle}>{props.title}</h2>
      {props.description ? <h3 style={descriptionStyle}>{props.description}</h3> : null}
      {bulletList}
      <CardIconButton
        iconUrl="img/plus-circle.svg"
        text="バレットを追加"
        onAnimationFinish={goToNewBulletPage}
        style={addButtonStyle}
      />
    </div>
  );
});