import React from "react";

import SeatContext from "../../context/SeatsContext";
import Bus from "../Bus/Bus";
import Modal from "../Modal/Modal";
import BookingForm from "../BookingForm/BookingForm";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentSeat, setCurrentSeat] = React.useState({});
  const { seats, setSeats } = React.useContext(SeatContext);

  const bookedSeats = React.useMemo(
    () => seats.filter((seat) => seat.status.toLowerCase() === "reserved"),
    [seats]
  );

  const handleItemClick = React.useCallback((seat) => {
    setCurrentSeat(seat);
    setIsModalOpen(true);
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles["dashboard__booking"]}>
        <h2 className={styles["dashboard__booking-heading"]}>
          Recent Boooking
        </h2>
        {!bookedSeats.length && <p>No bookings yet.</p>}
        {bookedSeats.map(({ seatNo, reservedBy }) => (
          <ul>
            <li key={seatNo} className={styles["dashboard__booking-list"]}>
              <div
                className={styles["dashboard__booking-item"]}
                onClick={() => handleItemClick({ seatNo, reservedBy })}
              >
                <div>
                  Seat No - <strong>{seatNo}</strong>
                </div>
                <div>
                  Booked by -{" "}
                  <strong>
                    {reservedBy.firstName} {reservedBy.lastName}
                  </strong>
                </div>
                <div>
                  Email - <strong>{reservedBy.email}</strong>
                </div>
                <div>
                  On -{" "}
                  <strong>
                    {new Date(reservedBy.date).toLocaleDateString()}
                  </strong>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <Bus isEditable className={styles["dashboard__bus"]} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <BookingForm
            {...currentSeat}
            onClose={() => setIsModalOpen(false)}
            seats={seats}
            setSeats={setSeats}
            isEditable
          />
        </Modal>
      )}
    </div>
  );
}
