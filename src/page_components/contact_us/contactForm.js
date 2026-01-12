"use client";
import styles from "./contactus.module.scss";
import { useState } from "react";

export default function ContactForm({ isMobile = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    const form = e.target;

    const payload = {
      fullName: form.fullName.value,
      email: form.email.value,
      inquiryType: form.inquiryType.value,
      message: form.message.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxf7UIFPIE8Psy29ccW-NGvOg2uDRkWqjgdvdcePf83i0F8h03_DEf271huYbyrn_XkBg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: "no-cors",
        }
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label>
          Full Name
          <input type="text" name="fullName" required />
        </label>

        <label>
          Email ID*
          <input type="email" name="email" required />
        </label>

        <label>
          Inquiry Type*
          <select name="inquiryType" required>
            <option value="">Please Select</option>
            <option value="partner">ServiceNow Partner Inquiry</option>
            <option value="vendor">Vendor Registration</option>
            <option value="general">General Inquiry</option>
            <option value="careers">Hiring / Careers</option>
          </select>
        </label>

        <label>
          Message
          <textarea name="message" rows="4" />
        </label>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {loading && <p className={styles.loader}>Please wait...</p>}

        {submitted && !loading && (
          <p style={{ color: "rgba(48, 126, 244, 1)" }}>
            Form Submitted Successfully!
          </p>
        )}
      </form>
    </>
  );
}
