import {
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
// import { useParams } from 'react-router';

interface RouterParams {
  id: string;
}

const Home: React.FC = () => {
  // const {id} = useParams<RouterParams>();
  // const entry = entries.find((entry) => entry.id === id);
  // if(!entry) {
  //   throw new Error(`No Entry: ${id}`)
  // }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entries.map((entry) => 
        <IonItem button routerLink={`/my/entries/${entry.id}`}>
          {entry.title}
        </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
