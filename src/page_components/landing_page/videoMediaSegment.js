import VideoSection from "@/modules/video_media";
import styles from "./styles/style.module.scss";

const VedioMediaSegment = () => {
  return (
    <div className={styles.videoMediaSegment}>
      <div className={styles.upperSegment}>
        <div className={styles.segmentTitle}>
          <h2>Bridge the Gap Between Vision and Reality</h2>
        </div>
        <div className={styles.segementSideContent}>
          At Technozis, we don’t just connect people and ideas — we help them
          grow into real-world innovations. Whether you're building a product,
          scaling a team, or searching for the right opportunity, we’re here to
          turn your vision into momentum.
        </div>
      </div>
      <VideoSection />
    </div>
  );
};
export default VedioMediaSegment;
