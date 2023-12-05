import React, { useState } from 'react';
import { IonInput, IonItem, IonLabel, IonNote } from '@ionic/react';

function PasswordValid() {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();


  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;
    if (value.length < 8) setIsValid(false);
    else setIsValid(true);

  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonItem fill="solid" className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}>
      <IonLabel position="floating">Password</IonLabel>
      <IonInput type="password" onIonInput={(event) => validate(event)} onIonBlur={() => markTouched()}></IonInput>
      <IonNote slot="error">Password must have 8 characters</IonNote>
    </IonItem>
  );
}
export default PasswordValid;
