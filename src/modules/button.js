import { noop } from "lodash";
import styles from "./styles/style.module.scss";
const Button = ({
  text = "",
  bgColor = "#fff",
  color = "#262626",
  width = "",
  borderRadius = "",
  handleButtonClick = noop,
  icon = "",
}) => {
  return (
    <div
      className={`${styles.buttonContainer} ${styles[width]}`}
      style={{
        background: bgColor,
        color: color,
        borderRadius: borderRadius,
        cursor: "pointer",
      }}
      onClick={handleButtonClick}
    >
      {text}
      {icon && <img src={icon} alt="Go here" style={{ marginLeft: "5px" }} />}
    </div>
  );
};

export default Button;
