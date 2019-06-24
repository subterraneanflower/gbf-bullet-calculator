import * as React from 'react';
import { useEffect, useMemo, useRef } from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
}

const progressBarStyle: React.CSSProperties = {
  backgroundColor: 'rgb(60, 60, 60)',
  height: '1em'
};

const progressInnerBarStyle: React.CSSProperties = {
  backgroundColor: 'var(--positive-color)',
  height: '100%'
};

export const ProgressBar = (props: ProgressBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const combinedStyle = useMemo(() => ({...progressBarStyle, ...props.style}), [props.style]);

  useEffect(() => {
    const bar = barRef.current;
    if(bar) {
      bar.animate({
        width: ['0', `${Math.min(props.progress * 100, 100).toString()}%`]
      }, {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-out'
      });
    }
  }, [props.progress, barRef.current]);

  return (
    <div style={combinedStyle}>
      <div ref={barRef} style={progressInnerBarStyle}/>
    </div>
  );
};