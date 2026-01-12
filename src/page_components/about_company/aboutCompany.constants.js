export const heroData = {
  main: {
    title: "About Us",
    description:
      "At Technozis, we’re not just solving problems — we’re enabling possibility. <br/>We are a global technology company driven by a passion for empowering businesses <br/>and professionals through innovative ServiceNow solutions and digital transformation services. <br />With a strong focus on community, collaboration, and career growth, we’ve built an ecosystem <br />that thrives on trust, expertise, and relentless curiosity.",
    descriptionFont: { size: "16px" },
    bgColor: "#000",
    bgMainImg: {
      desktop: "/static/images/about-us-hero.png",
      mobile: "/static/images/about-us-mobile.png",
    },
    textAlign: "left",
  },
};

export const servicesData = {
  header: "Our Services",
  bgColor: "#000",
  iconBgColor: "rgba(255, 255, 255, 0.12)",
  cardHoverColor: "rgba(255, 255, 255, 0.12)",
  detailsTiles: [
    {
      icon: "/static/images/services/service-icon-1.svg", // path to your icon file
      label: "ServiceNow",
      description:
        "Expert consulting and solutions for ServiceNow implementation and optimization.",
    },
    {
      icon: "/static/images/services/service-icon-2.svg",
      label: "Salesforce",
      description:
        "Custom Salesforce solutions tailored to your business needs and growth strategies.",
    },
    {
      icon: "/static/images/services/service-icon-3.svg",
      label: "Oracle",
      description:
        "Optimize your Oracle applications and databases with specialized consulting and solutions.",
    },
    {
      icon: "/static/images/services/service-icon-4.svg",
      label: "Data Analytics, Data Science & Business Intelligence",
      description:
        "Transform your data into actionable insights with cutting-edge analytics and BI solutions.",
    },
    {
      icon: "/static/images/services/service-icon-5.svg",
      label: "Open AI, Quantum Computing, Augmented Reality",
      description:
        "Innovative solutions for AI, quantum computing, and augmented reality to future-proof your business.",
    },
    {
      icon: "/static/images/services/service-icon-6.svg",
      label: "Mobility & Development",
      description:
        "Custom mobile app development and modern software solutions to empower your business on-the-go.",
    },
  ],
};

export const timelineData = [
  {
    year: "2020",
    events: ["Technozis Inception"],
  },
  {
    year: "2023",
    events: [
      "Product Development for Fortune 500 customers",
      "Opened offices in India — Gurgaon & Hisar",
    ],
  },
  {
    year: "2024",
    events: [
      "Launched Professional & Consulting Services: Digital Transformation, Security, Apps & Engineering, DevOps / Cloud, Analytics, Open AI, Cognitive AI",
      "Industry Portfolio: Telecom, Retail, Internet, Manufacturing, Supply Chain, GCC, BFSI",
    ],
  },
  {
    year: "2025",
    events: [
      "Established COE in Apps & Engineering (ServiceNow, OpenText, Salesforce, AWS, Azure)",
      "Recognized as a Great Place to Work",
      "Awarded by Dun & Bradstreet",
      "Recognized by Successpreneur – Fastest Growing Digital Tech Company",
      "Opened global offices in Dubai, Australia, and the UK",
      "Signed major contracts in telecom and retail sectors",
    ],
  },
];

export const businessSection = {
  title: "Ready to Elevate Your Business with Technozis?",
  description:
    "With cutting-edge technology, agile execution, and a people-first approach, Technozis is your trusted partner in growth. Let’s build something incredible together.",
  background: "rgba(0, 52, 228, 1)",
  buttonText: "Get Started",
  redirectionLink:
    "https://calendly.com/careers-technozis/technozis-discovery-call",
};

export const insideTechnozisSection = {
  imgAlignment: "left",
  title: "Inside Technozis  Culture & Workstyle",
  imgUrl: "/static/images/gptw.png",
  bgColor: "rgba(0, 0, 0, 1)",
  descriptionHtml: `
    <div style="color: #fff; line-height: 1.6;">
      <p style="font-size: 1rem; margin-bottom: 20px;">
        At Technozis, productivity isn’t just about working harder — it’s about working smarter.
        Here’s a sneak peek into what makes our team one of the most driven and efficient in the industry.
        <strong style="display: block; margin-top: 10px;">
          Structured Workflows, Collaborative Culture, Time Management & Work-Life Balance
        </strong>
      </p>
      <p style="font-size: 1rem; margin-bottom: 20px;">
        A culture rooted in collaboration, curiosity, and compassion. We value innovation but never at the cost of people.
      </p>
      <p style="font-size: 1.2rem; font-weight: 700;">
        Proud to be a certified<br>
        <strong>Great Place to Work, 2025.</strong>
      </p>
    </div>
  `,
};

export const joinUsSection = {
  imgAlignment: "right",
  title: "Join Us !",
  imgUrl: "/static/images/joinUs.png",
  bgColor: "rgba(0, 52, 228, 1)",
  descriptionHtml: `
    <div style="color: #fff;">
      <p style="font-size: 1rem; margin-bottom: 10px;">
        At Technozis, you’re not just working — you’re growing.
      </p>
      <p style="font-size: 1rem; margin-bottom: 40px;">
        Whether you’re a developer or strategist — there’s space for you here.
      </p>
      <a href="https://calendly.com/careers-technozis/technozis-discovery-call" target="_blank" style="
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 16px 32px;
        color: #fff;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: background 0.3s ease;
        background: linear-gradient(90deg, #5B8CFF, #7BA8FF);
        margin-bottom: 20px;
      ">
        Get In Touch
        <span style="margin-left: 10px;">→</span>
      </a>
    </div>
  `,
};
