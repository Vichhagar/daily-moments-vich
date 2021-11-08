import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React from 'react';
import { auth } from '../Firestore';
import { Redirect } from 'react-router-dom';

const Setting: React.FC = () => {
  const handleLogout = () => {
    auth.signOut();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton className="ion-padding" expand="block" onClick={handleLogout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
