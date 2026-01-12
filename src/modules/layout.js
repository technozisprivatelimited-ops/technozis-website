import useMedia from "@/hooks/useMedia";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  const { isMobile, isDesktop } = useMedia();
  return (
    <div>
      <Header isMobile={isMobile} isDesktop={isDesktop} />
      <main>{children}</main>
      <Footer isMobile={isMobile} isDesktop={isDesktop} />
    </div>
  );
};

export default Layout;
