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
  IonCheckbox,
  IonLabel,
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
            <IonCheckbox
              slot="start"
              checked={sleepHabits.consistentBedtime}
              onIonChange={() => handleCheckboxChange('consistentBedtime')}
              aria-label="Consistent Bedtime"
            />
            <IonLabel>Do you have a consistent bedtime?</IonLabel>
          </IonItem>

          <IonItem>
            <IonCheckbox
              slot="start"
              checked={sleepHabits.restfulSleep}
              onIonChange={() => handleCheckboxChange('restfulSleep')}
              aria-label="Restful Sleep"
            />
            <IonLabel>Do you experience restful sleep?</IonLabel>
          </IonItem>

          <IonItem>
            <IonCheckbox
              slot="start"
              checked={sleepHabits.avoidScreensBeforeBed}
              onIonChange={() => handleCheckboxChange('avoidScreensBeforeBed')}
              aria-label="Avoid Screens Before Bedtime"
            />
            <IonLabel>Do you avoid screens before bedtime?</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SleepPage;
