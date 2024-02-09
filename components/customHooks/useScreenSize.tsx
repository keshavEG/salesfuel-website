"use client";
import { useEffect, useState } from "react";

const useDeviceSize = (): [boolean] => {
  const [deviceSize, setDeviceSize] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = (): void => {
      const width = window.innerWidth;
      const size = width < 500 ? "small" : width < 1024 ? "medium" : "large";
      setDeviceSize(size);
    };

    handleResize(); // Initial device size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [deviceSize === "small"];
};

export default useDeviceSize;
