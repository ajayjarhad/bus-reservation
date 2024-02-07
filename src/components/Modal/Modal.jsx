import React from "react";

import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles["modal__content"]}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className={styles["modal__close-button"]} onClick={onClose}>
          ❌
        </div>
      </div>
    </div>
  );
}
