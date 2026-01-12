import { useEffect, useState } from "react";

const useMedia = ()  => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      const isDesktopDevice = window.matchMedia("(min-width: 769px)").matches;
      setIsMobile(isMobileDevice);
      setIsDesktop(isDesktopDevice);
    };

    // Check initially and add resize listener
    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return { isMobile, isDesktop };
}

export default useMedia;
