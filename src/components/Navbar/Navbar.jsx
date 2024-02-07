import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar__logo"]}>🚍</div>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? `${styles["navbar__item"]} ${styles["navbar__item--active"]}`
              : styles["navbar__item"]
          }
        >
          🖥️ Dashboard
        </NavLink>
        <NavLink
          to="/reservation"
          className={({ isActive }) =>
            isActive
              ? `${styles["navbar__item"]} ${styles["navbar__item--active"]}`
              : styles["navbar__item"]
          }
        >
          🚌 Reservation
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
