/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */

import RightArrow from "@/assets/images/RightArrow.svg";
import Image from "next/image";
import styles from "./IconButton.module.css";
interface IconButtonProps {
  iconName: any;
  ImageText: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, ImageText }) => {
  return (
    <button className={styles["ImgButton"]}>
      <Image src={iconName} alt="Image not available" />
      <span className={styles["ButtonText"]}>{ImageText}</span>
      <Image src={RightArrow} alt="Image not available" />
    </button>
  );
};

export default IconButton;
