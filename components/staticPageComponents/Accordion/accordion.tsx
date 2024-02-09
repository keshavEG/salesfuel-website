/* eslint-disable react/prop-types */
import DownArrow from "@/assets/images/Group-3.svg";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styles from "./accordion.module.css";

interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  accordionData: AccordionItem[];
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
}

const AccordionComponent: React.FC<Props> = ({
  accordionData,
  activeIndex,
  setActiveIndex,
}) => {
  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles["accordion"]}>
      {accordionData.map((item, index) => (
        <div
          className={`${styles["accordionItem"]} ${
            activeIndex === index ? styles["active"] : ""
          }`}
          key={index}
        >
          <div
            className={styles["accordionTitle"]}
            onClick={() => handleClick(index)}
          >
            <div className={styles["itemTitle"]}>{item.title}</div>
            <Image
              src={DownArrow}
              alt="arrow"
              className={`${styles["arrowIcon"]} ${
                activeIndex === index ? styles["activeArrow"] : ""
              }`}
              onClick={() => handleClick(index)}
            />
          </div>
          <div className={styles["accordionContent"]}>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
