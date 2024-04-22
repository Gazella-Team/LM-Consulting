import Navbar from "./Navbar";
import Meta from "./Meta";
import Footer, { FooterProps } from "./Footer";
import { useState } from "react";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

type LayoutProps = {
  className?: string;
  children?: React.ReactNode;
  footerProps?: FooterProps;
  white: boolean;
};

export default function Layout({ children, footerProps, white }: LayoutProps) {
  const [noticeActive, setNoticeActive] = useState(true);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Meta />
      <div className={GeistSans.className}>
        <Navbar white={white} />
        {children}
        <Footer {...footerProps} />
      </div>
    </div>
  );
}
