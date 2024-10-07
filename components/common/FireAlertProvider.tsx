import React, { createContext, useEffect, useState, useContext } from "react";
import { listenForFireAlerts } from "@/services/FireBase/fireAlertService";
import { FireAlert } from "@/DTO/FireAlert";
import moment from "moment";

const FireAlertsContext = createContext<FireAlert[]>([]);

export const generateAlertTitle = (sections: string[]) => {
  const sectionsString = sections.join(", ");

  return `Section ${sectionsString} fire detected`;
};

const processFireAlert = (alert: FireAlert) => {
  alert.title = generateAlertTitle(alert.markedSections);
  alert.formattedDate = moment(alert.createdAt).format("YY-MM-DD");
  alert.formattedTime = moment(alert.createdAt).format("hh:mm A");
  return alert;
};

export const FireAlertsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fireAlerts, setFireAlerts] = useState<FireAlert[]>([]);

  useEffect(() => {
    const unsubscribe = listenForFireAlerts((alerts: FireAlert[]) => {
      const processedAlerts = alerts.map((alert) => processFireAlert(alert));
      setFireAlerts(processedAlerts);
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  return (
    <FireAlertsContext.Provider value={fireAlerts}>
      {children}
    </FireAlertsContext.Provider>
  );
};

export const useFireAlerts = () => useContext(FireAlertsContext);

export const useFireAlertById = (alertId: string) => {
  const fireAlerts = useContext(FireAlertsContext);
  return fireAlerts.find((alert) => alert.id === alertId);
};
