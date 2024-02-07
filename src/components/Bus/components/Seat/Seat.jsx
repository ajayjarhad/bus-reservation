import React from "react";

import styles from "./Seats.module.css";

export default function Seat({
  seatNo,
  status = "available",
  reservedBy,
  onClick,
  setSeatMetadata,
  disableBooked,
}) {
  const statusClassName = `seat--${status.toLowerCase()}`;

  React.useEffect(() => {
    setSeatMetadata({ seatNo, status, reservedBy });
  }, [seatNo, status, reservedBy, setSeatMetadata]);

  return (
    <div
      className={`${styles["seat"]} ${styles[statusClassName]} ${
        disableBooked && status.toLowerCase() === "reserved"
          ? styles["seat--blocked"]
          : ""
      }`}
      onClick={() => onClick({ seatNo, status, reservedBy })}
    >
      {seatNo}
    </div>
  );
}
