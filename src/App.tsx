import {
  IonApp, IonRouterOutlet
} from '@ionic/react';
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './Menu';
import Login from './pages/Login'

const App: React.FC = () => {
  const [loggedin, setLoggedin] = useState(false);
  console.log(`Status: ${loggedin}`)
  return (
    <IonApp>
      <IonReactRouter>
            <IonRouterOutlet>
            <Route exact path="/">
            <Redirect to="/entries"/>
            </Route>
            <Route exact path="/entries">
              {loggedin ?
                <Menu/>:
                <Login loggedIn = {loggedin}
                onLogin = {() => setLoggedin(true)}/>
              }
            </Route>
            </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
