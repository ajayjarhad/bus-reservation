import React from "react";

import AlertContext from "../../../../context/AlertContext";
import Seat from "../Seat/Seat";
import Modal from "../../../Modal/Modal";
import BookingForm from "../../../BookingForm/BookingForm";

import styles from "./Deck.module.css";

export default function Deck({
  seats,
  deckName,
  allSeats,
  setSeats,
  disableBooked,
  isEditable,
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [seatMetadata, setSeatMetadata] = React.useState({});
  const { addAlerts } = React.useContext(AlertContext);

  const handleSeatClick = React.useCallback(
    (seat) => {
      setIsModalOpen(true);
      setSeatMetadata({ ...seat });

      if (seat.status.toLowerCase() === "reserved" && disableBooked) {
        setIsModalOpen(false);
        addAlerts(
          <>
            <h3>Error</h3>
            <br />
            This seat is reserved, please pick another
          </>
        );
      }
    },
    [disableBooked]
  );

  const handleClose = React.useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <div className={styles.deck}>
        <h2 className={styles["deck__title"]}>{deckName}</h2>

        <div className={styles["deck__seat-grid"]}>
          {seats.map((seat, index) => (
            <Seat
              key={index}
              {...seat}
              onClick={handleSeatClick}
              setSeatMetadata={setSeatMetadata}
              disableBooked={disableBooked}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <BookingForm
            {...seatMetadata}
            onClose={handleClose}
            seats={allSeats}
            setSeats={setSeats}
            isEditable={isEditable}
          />
        </Modal>
      )}
    </>
  );
}
