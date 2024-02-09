/* eslint-disable react/prop-types */
import styles from "./TitleDesc.module.css";

export const TitleDesc = ({ title, description }: any): JSX.Element => {
  return (
    <div className={styles["MainContainer"]}>
      <h3 className={styles["titleName"]}>{title}</h3>
      <div className={styles["descname"]}>{description}</div>
    </div>
  );
};
