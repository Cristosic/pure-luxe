import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import qrIcon from "../../media/images/qr.svg";
import classNames from "classnames";

export default function Button({ children, to, variant = "default" }) {
  const ButtonContent = () => (
    <div
      className={classNames(styles.buttonWrapper, {
        [styles.buttonWrapper__innerButton__alternative]:
          variant === "alternative",
      })}
    >
      <div className={styles.buttonWrapper__innerButton}>
        <span className={styles.buttonWrapper__innerButton__text}>
          {children}
        </span>
        {variant === "default" && (
          <div className={styles.buttonWrapper__innerButton__part}></div>
        )}
        {variant === "default" && (
          <div className={styles.buttonWrapper__innerButton__circle}>
            <img
              src={qrIcon}
              alt="icon"
              className={styles.buttonWrapper__innerButton__icon}
            />
          </div>
        )}
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
