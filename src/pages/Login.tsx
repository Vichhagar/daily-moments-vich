import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router';

interface Props {
  loggedIn: boolean;
  onLogin: () => void;
}

const Login: React.FC<Props> = ({loggedIn, onLogin}) => {
  if(loggedIn) {
    return <Redirect to = "/my/entries"/>
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={onLogin}>Log In</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
