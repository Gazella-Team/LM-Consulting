import Navbar from "./Navbar";
import Meta from "./Meta";
import Footer from "./Footer";
import { useState } from "react";
import Link from "next/link";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {

  const [noticeActive, setNoticeActive] = useState(true);
  return (
    <div className="flex flex-col justify-between min-h-screen">
    <Meta />
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}