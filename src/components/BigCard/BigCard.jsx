import React from "react";
import styles from "./BigCard.module.scss";
import heartIcon from "../../media/icons/heartIcon.svg";
import cartIcon from "../../media/icons/cartIcon.svg";
import productImg2 from "../../media/images/productimg2.png";

export default function BigCard() {
  return (
    <div className={styles.container}>
      <div className={styles.container__iconsAndDiscount}>
        <div className={styles.container__iconsAndDiscount__icons}>
          <img src={heartIcon} alt="heart icon" />
          <img src={cartIcon} alt="cart icon" />
        </div>
        <div className={styles.container__iconsAndDiscount__discount}>-10%</div>
      </div>
      <img
        src={productImg2}
        alt="product img"
        className={styles.container__product}
      />
      <div className={styles.container__info}>
        <p className={styles.container__info__title}>
          Joseph living/bedroom chair
        </p>
        <span className={styles.container__info__price}>$345</span>
      </div>
    </div>
  );
}
