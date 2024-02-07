import React from "react";

import SeatContext from "./SeatsContext";

export default function SeatProvider({ children }) {
  const [seats, setSeats] = React.useState(
    JSON.parse(localStorage.getItem("seats"))
  );

  React.useEffect(() => {
    if (!seats.length) return;
    localStorage.setItem("seats", JSON.stringify(seats));
  }, [seats]);

  return (
    <SeatContext.Provider value={{ seats, setSeats }}>
      {children}
    </SeatContext.Provider>
  );
}
