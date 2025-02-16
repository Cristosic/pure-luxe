import React from "react";
import styles from "./CategoryCard.module.scss";
import arrowUpIcon from "../../media/icons/arrowUpIcon.svg";
import image1 from "../../media/categoryImg/image1.png";
import image2 from "../../media/categoryImg/image2.png";
import image3 from "../../media/categoryImg/image3.png";

export default function CategoryCard() {
  return (
    <>
      <div className={styles.categoryCard}>
        <div className={styles.categoryCard__imgAndButton}>
          <img
            src={image1}
            alt="categories img"
            className={styles.categoryCard__imgAndButton__img}
          />
          <button className={styles.categoryCard__imgAndButton__button}>
            <img src={arrowUpIcon} alt="arrow icon" />
          </button>
        </div>
        <h4 className={styles.categoryCard__title}>Modern Lounge chairs</h4>
      </div>

      <div className={styles.categoryCard}>
        <div className={styles.categoryCard__imgAndButton}>
          <img
            src={image2}
            alt="categories img"
            className={styles.categoryCard__imgAndButton__img}
          />
          <button className={styles.categoryCard__imgAndButton__button}>
            <img src={arrowUpIcon} alt="arrow icon" />
          </button>
        </div>
        <h4 className={styles.categoryCard__title}>Modern Sofas</h4>
      </div>

      <div className={styles.categoryCard}>
        <div className={styles.categoryCard__imgAndButton}>
          <img
            src={image3}
            alt="categories img"
            className={styles.categoryCard__imgAndButton__img}
          />
          <button className={styles.categoryCard__imgAndButton__button}>
            <img src={arrowUpIcon} alt="arrow icon" />
          </button>
        </div>
        <h4 className={styles.categoryCard__title}>Modern Beds</h4>
      </div>
    </>
  );
}
