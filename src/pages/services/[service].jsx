import { useRouter } from "next/router";
import ServicesData from "../../modules/static_json/services.json";
import ServicePage from "../../page_components/services/index";
import { isEmpty } from "lodash";
import Hero from "@/modules/hero";
import useMedia from "@/hooks/useMedia";

const Services = () => {
  const router = useRouter();
  const { service } = router.query;
  const { isMobile } = useMedia();

  // Find the service data based on the URL
  const serviceData = ServicesData.data.find(
    (item) => item.redirectionUrl === `/services/${service}`
  );

  if (isEmpty(serviceData)) {
    return (
      <Hero
        data={{
          main: {
            bgMainImg: {
              desktop: "/static/images/fallback-under-process.svg",
              mobile: "/static/images/fallback-under-process-mobile.svg", 
            },

            bannerHeight: "",
          },
        }}
        isMobile={isMobile}
      />
    );
  }

  return <ServicePage serviceData={serviceData} />;
};

export default Services;
