import Navbar from "./Navbar";
import Meta from "./Meta";
import localFont from "next/font/local"
import Footer from "./Footer";
import { useState } from "react";
import Link from "next/link";

const GazellaTeamFont = localFont({
  src: [
    {
      path: '../fonts/gelix-semibold.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
})
export default function Layout({
  className,
  children,
  mode,
}: {
  className?: string;
  children: React.ReactNode;
  mode: string,
}) {

  const [noticeActive, setNoticeActive] = useState(true);
  return (
    <div className="flex flex-col justify-between min-h-screen">
    <Meta />
      <div>
        <div className={GazellaTeamFont.className}>
          {noticeActive ?           <div className="w-full fixed bg-white border-b-[1px] z-40 h-[50px] flex items-center justify-between">
            <div className="w-[98%] mx-auto text-center flex items-center justify-between">
            <div className="w-[10%]"></div>
            <p className="font-[200] text-[14px] text-gray-800">Earn $10 today with our affiliate program. <span className="text-main underline cursor-pointer"><Link href={"/collaborate/affiliate"}>Learn more</Link></span></p>
            <div className="w-[10%] flex items-center justify-end">
              <div className="cursor-pointer" onClick={() => setNoticeActive(false)}><svg onClick={() => setNoticeActive(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg></div>

            </div>
            </div>
          </div >:null}
          <div className={noticeActive ? "pt-[50px]":""}>
          <Navbar white={mode === "white"} />
            <div className={mode === "white" ? "pt-[80px]":""}>
                {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}