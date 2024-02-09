import classes from "./MultiTextHeader.module.scss";

const MultiTextHeader: React.FC<{
  titleBlack: string;
  titleBlue: string;
  description: string;
}> = ({ titleBlack, titleBlue, description }) => (
  <div className={classes["Container"]}>
    <div className={classes["Title"]}>
      {titleBlack} <span className={classes["Blue"]}>{titleBlue}</span>
    </div>
    <div className={classes["Description"]}>{description}</div>
  </div>
);

export default MultiTextHeader;
