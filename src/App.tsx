import * as React from 'react';
import { useCallback, useRef, useState, useEffect, useMemo } from 'react';
import { createMemoryHistory } from 'history';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import 'web-animations-js';

import { BulletCalculatorContext } from './context/bulletcalc_context';
import { MobileNavBar } from './components/mobile/MobileNavBar';
import { BulletCost } from './data/gbf';
import { BulletListPage } from './containers/BulletListPage';
import { NewBulletPage } from './containers/NewBulletPage'
import { NewBulletAddPage } from './containers/NewBulletAddPage';
import { AppHeader } from './components/AppHeader';
import { CostCalcPage } from './containers/CostCalcPage';
import { CostCalcItemInputPage } from './containers/CostCalcItemInputPage';
import { bulletCostsToJson, jsonToBulletCosts } from './data/bulletcalc';
import { BulletEditPage } from './containers/BulletEditPage';
import { PreferencesPage } from './containers/PreferencesPage';

export const App = () => {
  // 各種保存データの読み込み
  let initialBulletCosts: BulletCost[] = [];
  let initialInventory: {[slug: string]: number} = {};
  let initialPreferences: {[item: string]: any} = {};

  if(localStorage) {
    const savedBulletCosts = localStorage.getItem('GbfBulletCalc/bullets');
    const savedInventory = localStorage.getItem('GbfBulletCalc/inventory');
    const savedPreferences = localStorage.getItem('GbfBulletCalc/preferences');

    try {
      const parsedBullets = JSON.parse(savedBulletCosts || '[]');
      initialBulletCosts = jsonToBulletCosts(parsedBullets);
    } catch(e) {
      console.error('データが破損しています：バレットデータ');
    }

    try {
      initialInventory = JSON.parse(savedInventory || '{}');
    } catch(e) {
      console.error('データが破損しています：インベントリデータ');
    }

    try {
      initialPreferences = JSON.parse(savedPreferences || '{}');
    } catch(e) {
      console.error('データが破損しています：設定データ');
    }
  }

  const [bulletCosts, setBulletCosts] = useState<BulletCost[]>(initialBulletCosts);
  const [inventory, setInventory] = useState<{[slug: string]: number}>(initialInventory);
  const [actionButton, setActionButton] = useState<React.ReactNode>(undefined);
  const [preferences, setPreferences] = useState<{[item: string]: any}>(initialPreferences);
  const [installPrompt, setInstallPrompt] = useState<any>();

  const mainRef = useRef<HTMLElement>(null);

  const scrollToTop = useCallback(() => {
    const mainElem = mainRef.current;
    if(mainElem) {
      mainElem.scrollTo(0, 0);
    }
  }, [mainRef]);

  const memoryHistory = useMemo(() => createMemoryHistory(), []);
  
  useEffect(() => {
    const unlisten = memoryHistory.listen((location) => scrollToTop());
    return () => unlisten();
  }, [memoryHistory]);

  // PWA用の処理
  navigator.serviceWorker.register('serviceworker.js');
  addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    setInstallPrompt(event);
  });

  const setNewBulletCosts = useCallback((newBulletCosts) => {
    setBulletCosts(newBulletCosts);
    if(localStorage) {
      localStorage.setItem('GbfBulletCalc/bullets', JSON.stringify(bulletCostsToJson(newBulletCosts)));
    }
  }, [setBulletCosts]);

  const setNewInventory = useCallback((newInventory) => {
    setInventory(newInventory);
    if(localStorage) {
      localStorage.setItem('GbfBulletCalc/inventory', JSON.stringify(newInventory));
    }
  }, [setInventory]);

  const setNewPreferences = useCallback((newPreferences) => {
    setPreferences(newPreferences);
    if(localStorage) {
      localStorage.setItem('GbfBulletCalc/preferences', JSON.stringify(newPreferences));
    }
  }, [setPreferences]);

  return (
    <>
      <BulletCalculatorContext.Provider value={
        {
          bulletCosts,
          inventory,
          actionButton,
          systemPreferences: preferences,
          installPrompt,
          setBulletCosts: setNewBulletCosts,
          setInventory: setNewInventory,
          setActionButton,
          setSystemPreferences: setNewPreferences,
          setInstallPrompt
        }
      }>
        <Router history={memoryHistory} >
          <Route render={({location}) => {
            const isInputMode = location.pathname.startsWith('/calc/input');

            return (
              <>
                <AppHeader actionButton={actionButton}/>
                <main ref={mainRef}>
                  <TransitionGroup component={null}>
                    <CSSTransition key={'page-transition-' + location.pathname} classNames="page-transition" timeout={100}>
                      <Switch location={location}>
                        <Route exact path="/bulletlist" component={BulletListPage}/>
                        <Route exact path="/bulletlist/newbullet" component={NewBulletPage}/>
                        <Route exact path="/bulletlist/edit/:bulletid" component={BulletEditPage}/>
                        <Route exact path="/bulletlist/newbullet/:bullettype" component={NewBulletPage}/>
                        <Route exact path="/bulletlist/newbullet/:bullettype/:bulletslug" component={NewBulletAddPage}/>
                        <Route exact path="/calc" component={CostCalcPage}/>
                        <Route exact path="/calc/input/item" component={CostCalcItemInputPage}/>
                        <Route exact path="/preferences" component={PreferencesPage}/>
                        <Redirect to="/bulletlist"/>
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </main>
                {isInputMode ? null : <MobileNavBar/>}
              </>
            );
          }}/>
        </Router>
      </BulletCalculatorContext.Provider>
    </>
  );
};