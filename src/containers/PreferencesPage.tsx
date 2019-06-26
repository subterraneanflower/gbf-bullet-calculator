import * as React from 'react';
import { useCallback, useContext } from 'react';
import { BulletCalculatorContext } from '../context/bulletcalc_context';
import { Card } from '../components/Card';
import { CardButton } from '../components/CardButton';

declare let gtag: any;

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
  marginBottom: '1em'
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.2em',
  fontWeight: 'normal',
  textAlign: 'center',
  marginBottom: '1em'
};

const preferencesCardStyle: React.CSSProperties = {
  ...cardStyle,
  backgroundColor: 'var(--primary-color)'
};

const cardButtonStyle: React.CSSProperties = {
  color: 'white',
  boxShadow: 'none',
  width: '10em',
  maxWidth: '70%',
  margin: '1em 0',
  padding: '0.3em 0'
};

const installButtonStyle: React.CSSProperties = {
  ...cardButtonStyle,
  backgroundColor: 'var(--positive-color)',
};

const resetButtonStyle: React.CSSProperties = {
  ...cardButtonStyle,
  backgroundColor: 'var(--danger-color)',
};

const viewSourceOnGitHubStyle: React.CSSProperties = {
  textAlign: 'center'
};

const githubLinkStyle: React.CSSProperties = {
  color: 'black',
  textAlign: 'center'
};

export const PreferencesPage = () => {
  const {
    installPrompt,
    setInstallPrompt,
    systemPreferences,
    setBulletCosts,
    setInventory,
    setBulletInventory,
    setSystemPreferences
  } = useContext(BulletCalculatorContext);

  const onClickInstall = useCallback((event: AnimationPlaybackEvent) => {
    installPrompt.prompt();

    installPrompt.userChoice.then((choiceResult: any) => {
      if(choiceResult.outcome === 'accepted') {
        gtag('event', 'Add to Homescreen', {'event_category': 'App', 'event_label': 'GBF Bullet Calc'});
      }

      setInstallPrompt(null);
    });
  }, [installPrompt, setInstallPrompt]);

  const onClickReset = useCallback(() => {
    if(confirm('保存データを全て消去します。よろしいですか？')) {
      setBulletCosts([]);
      setInventory({});
      setBulletInventory([]);
      setSystemPreferences({});
      alert('消去しました');
    }
  }, [setBulletCosts, setInventory, setSystemPreferences]);

  return (
    <div className="page">
      {installPrompt ? (
          <Card style={preferencesCardStyle}>
            <h2 style={cardTitleStyle}>端末インストール</h2>
            <div>端末にインストールすることで独立アプリとして使用できるようになります。</div>
            <CardButton
              style={installButtonStyle}
              onAnimationFinish={onClickInstall}
            >
              インストール
            </CardButton>
          </Card>
      ): null}

      <Card style={preferencesCardStyle}>
        <h2 style={cardTitleStyle}>システム</h2>
        <CardButton
          style={resetButtonStyle}
          onAnimationFinish={onClickReset}
        >
          全データ消去
        </CardButton>
      </Card>

      <div style={viewSourceOnGitHubStyle}>
        <a
          href="https://github.com/subterraneanflower/gbf-bullet-calculator"
          target="_blank"
          style={githubLinkStyle}
        >
          View Source on GitHub
        </a>
      </div>
    </div>
  );
};