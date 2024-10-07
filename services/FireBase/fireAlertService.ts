import { ref, set, update, onValue, push } from "firebase/database";
import { rtdb } from "./firebaseConfig";

export const createFireAlert = async (
    userId: string, 
    name: string, 
    address: string, 
    contactNo: string, 
    markedSections: string[], 
    description: string,
    photos: string[],
  ) => {
    const alertsRef = ref(rtdb, 'fireAlerts/');
    const newAlertRef = push(alertsRef);
  
    await set(newAlertRef, {
      createdAt: new Date().toISOString(),
      createdBy: userId,
      status: 'pending',
      confirmedBy: [],
      reportedAsSpamBy: [],
      name: name,
      address: address,
      contactNo: contactNo,
      markedSections: markedSections,
      description: description,
      photos: photos
    });
  };

export const listenForFireAlerts = (callback: Function) => {
  const alertsRef = ref(rtdb, 'fireAlerts/');
  onValue(alertsRef, (snapshot) => {
    const alerts = snapshot.val();
    const alertList = alerts ? Object.keys(alerts).map((key) => ({ id: key, ...alerts[key] })) : [];
    callback(alertList);
  });
};

export const updateFireAlertStatus = async (alertId: string, status: string, userId: string) => {
  const alertRef = ref(rtdb, `fireAlerts/${alertId}`);
  
  if (status === 'confirmed') {
    await update(alertRef, {
      status: 'confirmed',
      confirmedBy: [userId],
    });
  } else if (status === 'spam') {
    await update(alertRef, {
      status: 'spam',
      reportedAsSpamBy: [userId],
    });
  }
};
