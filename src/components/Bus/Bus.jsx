import React from "react";

import SeatContext from "../../context/SeatsContext";
import Deck from "./components/Deck/Deck";

import styles from "./Bus.module.css";

export default function Bus({ disableBooked, isEditable, className }) {
  const { seats, setSeats } = React.useContext(SeatContext);

  //Don't want the lowerDeck and upperDeck arrays to be recreated every re-render, thus wrapping it in useMemo
  const lowerDeck = React.useMemo(() => seats?.slice(0, 20), [seats]);
  const upperDeck = React.useMemo(() => seats?.slice(20), [seats]);

  return (
    <div className={`${styles.bus} ${className}`}>
      <Deck
        seats={lowerDeck}
        allSeats={seats}
        setSeats={setSeats}
        disableBooked={disableBooked}
        isEditable={isEditable}
        deckName="⬇️ Lower Deck"
      />
      <Deck
        seats={upperDeck}
        allSeats={seats}
        setSeats={setSeats}
        disableBooked={disableBooked}
        isEditable={isEditable}
        deckName="⬆️ Upper Deck"
      />
    </div>
  );
}
