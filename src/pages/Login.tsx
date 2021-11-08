import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonText,
  IonLoading
} from '@ionic/react';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../auth';
import { auth } from '../Firestore';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const { loggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, checkError] = useState(false);
  const [spinner, setSpinner] = useState(false);


  const handleLogin = async () => {
    try {
      checkError(false);
      setSpinner(true);
      const credential = auth.signInWithEmailAndPassword(email, password);
      setSpinner(false);
      
      console.log("credential: ", credential);
      onLogin();
    } catch (error) {
      checkError(true);
      setSpinner(false);
    }
  }

  console.log(`Login Status: ${loggedIn}`);
  if(loggedIn) {
    return <Redirect to="/my/entries" />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" value = {email} onIonChange = {
            (event) => setEmail(event.detail.value)
          }></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value = {password} onIonChange = {
            (event) => setPassword(event.detail.value)
          }></IonInput>
          </IonItem>
          {error &&
            <IonText color="danger">Invalid Credentials</IonText>
          }
          <IonButton className="ion-padding" expand="block" onClick={handleLogin}>Login</IonButton>
          <IonLoading isOpen={spinner} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;