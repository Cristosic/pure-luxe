import React from "react";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__h2}>
        Why choose <span>us</span>
      </h2>
      <div className={styles.container__content}>
        <div className={styles.container__content__card}>
          <h3>
            <span>Customization</span>
            <br />
            Options
          </h3>
          <p>
            We understand that every home is unique. Choose from a variety of
            fabrics, colors, and configurations to create a sofa that fits your
            style and needs perfectly.
          </p>
        </div>
        <div className={styles.container__content__card}>
          <h3>
            <span>Contemporary</span> Designs
          </h3>
          <p>
            Our collection features the latest trends in modern design, allowing
            you to find the perfect sofa that complements your aesthetic and
            enhances your living space.
          </p>
        </div>
        <div className={styles.container__content__card}>
          <h3>
            <span>Hassle-Free</span>
            <br />
            Shopping
          </h3>
          <p>
            Enjoy a seamless online shopping experience with easy navigation,
            detailed product descriptions, and high-quality images to help you
            make informed decisions.
          </p>
        </div>
        <div className={styles.container__content__card}>
          <h3>
            <span>Unmatched</span> Quality
          </h3>
          <p>
            We source premium materials to ensure our sofas are not only stylish
            but built to last. Each piece is crafted with attention to detail
            for durability and comfort.
          </p>
        </div>
      </div>
    </div>
  );
}
