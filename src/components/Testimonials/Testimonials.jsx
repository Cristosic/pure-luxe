import React from "react";
import styles from "./Testimonials.module.scss";
import reviewImg from "../../media/images/reviewImg.png";
import starIcon from "../../media/icons/starIcon.svg";
import arrowLeftIcon from "../../media/icons/arrowLeftIcon.svg";
import arrowRightIcon from "../../media/icons/arrowRightIcon.svg";

export default function Testimonials() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        Client
        <span>TESTIMONIALS</span>
      </h1>
      <div className={styles.container__arrowLeft}>
        <img src={arrowLeftIcon} alt="Arrow Left Icon" />
      </div>
      <div className={styles.container__card}>
        <div className={styles.container__card__img}>
          <img src={reviewImg} alt="review img" />
        </div>
        <div className={styles.container__card__information}>
          <div className={styles.container__card__information__container}>
            <div className={styles.container__card__information__reviewsStars}>
              <img src={starIcon} alt="Star Icon" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" />
            </div>
            <h5 className={styles.container__card__information__rating}>5.0</h5>
          </div>

          <p>
            “I recently purchased the “Nebula Sofa” from this site, and I
            couldn't be happier! The design is sleek and futuristic, blending
            perfectly with our minimalist decor. Delivery was prompt, and the
            setup was a breeze. Highly recommend for anyone looking to upgrade
            their living space!”
          </p>
          <h5>Ryan Timpson</h5>
        </div>
      </div>
      <div className={styles.container__arrowRight}>
        <img src={arrowRightIcon} alt="Arrow Right Icon" />
      </div>
    </div>
  );
}
