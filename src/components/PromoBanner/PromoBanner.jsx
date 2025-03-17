import React from "react";
import styles from "./PromoBanner.module.scss";
import promoBannerImg1 from "../../media/images/promoBannerImg1.png";
import promoBannerImg2 from "../../media/images/promoBannerImg2.png";

export default function PromoBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <img src={promoBannerImg1} alt="banner" />
      </div>
      <h1 className={styles.container__title}>
        Experience Pure Comfort <br /> Watch our <span>videous</span>
      </h1>
      <div className={styles.container__img}>
        <img src={promoBannerImg2} alt="banner" />
      </div>
    </div>
  );
}
