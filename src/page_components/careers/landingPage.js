import { useRouter } from "next/router";
import DetailsCards from "@/modules/details_card";
import {
  JoinCommunity,
  Testimonials,
  categoriesHired,
  heroData,
  technozisLife,
  technozisPerks,
} from "./careers.constants";
import styles from "./styles/style.module.scss";
import Hero from "@/modules/hero";
import CardsGrid from "@/modules/cards_grid";
import ConcurrentContent from "@/modules/concurrent_block";
import Accordion from "@/modules/accordions";
import PathSection from "./pathSection";

const CareersLandingPage = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/careers/opportunities");
  };

  return (
    <div className={styles.careersLandingPageWrapper}>
      <Hero data={{ ...heroData, handleButtonClick }} />
      <DetailsCards data={technozisPerks} />
      <DetailsCards data={technozisLife} />
      <DetailsCards data={categoriesHired} />
      <DetailsCards data={Testimonials} />
      <ConcurrentContent concurrentContent={JoinCommunity} />
      <PathSection handleButtonClick={handleButtonClick} />
      <Accordion />
    </div>
  );
};

export default CareersLandingPage;
