import React from "react";
import styles from "./Alert.module.css";

const Alert = ({ messages }) => {
  return (
    <div className={styles.alert}>
      {messages.map((message, index) => (
        <div key={index} className={styles["alert__message"]}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default Alert;
