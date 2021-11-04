import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonTabs,
} from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Setting from './pages/Setting';
import { useAuth } from './auth';


const Menu: React.FC = () => {
  const { loggedIn } = useAuth();
  if(!loggedIn) {
    return <Redirect to="/login" />
  }

  return (
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/my/entries">
              <Home />
            </Route>
            <Route exact path="/my/entries/:id" >
              <Entry />
            </Route>

            <Route exact path="/my/settings" >
              <Setting />
            </Route>

          </IonRouterOutlet>

            <IonTabBar slot="bottom" >
              <IonTabButton tab="home" href="/my/entries" >
                <IonIcon icon={homeIcon} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/my/settings" >
                <IonIcon icon={settingsIcon} />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
        </IonTabs>
  );
};

export default Menu;
