import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export default function Button({ children, to }) {
  // Если есть проп 'to' - рендерим Link, иначе обычную кнопку
  if (to) {
    return (
      <Link to={to} className={styles.button}>
        {children}
      </Link>
    );
  }

  return (
    <div className={styles.button}>
      <button>{children}</button>
    </div>
  );
}
