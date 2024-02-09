"use client"
import Image,{ ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  src: ImageProps["src"];
  fallbackSrc: ImageProps["src"];
};

export const ImageWithFallback = (props: Props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState<any>(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
