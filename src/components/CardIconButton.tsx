import * as React from 'react';
import { useMemo } from 'react';
import { CardButton, CardButtonProps } from './CardButton';

export interface CardIconButtonProps extends CardButtonProps {
  iconUrl: string;
  text: string;
}

const cardIconButtonStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};

const cardIconButtonImageStyle: React.CSSProperties = {
  display: 'block',
  margin: 'auto',
  width: '3em'
};

const cardIconButtonLabelStyle: React.CSSProperties = {
  fontSize: '0.7em',
  userSelect: 'none'
};

export const CardIconButton = (props: CardIconButtonProps) => {
  const {iconUrl, text, onAnimationFinish, style} = props;

  const combinedStyle = useMemo<React.CSSProperties>(() =>
    ({...cardIconButtonStyle, ...(style || {})}),
    [style]
  );

  return (
    <CardButton
      style={combinedStyle}
      onAnimationFinish={onAnimationFinish}
    >
      <img src={iconUrl} style={cardIconButtonImageStyle}/>
      <div style={cardIconButtonLabelStyle}>{text}</div>
    </CardButton>
  );
};