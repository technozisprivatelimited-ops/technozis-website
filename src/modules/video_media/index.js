import { useRef, useState, useEffect } from "react";
import styles from "./style.module.scss";
import { FaCirclePlay } from "react-icons/fa6";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [marginSides, setMarginSides] = useState(100); // Initial left and right margin
  const videoRef = useRef(null);

  // Toggle Play/Pause
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Adjust left and right margin on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate visibility percentage
        const visiblePercentage = Math.max(
          0,
          Math.min((windowHeight - rect.top) / windowHeight, 1)
        );

        // Update left and right margins based on visibility
        const newMargin = Math.max(0, 110 - visiblePercentage * 100);
        setMarginSides(newMargin);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.videoSection}>
      <div
        className={styles.videoContainer}
        style={{
          marginLeft: `${marginSides}px`,
          marginRight: `${marginSides}px`,
        }}
        ref={videoRef}
      >
        {/* Video Element */}
        <video
          className={styles.video}
          controls
          poster="/static/images/landing-page-vedio-thumbnail.png"
        >
          <source src="/static/videos/landing-page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Button */}
        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={togglePlayPause}>
            {isPlaying ? null : <FaCirclePlay />}
          </button>
        </div>
      </div>
    </section>
  );
}
