import React from "react";
import styles from "./NewColletions.module.scss";
import SmallCard from "../SmallCard/SmallCard";
import BigCard from "../BigCard/BigCard";

export default function NewColletions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        New <span>Collections</span>
      </h2>
      <div className={styles.container__grid}>
        <SmallCard />
        <BigCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <BigCard />
      </div>
    </div>
  );
}
