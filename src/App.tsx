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
  // 各種保存データの読み込み。
  let initialBulletCosts: BulletCost[] = [];
  let initialInventory: {[slug: string]: number} = {};
  let initialBulletInventory: BulletCost[] = [];
  let initialPreferences: {[item: string]: any} = {};

  if(localStorage) {
    const savedBulletCosts = localStorage.getItem('GbfBulletCalc/bullets');
    const savedInventory = localStorage.getItem('GbfBulletCalc/inventory');
    const savedBulletInventory = localStorage.getItem('GbfBulletCalc/bulletinventory');
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
      const parsedBulletInventory = JSON.parse(savedBulletInventory || '[]');
      initialBulletInventory = jsonToBulletCosts(parsedBulletInventory);
    } catch(e) {
      console.error('データが破損しています：バレットインベントリデータ');
    }

    try {
      initialPreferences = JSON.parse(savedPreferences || '{}');
    } catch(e) {
      console.error('データが破損しています：設定データ');
    }
  }

  // 初期データの準備。
  const [bulletCosts, setBulletCosts] = useState<BulletCost[]>(initialBulletCosts);
  const [inventory, setInventory] = useState<{[slug: string]: number}>(initialInventory);
  const [bulletInventory, setBulletInventory] = useState<BulletCost[]>(initialBulletInventory);
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

  // ルーティング用のヒストリ。
  const memoryHistory = useMemo(() => createMemoryHistory(), []);
  
  useEffect(() => {
    const unlisten = memoryHistory.listen((location) => scrollToTop());
    return () => unlisten();
  }, [memoryHistory]);

  // PWA用の処理。
  useEffect(() => {
    const onBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    addEventListener('beforeinstallprompt', onBeforeInstallPrompt);

    if(navigator.serviceWorker) {
      navigator.serviceWorker.register('serviceworker.js');
    }

    return () => removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, [setInstallPrompt]);

  // コールバック関数。
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

  const setNewBulletInventory = useCallback((newBulletInventory) => {
    setBulletInventory(newBulletInventory);
    if(localStorage) {
      localStorage.setItem('GbfBulletCalc/bulletinventory', JSON.stringify(bulletCostsToJson(newBulletInventory)));
    }
  }, [setBulletInventory]);

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
          bulletInventory,
          actionButton,
          systemPreferences: preferences,
          installPrompt,
          setBulletCosts: setNewBulletCosts,
          setInventory: setNewInventory,
          setBulletInventory: setNewBulletInventory,
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
                        <Route
                          exact
                          path="/bulletlist"
                          render={() =>
                            <BulletListPage
                              title="作成するバレット"
                              basepath="/bulletlist"
                              bulletCosts={bulletCosts}
                            />
                          }
                        />
                        <Route
                          exact
                          path="/bulletlist/newbullet"
                          render={(props) => <NewBulletPage basepath="/bulletlist" {...props}/>}
                        />
                        <Route
                          exact
                          path="/bulletlist/edit/:bulletid"
                          render={(props)=>
                            <BulletEditPage
                              bulletCosts={bulletCosts}
                              onSave={setNewBulletCosts}
                              {...props}
                            />
                          }
                        />
                        <Route
                          exact
                          path="/bulletlist/newbullet/:bullettype"
                          render={(props) => <NewBulletPage basepath="/bulletlist" {...props}/>}
                        />
                        <Route
                          exact
                          path="/bulletlist/newbullet/:bullettype/:bulletslug"
                          render={(props) =>
                            <NewBulletAddPage
                              basepath="/bulletlist"
                              bulletCosts={bulletCosts}
                              onSave={setNewBulletCosts}
                              {...props}
                            />
                          }
                        />

                        <Route
                          exact
                          path="/bulletinventory"
                          render={() =>
                            <BulletListPage
                              title="素材として使うバレット"
                              basepath="/bulletinventory"
                              bulletCosts={bulletInventory}
                            />}
                        />
                        <Route
                          exact
                          path="/bulletinventory/newbullet"
                          render={(props) => <NewBulletPage basepath="/bulletinventory" {...props}/>}
                        />
                        <Route
                          exact
                          path="/bulletinventory/edit/:bulletid"
                          render={(props)=>
                            <BulletEditPage
                              bulletCosts={bulletInventory}
                              onSave={setNewBulletInventory}
                              {...props}
                            />
                          }
                        />
                        <Route
                          exact
                          path="/bulletinventory/newbullet/:bullettype"
                          render={(props) => <NewBulletPage basepath="/bulletinventory" {...props}/>}
                        />
                        <Route
                          exact
                          path="/bulletinventory/newbullet/:bullettype/:bulletslug"
                          render={(props) =>
                              <NewBulletAddPage
                              basepath="/bulletinventory"
                              bulletCosts={bulletInventory}
                              onSave={setNewBulletInventory}
                              {...props}
                            />
                          }
                        />

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