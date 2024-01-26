// src/pages/CheckboxPage.tsx
import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import CheckboxItem from '../components/CheckboxItem';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonList>
          <CheckboxItem label="Item 1" storageKey="item1" />
          <CheckboxItem label="Item 2" storageKey="item2" />
          {/* Add more CheckboxItem components as needed */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

