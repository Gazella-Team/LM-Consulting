import Link from "next/link"
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cta from "./Cta";

export default function Footer() {
    return (
        <>
        <Cta />
         <footer className="pt-[40px] pb-[10px] border-t-[1px]">
            <div className="w-[94%] mx-auto max-w-[1200px] flex flex-col">
                <div className="py-[50px] flex justify-between font-[300] text-gray-800">
                    <div>
                        <h1 className="mb-[14px] text-[18px]">Platform</h1>
                        <div className="flex flex-col gap-[6px] font-[200]">
                            <Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Blogs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-[14px] text-[18px]">Platform</h1>
                        <div className="flex flex-col gap-[6px]">
                            <Link className="font-[200] text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Blogs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-[14px] text-[18px]">Platform</h1>
                        <div className="flex flex-col gap-[6px]">
                            <Link className="font-[200] text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Blogs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-[14px] text-[18px]">Platform</h1>
                        <div className="flex flex-col gap-[6px]">
                            <Link className="font-[200] text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Blogs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-[14px] text-[18px]">Platform</h1>
                        <div className="flex flex-col gap-[6px]">
                            <Link className="font-[200] text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Blogs</Link>
                            <Link className="font-[200] text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full border-t-[1px] py-[30px] flex items-center justify-between">
                    <div className="flex items-center gap-[20px] text-gray-800">
                        <Link href={"/"} className="font-[400] text-[22px] flex flex-col leading-0">toolbird<span className="text-[8px] font-[200] leading-0 mt-[-6px]">by Gazella Team</span></Link>
                        <p className="text-[14px] font-[200]">powered by Gazella Team</p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <FaTiktok size={26} color="rgb(75 85 99)" />
                        <FaInstagram size={28} color="rgb(75 85 99)" />
                        <FaLinkedin size={28} color="rgb(75 85 99)" />
                    </div>
                </div>
                <p className="text-center font-[200] text-[14px] text-gray-600 pb-[30px]">&copy; Copyright {new Date().getFullYear()} toolbird. All rights reserved</p>
            </div>
        </footer>
        </>
    )
}