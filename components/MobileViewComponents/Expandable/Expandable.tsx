import { FC,useRef,useState } from "react";
import styles from "./Expandable.module.css";

interface AccordionItem {
  title: any;
  content: any;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Expandable: FC<AccordionProps> = ({ items = [] }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const isItemExpanded = (index: number) => {
    return expandedItems.includes(index);
  };

  return (
    <div className={styles["AccordionItems"]}>
      {items.map(({ title, content }, index) => {
        const expanded = isItemExpanded(index);

        return (
          <div
            key={title}
            style={{ overflow: "hidden", transition: "height 0.3s ease" }}
          >
            <div
              className={`${styles["AccordionPanel"]} ${
                expanded ? styles["Expanded"] : ""
              }`}
              onClick={() => toggleItem(index)}
            >
              <div className={styles["PointText"]}>{title}</div>
              <div className={styles["PointBox"]}>
                <div className={styles["PointDescription"]}>
                  {expanded ? (
                    <>
                      <button onClick={() => toggleItem(index)}>
                        View Less
                      </button>
                    </>
                  ) : (
                    <button onClick={() => toggleItem(index)}>View More</button>
                  )}
                </div>
              </div>
            </div>
            <div
              className={styles["ExpandContent"]}
              style={{
                height: expanded ? `${measureContentHeight(index)}px` : "0",
                marginTop: "5px",
              }}
              ref={(ref) => (contentRefs.current[index] = ref)}
            >
              <div className={styles["Content"]} style={{ maxWidth: "46vw" }}>
                {" "}
                {content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Expandable;
