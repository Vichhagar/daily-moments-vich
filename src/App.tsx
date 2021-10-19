import {
  IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { home, settings, arrowRedo, arrowUndo, person } from 'ionicons/icons';
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Page3 from './pages/Page3';
import Entry from './pages/Entry';
import Login from './pages/Login'

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
            <Route exact path="/login">
              <Login/>
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
