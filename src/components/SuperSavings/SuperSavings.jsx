import React from "react";
import styles from "./SuperSavings.module.scss";
import Button from "../Button/Button";
import headerCircle from "../../media/images/headerCircle.svg";

export default function SuperSavings() {
  return (
    <div className={styles.container}>
      <img
        src={headerCircle}
        alt="header circle"
        className={styles.container__imgCircle}
      />
      <div className={styles.container__info}>
        <h2 className={styles.container__info__title}>
          Super <span>savings</span>
        </h2>
        <p className={styles.container__info__paragraph}>
          Our Super Saving Modern Bed collection offers the perfect blend of
          quality, affordability, and contemporary style. Whether you're
          redecorating your home or looking for a budget-friendly upgrade, our
          selection of modern sofas is designed to meet your needs and exceed
          your expectations.
        </p>
        <Button variant="alternative">Order Now</Button>
      </div>
    </div>
  );
}
