// src/pages/About.tsx

import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';

const NutritionPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>Nutrition Page</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <p>This is the content of the About page.</p>
    </IonContent>
  </IonPage>
);

export default NutritionPage;
