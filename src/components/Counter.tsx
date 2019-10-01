import * as React from 'react';
import { useCallback, useState } from 'react';
import { CardButton } from './CardButton';

interface CounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  unit?: string;
  onCountChange?: (count: number) => any;
}

const counterStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '1em'
};

const buttonStyle: React.CSSProperties = {
  width: '1.8em',
  height: '1.8em',
  padding: '0.1em',
  boxShadow: 'none',
  border: 'solid 1px white'
};

const minusButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'var(--danger-color)'
};

const plusButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'var(--positive-color)'
};

const iconStyle: React.CSSProperties = {
  maxWidth: '100%'
};

const countContainerStyle: React.CSSProperties = {
  margin: '0 0.7em'
};

const countStyle: React.CSSProperties = {
  fontSize: '1.3em',
  width: '4em',
  textAlign: 'right',
  padding: '0.3 0.5em',
  margin: '0 0.5em'
};

export const Counter = (props: CounterProps) => {
  const min = typeof props.min === 'number' ? props.min : 0;
  const max = typeof props.max === 'number' ? props.max : Infinity;
  const initialValue = typeof  props.initialValue === 'number' ? props.initialValue : min;
  const unit = props.unit || '';

  const [count, setCount] = useState(initialValue);

  const onMinusClick = useCallback(() => {
    const newCount = Math.max(min, count - 1);
    setCount(newCount);
    if(props.onCountChange) { props.onCountChange(newCount); }
  }, [count, props.onCountChange]);

  const onPlusClick = useCallback(() => {
    const newCount = Math.min(max, count + 1);
    setCount(newCount);
    if(props.onCountChange) { props.onCountChange(newCount); }
  }, [count, props.onCountChange]);

  const onInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedInputValue = parseInt(event.currentTarget.value);

    if(!Number.isNaN(parsedInputValue)) {
      const newCount = Math.max(Math.min(max, parsedInputValue), min);
      setCount(newCount);
      if (props.onCountChange) { props.onCountChange(newCount); }
    } else {
      setCount(min);
      if (props.onCountChange) { props.onCountChange(min); }
    }
  }, [props.onCountChange]);

  return (
    <div style={counterStyle}>
      <CardButton onClick={onMinusClick} style={minusButtonStyle}>
        <img src="img/minus.svg" style={iconStyle}/>
      </CardButton>
      <div style={countContainerStyle}>
        <input
          style={countStyle}
          type="number"
          min={min}
          max={max}
          pattern="\d*"
          value={count.toString()}
          onInput={onInput}
        />
        {unit}
      </div>
      <CardButton onClick={onPlusClick} style={plusButtonStyle}>
        <img src="img/plus.svg" style={iconStyle}/>
      </CardButton>
    </div>
  );
};