import { useEffect } from "react";
import styles from "./styles.module.scss";

const Popup = ({ isOpen, onClose, children, backgroundColor = "" }) => {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.popupOverlay)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popup} style={{ backgroundColor }}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
