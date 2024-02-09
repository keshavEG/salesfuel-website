import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import ArrowIcon from "../../../assets/mobileview/arrow.svg";
import styles from "./Accordion.module.css";

interface AccordionItem {
  title: any;
  content: any;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: FC<AccordionProps> = ({ items = [] }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, items.length);
  }, [items]);

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const measureContentHeight = (index: number) => {
    if (contentRefs.current[index]) {
      return contentRefs.current[index].scrollHeight;
    }
    return 0;
  };

  return (
    <div className={styles["AccordionItems"]}>
      {items.map(({ title, content }, index) => (
        <div
          key={title}
          style={{ overflow: "hidden", transition: "height 0.3s ease" }}
        >
          <div
            className={`${styles["AccordionPanel"]} ${expandedItems.includes(index) ? styles["Expanded"] : ""
              }`}
            onClick={() => toggleItem(index)}
          >
            <div>
              <Image
                style={{
                  transform: expandedItems.includes(index)
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                }}
                src={ArrowIcon}
                alt=""
              />
            </div>
            <div className={styles["PointText"]}>{title}</div>
          </div>
          <div
            className={styles["ExpandContent"]}
            style={{
              height: expandedItems.includes(index)
                ? `${measureContentHeight(index)}px`
                : "0",
              paddingLeft: "7.4vw",
              marginTop: "5px",
            }}
            ref={(ref) => (contentRefs.current[index] = ref)}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
