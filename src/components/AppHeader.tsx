import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { CardButton } from './CardButton';
import { useCallback} from 'react';

export interface AppHeaderProps extends RouteComponentProps {
  actionButton?: React.ReactNode;
}

const appHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'var(--primary-color)',
  padding: '0.8em 1em'
};

const backButtonContainerStyle: React.CSSProperties = {
  flex: '1'
};

const backButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: 'white',
  color: 'var(--primary-color)',
  boxShadow: 'none',
  padding: '0.2em 0.8em'
};

const appTitleStyle: React.CSSProperties = {
  flex: '3',
  color: 'white',
  fontSize: '1em',
  fontWeight: 'normal',
  textAlign: 'center'
};

const actionButtonContainerStyle: React.CSSProperties = {
  flex: '1',
  textAlign: 'right'
};

export const AppHeader = withRouter((props: AppHeaderProps) => {
  // 戻るボタンを押した時のコールバック関数。
  const onAnimationFinish = useCallback(() => {
    props.history.goBack();
  }, [props.history]);

  // 戻るボタンを表示するか否か。
  // locationのstateにユーザ定義情報としてboolean値backableが入っている。
  const backable = props.history.location.state && props.history.location.state.backable;

  return (
    <div style={appHeaderStyle}>
      <div style={backButtonContainerStyle}>
        <CardButton
          onAnimationFinish={backable ? onAnimationFinish : undefined}
          style={{...backButtonStyle, visibility: backable ? 'visible' : 'hidden'}}
        >
          ←
        </CardButton>
      </div>
      <h1 style={appTitleStyle}>バレット計算機</h1>
      <div style={actionButtonContainerStyle}>
        {props.actionButton}
      </div>
    </div>
  );
});