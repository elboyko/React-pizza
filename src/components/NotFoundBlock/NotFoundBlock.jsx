import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.title}>
      <h2>
        <span>😕</span>
        <br /> <br />
        Ничего не найдено
      </h2>
      <p className={styles.description}>Данная страница отсутствует</p>
    </div>
  );
};
export default NotFoundBlock;
