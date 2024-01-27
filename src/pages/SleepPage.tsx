// SleepPage.tsx
import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonProgressBar,
} from '@ionic/react';

// Import CSS file
import './SleepPage.css';

interface SleepPageState {
  consistentBedtime: boolean;
  restfulSleep: boolean;
  avoidScreensBeforeBed: boolean;
  darkRoom: boolean;
  comfortableMattress: boolean;
  quietEnvironment: boolean;
  consistentWakeUpTime: boolean;
  limitCaffeineIntake: boolean;
  bedtimeRoutine: boolean;
  coolSleepEnvironment: boolean;
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
        darkRoom: false,
        comfortableMattress: false,
        quietEnvironment: false,
        consistentWakeUpTime: false,
        limitCaffeineIntake: false,
        bedtimeRoutine: false,
        coolSleepEnvironment: false,
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

  // Function to calculate the count of checked checkboxes
  const calculateCheckedCount = () => {
    return Object.values(sleepHabits).filter((value) => value).length;
  };

  const checkedCount = calculateCheckedCount();

  // Function to determine the color based on the checkedCount
  const getColorBasedOnCount = () => {
    if (checkedCount <= 2) return 'orange'; // Orange
    if (checkedCount <= 4) return 'yellow'; // Yellow
    if (checkedCount <= 6) return 'greenyellow'; // Greenyellow
    if (checkedCount <= 8) return 'green'; // Green
    return '#00ff11'; // Bright Green for 9 and 10
  };
  
  const color = getColorBasedOnCount();
  
  const colorStyles = {
    width: '100px', // Adjust the width as needed
    height: '100px', // Adjust the height as needed
    margin: 'auto', // Center the square horizontally
    marginTop: '20px', // Adjust the top margin as needed
    backgroundColor: color, // Apply the color variable dynamically
    borderRadius: '10px', // Adjust the border-radius as needed for rounded corners
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sleep Habits</IonTitle>
        </IonToolbar>
      </IonHeader>

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

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.darkRoom}
            onIonChange={() => handleCheckboxChange('darkRoom')}
            aria-label="Dark Room"
          />
          <IonLabel>Is your room dark for sleep?</IonLabel>
        </IonItem>

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.comfortableMattress}
            onIonChange={() => handleCheckboxChange('comfortableMattress')}
            aria-label="Comfortable Mattress"
          />
          <IonLabel>Do you sleep on a comfortable mattress?</IonLabel>
        </IonItem>

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.quietEnvironment}
            onIonChange={() => handleCheckboxChange('quietEnvironment')}
            aria-label="Quiet Environment"
          />
          <IonLabel>Is your sleep environment quiet?</IonLabel>
        </IonItem>

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.consistentWakeUpTime}
            onIonChange={() => handleCheckboxChange('consistentWakeUpTime')}
            aria-label="Consistent Wake-up Time"
          />
          <IonLabel>Do you have a consistent wake-up time?</IonLabel>
        </IonItem>

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.limitCaffeineIntake}
            onIonChange={() => handleCheckboxChange('limitCaffeineIntake')}
            aria-label="Limit Caffeine Intake"
          />
          <IonLabel>Do you limit caffeine intake?</IonLabel>
        </IonItem>

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.bedtimeRoutine}
            onIonChange={() => handleCheckboxChange('bedtimeRoutine')}
            aria-label="Bedtime Routine"
          />
          <IonLabel>Do you have a bedtime routine?</IonLabel>
        </IonItem>

        <IonItem>
          <IonCheckbox
            slot="start"
            checked={sleepHabits.coolSleepEnvironment}
            onIonChange={() => handleCheckboxChange('coolSleepEnvironment')}
            aria-label="Cool Sleep Environment"
          />
          <IonLabel>Is your sleep environment cool?</IonLabel>
        </IonItem>
      </IonList>

      <div
  className={`color-square color-${color}`}
  style={{ marginTop: '10px', width: '50px', height: '50px' }}
></div>

<IonProgressBar
  style={{ height: '10px', marginTop: '10px' }}
  color={color}
  value={checkedCount / 10}
></IonProgressBar>


      {/* Dynamic square based on the checked count */}
      <div style={colorStyles}></div>

      <p>
        Number of checked checkboxes: {checkedCount}
      </p>
    </IonPage>
  );
};

export default SleepPage;
