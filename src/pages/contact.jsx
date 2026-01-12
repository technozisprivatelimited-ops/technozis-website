import useMedia from "@/hooks/useMedia";
import ContactUs from "@/page_components/contact_us";

const Contact = () => {
  const { isMobile } = useMedia();
  return <ContactUs isMobile={isMobile} />;
};

export default Contact;
