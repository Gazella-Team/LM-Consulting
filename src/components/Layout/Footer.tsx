import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CTA from "./Cta";
import NiceModal from "@ebay/nice-modal-react";
import JoinWaitlistModal from "../modals/JoinWaitlistModal";
import { Reveal } from "../Animations/Reveal";

export type FooterProps = {
  withCTA?: boolean;
};

export default function Footer({ withCTA = true }: FooterProps) {
  return (
    <>
                    <div className="flex items-center justify-center mb-8">
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-main" src="/people/lasseosmann.webp"></img>
                        <img className="w-20 h-20 object-cover rounded-full border-2 border-main ml-[-20px]" src="/people/simonmaribo.webp"></img>
                    </div>

      <div style={{background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(94,23,235,0.13631390056022408) 100%)"}} className="pb-[200px] flex flex-col items-center text-center">
        <p className="font-[Caveat] text-main text-3xl mb-3">Say goodbye to high prices and countless subscriptions</p>
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-black mb-6 text-gray-800 mx-auto max-w-3xl w-[90%]">Ready to boost your development?</h2>
        <p className="text-lg max-w-xl mx-auto w-[90%] text-gray-600 mb-8">Focus 100% on building your idea, and let ToolBird handle the rest</p>
        <button
              onClick={() => NiceModal.show(JoinWaitlistModal)}
              className="bg-main font-semibold border-[3px] border-main text-white text-sm px-6 py-2 rounded-full"
            >
              Join waitlist
          </button>
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
