import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import JobCardSection from "./jobCard";
import JobApplicationForm from "./jobApplyForm";
import Popup from "@/modules/pop_up";
import AvatarCards from "./avatarCards";
import styles from "./styles/style.module.scss";
import JobDescription from "./jobDescription";

const OpportunitiesPage = () => {
  const [jobs, setJobs] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openFormSegment, setOpenFormSegment] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const [genericMode, setGenericMode] = useState(false);
  const router = useRouter();

  const openForm = (job) => {
    setGenericMode(false);
    setSelectedJob(job || {});
    setOpenPopup(false);
    setOpenFormSegment(true);

    // push URL state so Back works
    router.push(
      { pathname: router.pathname, query: { form: "open", jobId: job?.id } },
      undefined,
      { shallow: true }
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewJobClick = (job) => {
    setSelectedJob(job);
    setOpenPopup(true);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    const { form, jobId } = router.query;

    // Ensure jobs is an array before using .find
    const jobList = Array.isArray(jobs) ? jobs : [];

    if (form === "open") {
      const job = jobList.find((j) => String(j.id) === String(jobId)) || null;

      if (job) {
        setGenericMode(false);
        setSelectedJob(job);
      } else {
        setGenericMode(true);
      }
      setOpenFormSegment(true);
      setOpenPopup(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // When query disappears (Back/Forward), close the form & popup
      setOpenFormSegment(false);
      setOpenPopup(false);
      setGenericMode(false);
      setSelectedJob({});
    }
  }, [router.isReady, router.query, jobs]);

  return (
    <>
      {openFormSegment ? (
        <JobApplicationForm
          job={selectedJob}
          genericMode={genericMode}
          handleViewJobClick={genericMode ? undefined : handleViewJobClick}
        />
      ) : (
        <div className={styles.opportunititesPage}>
          <div className={styles.opportunitiesHero}>
            <p className={styles.heading}>Join Our Growing Team</p>
            <p className={styles.subHeading}>
              Whether you’re a developer, designer, consultant, architect, or{" "}
              <br />
              tech enthusiast, there’s a place for you at Technozis.
            </p>
            <AvatarCards />
          </div>
          <div className={styles.openPostionContainer}>
            <p className={styles.openPositionHeading}>Currently Hiring</p>
            <p className={styles.openPositionSubHeading}>
              Explore all jobs opportunities and find your fit{" "}
            </p>

            <JobCardSection
              jobs={jobs}
              openForm={openForm}
              handleViewJobClick={handleViewJobClick}
            />
          </div>
        </div>
      )}

      <Popup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
        backgroundColor={"rgba(0, 52, 228, 1)"}
      >
        <JobDescription job={selectedJob} openForm={openForm} />
      </Popup>
    </>
  );
};

export default OpportunitiesPage;
