import * as React from 'react';
import { CardIconButton } from '../components/CardIconButton';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useContext } from 'react';
import { BulletCalculatorContext } from '../context/bulletcalc_context';
import { CardButton } from '../components/CardButton';

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
  width: '13em',
  textAlign: 'left'
};

const bulletButtonQuantityStyle: React.CSSProperties = {
  paddingLeft: '0.8em'
};

const addButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'var(--positive-color)'
};

export const BulletListPage = withRouter((props: RouteComponentProps) => {
  const {bulletCosts} = useContext(BulletCalculatorContext);

  const goToNewBulletPage = (event: AnimationPlaybackEvent) => {
    props.history.push('/bulletlist/newbullet', {backable: true});
  };

  const bulletList = bulletCosts.map((cost, index) => {
    const goToEditBulletPage = (event: AnimationPlaybackEvent) => {
      props.history.push(`/bulletlist/edit/${index}`, {backable: true});
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