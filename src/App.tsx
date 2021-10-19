import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { home, settings, arrowRedo, arrowUndo, person } from 'ionicons/icons';
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Entry from './pages/Entry';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
            <Route exact path="/">
            <Redirect to="/entries"/>
            </Route>
            <Route exact path="/entries">
              <Home/>
            </Route>
            <Route exact path="/entries/:id">
              <Entry/>
            </Route>
            <Route exact path="/setting">
              <Setting/>
            </Route>
            <Route exact path="/page1">
              <Page1/>
            </Route>
            <Route exact path="/page2">
              <Page2/>
            </Route>
            <Route exact path="/page3">
              <Page3/>
            </Route>
            </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="entries" href="/entries">
              <IonIcon icon={home}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="setting" href="/setting">
              <IonIcon icon={settings}/>
              <IonLabel>Setting</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
