import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import qrIcon from "../../media/images/qr.svg";

export default function Button({ children, to }) {
  const ButtonContent = () => (
    <div className={styles.buttonWrapper}>
      <span className={styles.buttonText}>{children}</span>
      <div className={styles.part}></div> {/* Тут добавляем div */}
      <div className={styles.buttonCircle}>
        <img src={qrIcon} alt="icon" className={styles.buttonIcon} />
      </div>
    </div>
  );

  return to ? (
    <Link to={to} className={styles.button}>
      <ButtonContent />
    </Link>
  ) : (
    <button className={styles.button}>
      <ButtonContent />
    </button>
  );
}
