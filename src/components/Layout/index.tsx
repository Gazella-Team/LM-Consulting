import Navbar from "./Navbar";
import Meta from "./Meta";
import Footer, { FooterProps } from "./Footer";
import { useState } from "react";

type LayoutProps = {
  className?: string;
  children?: React.ReactNode;
  footerProps?: FooterProps;
};

export default function Layout({ children, footerProps }: LayoutProps) {
  const [noticeActive, setNoticeActive] = useState(true);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Meta />
      <div>
        <Navbar />
        {children}
        {/*<Footer {...footerProps} />*/}
      </div>
    </div>
  );
}
