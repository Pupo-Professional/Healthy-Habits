// src/pages/CheckboxPage.tsx
import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonCheckbox, IonRouterLink } from '@ionic/react';
import CheckboxItem from '../components/CheckboxItem';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonList>
        <IonItem>
            <IonCheckbox aria-label="Checkbox Label" />
          </IonItem>
          <IonItem>
            <IonCheckbox aria-label="Checkbox Label" />
          </IonItem>
        </IonList>
        <IonRouterLink routerLink="/about">Go to About Page</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

