import React from "react";
import styles from "./style.module.scss";

const teamMembers = [
  {
    name: "Mohit Gaba",
    role: "Managing Director",
    imgSrc: "/static/images/team/member1.png",
  },
  {
    name: "Vasu Srivastav",
    role: "CEO",
    imgSrc: "/static/images/team/member2.png",
  },
  {
    name: "Sandhya Gaur",
    role: "VP-Operations & Delivery",
    imgSrc: "/static/images/team/member3.png",
  },

  {
    name: "Palash Kasliwal",
    role: "Senior Manager-Accounts",
    imgSrc: "/static/images/team/member4.png",
  },
  {
    name: "Richa Sharma",
    role: "Community Manager",
    imgSrc: "/static/images/team/member5.png",
  },
  {
    name: "Sapna Srivastav",
    role: "UX/ UI Designer ",
    imgSrc: "/static/images/team/member6.png",
  },
  {
    name: "Gunjan Sharma",
    role: "Human Resource Business Partner",
    imgSrc: "/static/images/team/member7.png",
  },
  {
    name: " Priyanshi Jain",
    role: "HR Operations & Talent Management",
    imgSrc: "/static/images/team/member8.png",
  },
  {
    name: "BIRJIS R Alurkar",
    role: "KEY ACCOUNT MANAGER",
    imgSrc: "/static/images/team/member9.png",
  },
];

const LeadershipTeam = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>Technozis Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img
              src={member.imgSrc}
              alt={member.name}
              className={styles.teamImage}
            />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
