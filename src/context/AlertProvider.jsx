import React from "react";

import AlertContext from "./AlertContext";
import Alert from "../components/Alert/Alert";

export default function AlertProvider({ children }) {
  const [alerts, setAlerts] = React.useState([]);

  const addAlerts = React.useCallback(
    (message) => setAlerts((prevAlerts) => [...prevAlerts, message].slice(-4)), //Only show 4 alerts that were recently added
    []
  );

  React.useEffect(() => {
    if (alerts.length) {
      const timer = setTimeout(() => {
        setAlerts((prevAlerts) => prevAlerts.slice(1));
      }, 5000); // Auto-dismiss/hide the alerts after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [alerts]);

  return (
    <AlertContext.Provider value={{ addAlerts }}>
      <Alert messages={alerts} />
      {children}
    </AlertContext.Provider>
  );
}
