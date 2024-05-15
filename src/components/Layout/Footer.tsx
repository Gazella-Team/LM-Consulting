import Link from "next/link"
import { FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cta from "./Cta";
export default function Footer() {
    return (
        <>
         <footer style={{background: "radial-gradient(circle, rgba(247,243,255,1) 0%, rgba(255,255,255,1) 50%)"}} className="py-[10px] mx-auto max-w-7xl border-t rounded-t-[100px] border-t-gray-600/10 bg-white">
            <div className="w-[86%] mx-auto min-h-[370px] max-w-6xl grid grid-cols-1 md:grid-cols-[35%_1fr] pt-14 gap-20">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <img className="w-28" src="/logos/finallogo.svg"></img>
                        <p className="text-gray-500 text-sm max-w-xs font-medium">Helping SaaS developers save time and get a better overview when bulding products.</p>
                    </div>
                    <div className="flex">
                        <Link
                            target="_blank"
                            href={"https://app.toolbird.io/auth/register"}
                                className="bg-gray-800 border-[3px] border-gray-800 font-medium text-xs flex text-white px-6 py-1 rounded-full"
                            >
                                Get started
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="border p-3 rounded-full border-gray-600/10">
                            <FaLinkedin color="rgb(31 41 55)" />
                        </div>
                        <div className="border p-3 rounded-full border-gray-600/10">
                            <FaTwitter color="rgb(31 41 55)" />
                        </div>
                        <div className="border p-3 rounded-full border-gray-600/10">
                            <FaYoutube color="rgb(31 41 55)" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Products</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Monitoring</Link>
                            <Link href={"/"}>User feedback</Link>
                            <Link href={"/"}>Cron jobs</Link>
                            <Link href={"/"}>Waitlists</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">About</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>The story</Link>
                            <Link href={"/"}>Career</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Customers</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Learning</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-6">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Toolbird, NØRRE VOLDGADE 82, 2TH.1358 KØBENHAVN</p>
            </div>
        </footer>
        </>
    )
}