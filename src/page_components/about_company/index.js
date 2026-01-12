import MultiCard from "@/modules/multi_cards";
import CompanyTime from "./timeline";
import FeaturedResources from "@/modules/resources_cards/featuredResoucesCards";
import styles from "./style.module.scss";
import Hero from "@/modules/hero";
import {
  businessSection,
  heroData,
  insideTechnozisSection,
  joinUsSection,
  servicesData,
} from "./aboutCompany.constants";
import LeadershipTeam from "./team";
import DetailsCards from "@/modules/details_card";
import ConcurrentContent from "@/modules/concurrent_block";
import ConcurrentText from "@/modules/concurrent_text";

const AboutCompany = () => {
  return (
    <div className={styles.aboutCompanyWrapper}>
      <Hero data={heroData} />
      <DetailsCards data={servicesData} />
      <ConcurrentText data={businessSection} />
      <ConcurrentContent concurrentContent={insideTechnozisSection} />
      <CompanyTime />
      {/* <FeaturedResources /> */}
      {/* <MultiCard /> */}
      <LeadershipTeam />
      <ConcurrentContent concurrentContent={joinUsSection} />
    </div>
  );
};

export default AboutCompany;
