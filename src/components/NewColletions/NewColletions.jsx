import React from "react";
import styles from "./NewColletions.module.scss";
import SmallCard from "../SmallCard/SmallCard";
import BigCard from "../BigCard/BigCard";
import bigCardBackground from "../../media/images/bigCardBackground.svg";
import bigCardBackgroundGray from "../../media/images/bigCardBackgroundGray.svg";

export default function NewColletions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        New <span>Collections</span>
      </h2>
      <div className={styles.container__grid}>
        <SmallCard discount="-10%" />
        <BigCard backgroundImage={bigCardBackground} />
        <SmallCard discount="NEW" backgroundColor="#474646" />
        <SmallCard discount="NEW" backgroundColor="#474646" />
        <SmallCard discount="-10%" />
        <BigCard backgroundImage={bigCardBackgroundGray} />
      </div>
    </div>
  );
}
