import Link from "next/link"
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cta from "./Cta";

export default function Footer() {
    return (
        <>
        <Cta />
         <footer className="py-[10px] border-t-[1px]">
            <div className="w-[94%] mx-auto max-w-[1200px] flex flex-col">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-[20px] text-gray-800">
                        <img className="w-28" src="/logos/logogray.svg"></img>
                        <p className="text-[14px] font-[200] text-gray-600">&copy; Copyright {new Date().getFullYear()} ToolBird. All rights reserved</p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <FaTiktok size={26} color="rgb(75 85 99)" />
                        <FaInstagram size={28} color="rgb(75 85 99)" />
                        <FaLinkedin size={28} color="rgb(75 85 99)" />
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}