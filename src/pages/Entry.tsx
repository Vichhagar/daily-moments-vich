import {
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTab,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { entries } from '../data';
import { useParams } from 'react-router';

interface RouterParams {
  id: string;
}

const Entry: React.FC = () => {
  const {id} = useParams<RouterParams>();
  const entry = entries.find((entry) => entry.id === id);
  if(!entry) {
    throw new Error(`No Entry: ${id}`)
  }
  return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButton slot="start" fill="clear">
          <IonBackButton />
        </IonButton>
          <IonTitle>{entry.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry.discription}
      </IonContent>
    </IonPage>
  );
};

export default Entry;
