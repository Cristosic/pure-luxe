import React from "react";
import styles from "./Header.module.scss";
import headerSofa from "../../media/images/headerSofa.png";
import Button from "../Button/Button";
import headerCircle from "../../media/images/headerCircle.svg";

export default function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerContainer__h1}>
          Embrace <span>Comfort</span> Home Living
        </h1>
        <img
          src={headerCircle}
          alt="header circle"
          className={styles.headerContainer__imgCircle}
        />
        <img
          src={headerSofa}
          alt="header sofa"
          className={styles.headerContainer__img}
        />
        <span className={styles.headerContainer__span1}>pure</span>
        <span className={styles.headerContainer__span2}>luxe</span>
        <div className={styles.ourResults}>
          <div className={styles.ourResults__div}>
            <h4>150k+</h4>
            <p>Happy customers</p>
          </div>
          <div className={styles.ourResults__div}>
            <h4>300k+</h4>
            <p>Products Sold</p>
          </div>
          <div className={styles.ourResults__div}>
            <h4>500k+</h4>
            <p>Successful Deliveries</p>
          </div>
          <div className={styles.ourResults__div}>
            <h4>100k+</h4>
            <p>Positive Reviews</p>
          </div>
          <div className={styles.ourResults__div}>
            <h4>250k+</h4>
            <p>Loyal Members</p>
          </div>
        </div>
        <div className={styles.headerContainer__button}>
          <Button to="/categories">Catalogue</Button>
        </div>
      </div>
    </header>
  );
}
