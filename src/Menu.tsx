import {
  IonApp, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import { home, settings } from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Entry from './pages/Entry';

interface Props {
  uloggedIn: boolean;
}

const Menu: React.FC<Props> = ({uloggedIn}) => {
  if(!uloggedIn) {
    return <Redirect to="/login"/>
  }
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
            <Route exact path="/my/entries">
                <Home/>
            </Route>
            <Route exact path="/my/entries/:id">
              <Entry/>
            </Route>
            <Route exact path="/my/setting">
              <Setting/>
            </Route>
            </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="entries" href="/my/entries">
              <IonIcon icon={home}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="setting" href="/my/setting">
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
