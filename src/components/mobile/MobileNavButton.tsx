import * as React from 'react';

interface MobileNavButtonProps {
  iconUrl: string;
  label: string;
}

const mobileNavButtonStyle: React.CSSProperties = {
  color: 'var(--text-color)',
  fontSize: '0.7em',
  textAlign: 'center'
};

const iconStyle: React.CSSProperties = {
  display: 'block',
  margin: 'auto',
  width: '3em',
  pointerEvents: 'none'
};

export const MobileNavButton = (props: MobileNavButtonProps) => {
  return (
    <div style={mobileNavButtonStyle}>
      <img src={props.iconUrl} style={iconStyle}/>
      <div>{props.label}</div>
    </div>
  )
};