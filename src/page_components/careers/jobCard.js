import React from "react";
import styles from "./styles/style.module.scss";
import { isEmpty, noop } from "lodash";
import SkeletonCard from "./skeletonLoader/skeletonCard";

const JobCardSection = ({
  jobs = [],
  openForm = noop,
  handleViewJobClick = noop,
}) => {
  const jobList = Array.isArray(jobs) ? jobs : [];

  if (isEmpty(jobList)) {
    return <SkeletonCard />;
  }

  return (
    <div className={styles.cardGrid}>
      {jobList.map((job, idx) => (
        <div key={idx} className={styles.card}>
          <h2>{job.title}</h2>
          <p className={styles.description}>{job.description}</p>
          <div className={styles.meta}>
            <span>{job.type}</span>
            <span>{job.location}</span>
            <span>{job.experience}</span>
          </div>
          <span onClick={() => openForm(job)} className={styles.applyBtn}>
            Apply Now
          </span>
          <span
            className={styles.viewJobBtn}
            onClick={() => handleViewJobClick(job)}
          >
            View Job
          </span>
        </div>
      ))}
    </div>
  );
};

export default JobCardSection;
