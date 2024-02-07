import React from "react";

import AlertContext from "../../context/AlertContext";

import styles from "./BookingForm.module.css";

const today = new Date(); //Declaring this outside since it is independent of React lifecycle and I don't want it cause accidental re-renders

export default React.memo(function BookingForm({
  seatNo,
  reservedBy,
  seats,
  setSeats,
  isEditable,
  onClose = () => {},
}) {
  const { addAlerts } = React.useContext(AlertContext);
  const { firstName, lastName, email, date } = reservedBy || {};

  const handleChange = React.useCallback((e) => {
    e.preventDefault();
    const { target } = e;

    setSeats((prevSeats) => {
      return prevSeats.map((seat) =>
        seat.seatNo === seatNo
          ? {
              ...seat,
              status: "reserved",
              reservedBy: {
                firstName: target.firstName.value || firstName,
                lastName: target.lastName.value || lastName,
                email: target.email.value || email,
                date: target.date?.value ? new Date(target.date?.value) : today,
              },
            }
          : seat
      );
    });
    console.log(seats);
    addAlerts(
      <>
        <h3>Success</h3>
        <br />
        Reservation successful for seat number <strong>
          {seatNo}
        </strong> for{" "}
        <strong>
          {target?.date?.value
            ? new Date(target?.date?.value).toLocaleDateString()
            : today.toLocaleDateString()}
        </strong>
      </>
    );
    onClose();
  }, []);
  return (
    <div className={styles["booking-form"]}>
      <h2 className={styles["booking-form__title"]}>Reserve seat - {seatNo}</h2>
      <form onSubmit={handleChange} className={styles["booking-form__form"]}>
        <label htmlFor="firstName" className={styles["booking-form__label"]}>
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          defaultValue={firstName}
          required={true}
          className={styles["booking-form__input"]}
        />
        <label htmlFor="lastName" className={styles["booking-form__label"]}>
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue={lastName}
          required={true}
          className={styles["booking-form__input"]}
        />
        <label htmlFor="email" className={styles["booking-form__label"]}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          required={true}
          pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
          className={styles["booking-form__input"]}
        />

        {isEditable && (
          <>
            <label htmlFor="date" className={styles["booking-form__label"]}>
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              defaultValue={
                date ? new Date(date).toISOString().split("T")[0] : ""
              }
              className={styles["booking-form__input"]}
            />
          </>
        )}

        <div className={styles["booking-form__btn-group"]}>
          <button
            type="submit"
            className={`${styles["booking-form__btn"]} ${styles["booking-form__btn--book"]}`}
          >
            {isEditable ? "Save" : "Book"}
          </button>
          <button
            onClick={onClose}
            className={`${styles["booking-form__btn"]} ${styles["booking-form__btn--cancel"]}`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
});
