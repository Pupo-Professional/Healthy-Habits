import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
} from '@ionic/react';

interface SleepPageState {
  consistentBedtime: boolean;
  restfulSleep: boolean;
  avoidScreensBeforeBed: boolean;
}

const SleepPage: React.FC = () => {
  const [sleepHabits, setSleepHabits] = useState<SleepPageState>(() => {
    const storedState = localStorage.getItem('sleepPageCheckboxes');
    return storedState
      ? JSON.parse(storedState)
      : {
          consistentBedtime: false,
          restfulSleep: false,
          avoidScreensBeforeBed: false,
        };
  });

  useEffect(() => {
    localStorage.setItem('sleepPageCheckboxes', JSON.stringify(sleepHabits));
  }, [sleepHabits]);

  const handleCheckboxChange = (key: keyof SleepPageState) => {
    setSleepHabits((prevSleepHabits) => ({
      ...prevSleepHabits,
      [key]: !prevSleepHabits[key],
    }));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Sleep Habits</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Do you have a consistent bedtime?</IonLabel>
            <IonCheckbox
              checked={sleepHabits.consistentBedtime}
              onIonChange={() => handleCheckboxChange('consistentBedtime')}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Do you experience restful sleep?</IonLabel>
            <IonCheckbox
              checked={sleepHabits.restfulSleep}
              onIonChange={() => handleCheckboxChange('restfulSleep')}
            />
          </IonItem>

          <IonItem>
            <IonLabel>Do you avoid screens before bedtime?</IonLabel>
            <IonCheckbox
              checked={sleepHabits.avoidScreensBeforeBed}
              onIonChange={() => handleCheckboxChange('avoidScreensBeforeBed')}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SleepPage;
