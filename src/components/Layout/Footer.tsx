import Link from "next/link"
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cta from "./Cta";
export default function Footer() {
    return (
        <>
         <footer style={{background: "radial-gradient(circle, rgba(247,243,255,1) 0%, rgba(255,255,255,1) 50%)"}} className="py-[10px] mx-auto max-w-7xl border-t rounded-t-[100px] border-t-gray-600/10 bg-white">
            <div className="w-[86%] mx-auto min-h-[370px] max-w-6xl grid grid-cols-1 md:grid-cols-[30%_1fr] pt-14 gap-20">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <img className="w-28" src="/logos/finallogo.svg"></img>
                        <p className="text-gray-500 text-sm max-w-xs font-medium">Giving modern marketing teams superpowers with short links that stand out.</p>
                    </div>
                    <p className="text-gray-400 font-medium text-sm">© {new Date().getFullYear()} Toolbird</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Tools</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Tools</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Tools</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm mb-5 font-bold text-gray-800">Tools</h2>
                        <div className="text-gray-500 text-sm flex flex-col gap-5 font-medium">
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                            <Link href={"/"}>Analytics</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}