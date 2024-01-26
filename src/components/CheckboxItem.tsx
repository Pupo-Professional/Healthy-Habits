// src/components/CheckboxItem.tsx
import React, { useState, useEffect } from 'react';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

const CheckboxItem: React.FC<{ label: string; storageKey: string }> = ({ label, storageKey }) => {
  // Load the initial checkbox state from local storage or default to false
  const initialCheckedState = localStorage.getItem(storageKey) === 'true';
  const [isChecked, setIsChecked] = useState<boolean>(initialCheckedState);

  useEffect(() => {
    // Store the checkbox state in local storage whenever it changes
    localStorage.setItem(storageKey, String(isChecked));
  }, [isChecked, storageKey]);

  const handleCheckboxChange = () => {
    // Update the checkbox state
    setIsChecked(!isChecked);
  };

  return (
    <IonItem>
      <IonCheckbox checked={isChecked} onIonChange={handleCheckboxChange} slot="start" />
      <IonLabel>{label}</IonLabel>
    </IonItem>
  );
};

export default CheckboxItem;


