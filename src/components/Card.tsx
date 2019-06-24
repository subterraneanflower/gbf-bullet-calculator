import * as React from 'react';
import { useMemo } from 'react';

interface CardProps extends React.HTMLProps<HTMLDivElement> {}

const cardStyle: React.CSSProperties = {
  padding: '1em',
  borderRadius: '5px',
  boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)'
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({children, style, ...props}, ref) => {
  const combinedStyle = useMemo(() => ({...cardStyle, ...style}), [style]);

  return (
    <div style={combinedStyle} ref={ref} {...props}>
      {children}
    </div>
  );
});