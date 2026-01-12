// components/TiltedCards.js
import useMedia from "@/hooks/useMedia";
import styles from "./styles/style.module.scss";

const avatars = [
  {
    src: "/static/images/careers/avatar-1.png",
    label: "Hi, Future Teammate!",
  },
  {
    src: "/static/images/careers/avatar-2.png",
    label: "Glad to Have You Here!",
  },
  {
    src: "/static/images/careers/avatar-3.png",
    label: "Let's Build Something Amazing!",
  },
  {
    src: "/static/images/careers/avatar-4.png",
    label: "Your Next Big Step Starts Here!",
  },
  {
    src: "/static/images/careers/avatar-5.png",
    label: "Excited to Work With You!",
  },
];

const AvatarCards = () => {
  const { isMobile } = useMedia();

  const rotations = ["-16deg", "10deg", "-10deg", "12deg", "-2deg"];

  return isMobile ? (
    <div className={styles.avatarGrid}>
      {avatars.map((avatar, index) => (
        <div key={index} className={`${styles.card} ${styles[`card${index}`]}`}>
          <img src={avatar.src} alt={avatar.label} />
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.avatarWrapper}>
      {avatars.map((item, i) => (
        <div
          key={i}
          className={styles.avatarContainer}
          style={{ transform: `rotate(${rotations[i] || "0deg"})` }}
        >
          <div className={styles.card}>
            <img src={item.src} alt={`avatar-${i}`} />
          </div>
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AvatarCards;
