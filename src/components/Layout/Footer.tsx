import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CTA from "./Cta";

export type FooterProps = {
  withCTA?: boolean;
};

export default function Footer({ withCTA = true }: FooterProps) {
  return (
    <>
      <CTA />
      <footer className="py-4 border-t border-gray-600/10">
        <div className="w-[94%] mx-auto max-w-[1200px] flex flex-col">
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center gap-[20px] text-gray-800">
              <p className="text-[14px] font-regular text-gray-400">
                &copy; Copyright {new Date().getFullYear()} ToolBird. All rights
                reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
