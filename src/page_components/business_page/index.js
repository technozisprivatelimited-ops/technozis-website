"use client";
import React, { useRef } from "react";

import businessPageJSON from "../../modules/static_json/businessPage.json";
import Hero from "@/modules/hero";
import ConcurrentContent from "@/modules/concurrent_block";
import ConcurrentText from "@/modules/concurrent_text";
import ServicesSection from "./servicesSection";
import OfferingCards from "./offeringCards.js";
import useMedia from "@/hooks/useMedia";
import BannerSection from "@/modules/banner";

const BussinessPage = () => {
  const page = businessPageJSON?.data?.[0];
  const sections = page?.sections ?? [];

  const { isMobile = false } = useMedia();

  // store refs by index
  const sectionRefs = sections.reduce((acc, s) => {
    acc[s.index] = useRef(null);
    return acc;
  }, {});

  const scrollToSection = (index) => {
    sectionRefs[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const renderSection = (section) => {
    const { type, data, index } = section;

    switch (type) {
      case "primaryData":
        return (
          <div key={index} ref={sectionRefs[index]}>
            <Hero data={data} isMobile={isMobile} />
          </div>
        );

      case "concurrentContent":
        return (
          <div key={index} ref={sectionRefs[index]}>
            <ConcurrentContent concurrentContent={data} />
          </div>
        );

      case "concurrentText":
        return (
          <div key={index} ref={sectionRefs[index]}>
            <ConcurrentText data={data} />
          </div>
        );

      case "servicesSection":
        return (
          <div key={index} ref={sectionRefs[index]}>
            <ServicesSection
              services={data}
              isMobile={isMobile}
              onScroll={scrollToSection} // pass scroll handler
            />
          </div>
        );

      case "dataCards":
        return (
          <div key={index} ref={sectionRefs[index]}>
            <OfferingCards data={data} />
          </div>
        );

      case "bannerSection":
        return (
          <div key={index} ref={sectionRefs[index]}>
            <BannerSection data={data} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main>
      {sections
        .sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
        .map(renderSection)}
    </main>
  );
};

export default BussinessPage;
