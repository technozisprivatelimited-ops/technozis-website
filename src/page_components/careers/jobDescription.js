import { isEmpty, noop } from "lodash";
import styles from "./styles/style.module.scss";

export default function JobDescription({ job = {}, openForm = noop }) {
  const {
    title = "",
    about = "",
    responsibilities = [],
    qualifications = [],
    offer = [],
    type = "",
    location = "",
    experience = "",
  } = job;

  return (
    <div className={styles.jobDescriptionContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subheading}>About the job</h2>
        <p className={styles.text}>{about}</p>

        <h3 className={styles.roleTitle}>The Role</h3>
        <h4 className={styles.sectionTitle}>You Will Be Responsible For</h4>
        <ul className={styles.list}>
          {!isEmpty(responsibilities) &&
            responsibilities.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

        <h4 className={styles.sectionTitle}>
          Required Skills & Qualifications
        </h4>
        <ul className={styles.list}>
          {qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h4 className={styles.sectionTitle}>What’s on Offer?</h4>
        <ul className={styles.list}>
          {offer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className={styles.footer}>
          <span>{type}</span>
          <span>{location}</span>
          <span>{experience}</span>
          <button className={styles.applyBtn} onClick={() => openForm(job)}>
            Apply Now ➝
          </button>
        </div>
      </div>
    </div>
  );
}
