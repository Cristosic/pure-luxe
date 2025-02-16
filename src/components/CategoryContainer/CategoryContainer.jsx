import React from "react";
import styles from "./CategoryContainer.module.scss";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoryContainer() {
  return (
    <div className={styles.categoryContainer}>
      <h2 className={styles.categoryContainer__title}>
        Our <span>Collections</span>
      </h2>
      <div className={styles.categoryContainer__card}>
        <CategoryCard />
      </div>
    </div>
  );
}
