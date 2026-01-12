import React, { useState } from "react";
import styles from "./style.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const faqs = [
  {
    question: "What solutions and services does Technozis provide?",
    answer:
      "Technozis delivers comprehensive technology consulting and implementation services across a wide range of domains. Our expertise spans ServiceNow, Salesforce, Data Analytics & Business Intelligence, Oracle, SAP, Cloud & Infrastructure, Mobility & Application Development, Blockchain & Web3, as well as advanced technologies like Artificial Intelligence, Quantum Computing, and Augmented Reality.",
  },
  {
    question:
      "How does Technozis ensure the success of technology initiatives?",
    answer:
      "We adopt a structured, outcome-driven approach that focuses on understanding client objectives, designing tailored solutions, and executing with precision. Our process includes detailed requirement analysis, solution architecture, implementation, rigorous quality testing, and post-deployment support to ensure measurable business impact.",
  },
  {
    question:
      "Can Technozis deliver customized solutions for complex business needs?",
    answer:
      "Yes. Technozis specializes in delivering end-to-end, customized technology solutions designed to solve complex challenges and drive innovation. From enterprise system integrations to AI-driven analytics and secure, scalable cloud infrastructure, our solutions are tailored to meet unique organizational goals.",
  },
  {
    question: "What industries benefit from Technozis solutions?",
    answer:
      "Technozis serves a diverse range of industries, including finance, healthcare, manufacturing, retail, logistics, and technology-driven enterprises. Our deep domain knowledge enables us to align solutions with industry-specific challenges and deliver measurable outcomes.",
  },
  {
    question:
      "Why should businesses choose Technozis as their technology partner?",
    answer:
      "Technozis is committed to delivering innovation, reliability, and long-term value. With our cross-domain expertise, focus on future-ready technologies, and client-centric approach, we help businesses accelerate digital transformation, optimize operations, and gain a competitive edge.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Single index

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.heading}>
        <h2>Frequently asked questions</h2>
        <p>
          Find answers to common questions about training and enhancing
          high-quality LLMs.
        </p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openIndex === index ? styles.active : ""
            }`}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <TiArrowSortedUp size={20} />
              ) : (
                <TiArrowSortedDown size={20} />
              )}
            </div>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
