import { useState } from "react";
import { mailInfo, officeInfo } from "./contactus.constants";
import styles from "./contactus.module.scss";
import ContactForm from "./contactForm";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.inquiryType)
      newErrors.inquiryType = "Please select an inquiry type";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, inquiryType, message } = formData;

    const queryParams = new URLSearchParams({
      fullName,
      email,
      inquiryType,
      message,
    }).toString();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzUYAL-vtls410N33EzbR5ovyg4z7l8x90iwVsH_wtIpMkSsIliCMf6SfPjxYfBU5ZiQQ/exec";

    try {
      const response = await fetch(`${scriptURL}?${queryParams}`);
      const result = await response.text();

      if (result === "Success") {
        alert("Form submitted successfully!");
        setFormData({ fullName: "", email: "", inquiryType: "", message: "" });
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <p className={styles.formHeader}>Let's Connect</p>
          <p className={styles.description}>
            Whether you're a client, partner, or future team member — we’d love
            to hear from you.
          </p>
          {<ContactForm />}
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.mailCard}>
          {mailInfo.map((mailItem, index) => {
            return (
              <div className={styles.mailItem} key={index}>
                <p className={styles.title}>{mailItem.title}</p>
                <p className={styles.email}>{mailItem.email}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.officeInfo}>
          <p className={styles.heading}>Office Info</p>
          {officeInfo.map((item, idx) => (
            <div key={idx} className={styles.infoWrapper}>
              <p className={styles.info}>{item.address}</p>
              <p className={styles.info}>{item.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
