import {
  IonApp, IonRouterOutlet
} from '@ionic/react';
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './Menu';
import { AuthContext } from './auth';
import Login from './pages/Login'

const App: React.FC = () => {
  const [loggedIn, setLoggedin] = useState(false);
  console.log(`Status: ${loggedIn}`)
  return (
    <IonApp>
      <AuthContext.Provider value = {{ loggedIn }}>
      <IonReactRouter>
            <IonRouterOutlet>
            {/* <Route exact path="/">
            <Redirect to="/entries"/>
            </Route> */}
            <Route exact path="/">
              {loggedIn ?
                <Redirect to="/my"/>:
                <Login loggedIn = {loggedIn}
                onLogin = {() => setLoggedin(true)}/>
              }
            </Route>
            <Route exact path="/my">
              <Menu uloggedIn = {loggedIn}/>
            </Route>
            </IonRouterOutlet>
      </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
