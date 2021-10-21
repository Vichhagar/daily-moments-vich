import {
  IonApp, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { home, settings } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Entry from './pages/Entry';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
            <Route exact path="/entries">
                <Home/>
            </Route>
            <Route exact path="/entries/:id">
              <Entry/>
            </Route>
            <Route exact path="/setting">
              <Setting/>
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
    </IonPage>
  );
};

export default Menu;
