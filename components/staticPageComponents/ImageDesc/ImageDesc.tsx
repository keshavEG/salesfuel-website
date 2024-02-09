/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import Image from "next/image";
import styles from "./ImageDesc.module.css";
interface ImageDescProps {
  imageSrc: any;
  title: string;
  subheading: string;
}

const ImageDesc: React.FC<ImageDescProps> = ({
  imageSrc,
  title,
  subheading,
}) => {
  return (
    <div className={styles["wrapper"]}>
      <Image src={imageSrc} alt="My Image" className={styles["image"]} />
      <h2 className={styles["title"]}>{title}</h2>
      <span className={styles["title2"]}>{subheading}</span>
    </div>
  );
};

export default ImageDesc;
