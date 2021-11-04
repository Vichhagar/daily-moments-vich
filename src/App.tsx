import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import Menu from './Menu';
import Login from './pages/Login';
import { AuthContext } from './auth';


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`Status of user:=${loggedIn}`);
  return (
    <IonApp>
      <AuthContext.Provider value = {{ loggedIn }}>
        <IonReactRouter>
            <Switch>
              <Route exact path="/login">
                  <Login onLogin={() => setLoggedIn(true)}
                  />
              </Route>

            <Route exact path="/" >
                {loggedIn ?  <HomePage /> : <Redirect to="/login" />}
              </Route>

              <Route path="/my" >
                <Menu/>
              </Route>

              <Route>
                <NotFound />
              </Route>

              {/* <Redirect exact path="/" to="/login" /> */}
            </Switch>
      </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;