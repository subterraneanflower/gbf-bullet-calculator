import * as React from 'react';
import { useCallback, useMemo, useRef } from 'react';
import { Card } from './Card';

export interface CardButtonProps extends React.HTMLProps<HTMLDivElement> {
  onAnimationFinish?: (event: AnimationPlaybackEvent) => any;
}

const cardButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};

export const CardButton = (props: CardButtonProps) => {
  const {children, onAnimationFinish, style} = props;

  const combinedStyle = useMemo<React.CSSProperties>(() =>
      ({...cardButtonStyle, ...(style || {})}),
    [style]
  );

  const elemRef = useRef<HTMLDivElement>(null);

  const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if(elemRef.current) {
      const animation = elemRef.current.animate({
        transform: ['scale(1)', 'scale(0.98)', 'scale(1)']
      }, 100);

      if(onAnimationFinish) {
        animation.onfinish = onAnimationFinish;
      }
    }

    if(props.onClick) {
      props.onClick(event);
    }
  }, [elemRef, props.onClick, props.onAnimationFinish]);

  return (
    <Card
      onClick={onClick}
      style={combinedStyle}
      ref={elemRef}
    >
      {children}
    </Card>
  );
};