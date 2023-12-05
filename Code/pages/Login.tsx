import EmailValid from '../components/EmailValid';
import './Login.css';
import PasswordValid from '../components/PasswordValid';
import React from 'react';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

interface ContainerProps { }

const Login: React.FC<ContainerProps> = () => {
  return (
    <IonPage>
      <IonCard about='login'>
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <EmailValid/>
            <br />
            <PasswordValid/>
            <br />
            <IonButton expand="block">SUBMIT</IonButton>
          </IonCardContent>

      </IonCard>
    </IonPage>
  );
};

export default Login;
