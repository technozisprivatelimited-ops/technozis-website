import { useRef, useState } from "react";
import styles from "./styles/style.module.scss";
import { noop } from "lodash";
import Button from "@/modules/button";

export default function JobApplicationForm({
  job = {},
  handleViewJobClick = noop,
  genericMode = false,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: job?.title || "",
    experience: "",
    skills: "",
    resume: null,
    noticePeriod: "",
    currentLocation: "",
    preferredLocation: "",
    currentCTC: "",
    expectedCTC: "",
    agree: false,
    isReferred: "no",
    referrerEmail: "",
    c2hInterest: false, // ✅ NEW FIELD
  });

  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const successRef = useRef(null);
  const fileInputRef = useRef(null);

  const validate = () => {
    const errs = {};

    if (!formData.fullName.trim())
      errs.fullName = "Please enter your full name";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Please enter a valid email address";

    if (!/^\+?\d{10,15}$/.test(formData.phone))
      errs.phone = "Please enter a valid phone number";

    if (!formData.role.trim())
      errs.role = "Please specify the role you’re applying for";

    if (!/^\d+(\.\d{1,2})?$/.test(formData.experience))
      errs.experience = "Enter a valid number of years";

    if (!formData.skills.trim())
      errs.skills = "List at least one skill or technology";
    else if (formData.skills.split(",").length < 1)
      errs.skills = "Please enter skills separated by commas";

    if (!formData.noticePeriod.trim())
      errs.noticePeriod = "Please enter your notice period";

    if (!formData.currentLocation.trim())
      errs.currentLocation = "Please enter your current location";

    if (!formData.preferredLocation.trim())
      errs.preferredLocation = "Please enter your preferred location";

    if (!formData.currentCTC.trim())
      errs.currentCTC = "Please enter your current CTC";

    if (!formData.expectedCTC.trim())
      errs.expectedCTC = "Please enter your expected CTC";

    if (!formData.resume) {
      errs.resume = "File is required.";
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(formData.resume.type)
    ) {
      errs.resume = "Please upload a valid file format (.pdf or .doc only)";
    } else if (formData.resume.size > 1048576) {
      errs.resume = "File size should not exceed 1MB";
    }

    if (formData.isReferred === "yes") {
      if (!formData.referrerEmail.trim()) {
        errs.referrerEmail = "Please enter the referrer’s email address";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referrerEmail)) {
        errs.referrerEmail = "Please enter a valid referrer email address";
      }
    }

    if (!formData.agree) errs.agree = "You must agree before submitting.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validate()) {
      setLoading(false);
      return;
    }

    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("jobTitle", formData.role);
    formPayload.append("experienceYears", formData.experience);
    formPayload.append("skills", formData.skills);
    formPayload.append("noticePeriod", formData.noticePeriod);
    formPayload.append("currentLocation", formData.currentLocation);
    formPayload.append("preferredLocation", formData.preferredLocation);
    formPayload.append("currentCTC", formData.currentCTC);
    formPayload.append("expectedCTC", formData.expectedCTC);
    formPayload.append("consent", formData.agree);
    formPayload.append("resume", formData.resume);
    formPayload.append("isReferred", formData.isReferred);
    formPayload.append("c2hInterest", formData.c2hInterest); // ✅ NEW FIELD

    if (formData.isReferred === "yes") {
      formPayload.append("referrerEmail", formData.referrerEmail);
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();
      if (response.ok) {
        setSubmissionSuccess(true);
        setLoading(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          role: job?.title || "",
          experience: "",
          skills: "",
          resume: null,
          noticePeriod: "",
          currentLocation: "",
          preferredLocation: "",
          currentCTC: "",
          expectedCTC: "",
          agree: false,
          isReferred: "no",
          referrerEmail: "",
          c2hInterest: false, // reset
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
        setTimeout(() => {
          if (successRef.current) {
            successRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        alert("Something went wrong. Please try again.");
        setSubmissionSuccess(false);
        setLoading(false);
      }
    } catch (error) {
      alert("Submission failed. Please try later.");
      setSubmissionSuccess(false);
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    const whatsappLink = "https://chat.whatsapp.com/Bu7OFoBvzV77wVNKyoiUjA";
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {loading && (
        <div className={styles.loaderOverlay}>
          <div className={styles.loader}></div>
        </div>
      )}
      <div className={styles.jobApplicationWrapper}>
        <div className={styles.topSection}>
          <div className={styles.topSectionWrapper}>
            <div className={styles.left}>
              <h1>{job?.title || "Job Application Form"}</h1>
              {!genericMode && (
                <div className={styles.meta}>
                  {job?.type && <span>{job.type}</span>}
                  {job?.location && <span>{job.location}</span>}
                  {job?.experience && <span>{job.experience}</span>}
                </div>
              )}
            </div>
            {!genericMode && (
              <div className={styles.right}>
                <p
                  onClick={() => handleViewJobClick(job)}
                  className={styles.viewJobCta}
                >
                  View Job Description
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.formWrapper}>
          <h2>Application Form</h2>
          <p>* Required</p>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            {/* --- Full Name --- */}
            <label>Full Name*</label>
            <input
              name="fullName"
              placeholder="e.g. Priya Sharma"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className={styles.error}>{errors.fullName}</div>
            )}

            {/* --- Email --- */}
            <label>Email Address*</label>
            <input
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}

            {/* --- Phone --- */}
            <label>Contact Number*</label>
            <input
              name="phone"
              placeholder="+91 XXXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className={styles.error}>{errors.phone}</div>}

            {/* --- Role --- */}
            <label>Role You’re Applying For*</label>
            <input
              name="role"
              placeholder="Enter role"
              value={formData.role || job?.title || ""}
              onChange={handleChange}
            />
            {errors.role && <div className={styles.error}>{errors.role}</div>}

            {/* --- Experience --- */}
            <label>Total Experience (Years)*</label>
            <input
              name="experience"
              placeholder="e.g. 5"
              value={formData.experience}
              onChange={handleChange}
            />
            {errors.experience && (
              <div className={styles.error}>{errors.experience}</div>
            )}

            {/* --- Skills --- */}
            <label>Key Skills*</label>
            <input
              name="skills"
              placeholder="Enter your key skills comma separated!"
              value={formData.skills}
              onChange={handleChange}
            />
            {errors.skills && (
              <div className={styles.error}>{errors.skills}</div>
            )}

            {/* --- Referral --- */}
            <label>Are you referred by someone?*</label>
            <select
              name="isReferred"
              value={formData.isReferred}
              onChange={handleChange}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {formData.isReferred === "yes" && (
              <>
                <label>Referrer’s Email Address*</label>
                <input
                  name="referrerEmail"
                  placeholder="referrer@example.com"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                />
                {errors.referrerEmail && (
                  <div className={styles.error}>{errors.referrerEmail}</div>
                )}
              </>
            )}

            {/* --- Notice Period --- */}
            <label>Notice Period*</label>
            <input
              name="noticePeriod"
              placeholder="e.g. 2 months"
              value={formData.noticePeriod}
              onChange={handleChange}
            />
            {errors.noticePeriod && (
              <div className={styles.error}>{errors.noticePeriod}</div>
            )}

            {/* --- Current Location --- */}
            <label>Current Location*</label>
            <input
              name="currentLocation"
              placeholder="e.g. Bangalore"
              value={formData.currentLocation}
              onChange={handleChange}
            />
            {errors.currentLocation && (
              <div className={styles.error}>{errors.currentLocation}</div>
            )}

            {/* --- Preferred Location --- */}
            <label>Preferred Location*</label>
            <input
              name="preferredLocation"
              placeholder="e.g. Remote / Mumbai"
              value={formData.preferredLocation}
              onChange={handleChange}
            />
            {errors.preferredLocation && (
              <div className={styles.error}>{errors.preferredLocation}</div>
            )}

            {/* --- Current CTC --- */}
            <label>Current CTC (in ₹)*</label>
            <input
              name="currentCTC"
              placeholder="e.g. 12 LPA"
              value={formData.currentCTC}
              onChange={handleChange}
            />
            {errors.currentCTC && (
              <div className={styles.error}>{errors.currentCTC}</div>
            )}

            {/* --- Expected CTC --- */}
            <label>Expected CTC (in ₹)*</label>
            <input
              name="expectedCTC"
              placeholder="e.g. 16 LPA"
              value={formData.expectedCTC}
              onChange={handleChange}
            />
            {errors.expectedCTC && (
              <div className={styles.error}>{errors.expectedCTC}</div>
            )}

            {/* --- Resume Upload --- */}
            <label>Upload Resume*</label>
            <div className={styles.fileUploadBox}>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                ref={fileInputRef}
              />
              {formData.resume && (
                <p className={styles.uploadedText}>
                  Successfully Uploaded: {formData.resume.name}
                </p>
              )}
            </div>
            {errors.resume && (
              <div className={styles.error}>{errors.resume}</div>
            )}

            {/* --- C2H Interest --- */}
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="c2hInterest"
                checked={formData.c2hInterest}
                onChange={handleChange}
              />
              <label>Interested in C2H (Contract to Hire) opportunity</label>
            </div>

            {/* --- Consent --- */}
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label>
                I agree to the Terms & Conditions and consent to my information
                being used for recruitment purposes.
              </label>
            </div>
            {errors.agree && <div className={styles.error}>{errors.agree}</div>}

            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {!submissionSuccess && (
        <div className={styles.submissionSuccessWrapper} ref={successRef}>
          <div className={styles.submissionSuccessCard}>
            <div className={styles.submissionSuccessLeft}>
              <h1>Application Received!</h1>
              <p>
                Our Hiring team has received your details and will get in touch
                with you soon.
              </p>
              <p>
                Until then, stay connected with us on LinkedIn and don’t forget
                to check out our open roles regularly.
              </p>
              <p>
                Keep building. Keep learning. <br />
                <strong>– Team Technozis</strong>
              </p>
              <Button
                text="Join Our Community "
                borderRadius="40px"
                icon="/static/images/careers/open-in-new.svg"
                handleButtonClick={handleButtonClick}
              />
            </div>
            <div className={styles.submissionSuccessRight}>
              <img src="/static/images/careers/thumbs-up.svg" alt="thumbs up" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
