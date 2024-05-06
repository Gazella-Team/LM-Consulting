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
      <div style={{background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(94,23,235,0.13631390056022408) 100%)"}} className="min-h-[600px] flex flex-col items-center text-center">
        <p className="font-[Caveat] text-main text-3xl mb-3">Say goodbye to high prices and countless subscriptions</p>
        <h2 className="text-5xl font-black mb-4">Ready to boost your development?</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier</p>
      </div>
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
