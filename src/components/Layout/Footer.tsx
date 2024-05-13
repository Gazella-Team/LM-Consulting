import Link from "next/link"
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cta from "./Cta";
export default function Footer() {
    return (
        <>
         <footer className="py-[10px] border-t-[1px] bg-white">
            <div className="w-[94%] mx-auto max-w-[1200px] flex flex-col">
				{/* 
				                <div className="py-[50px] flex justify-between font-[300] text-gray-800">
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Platform</h1>
                        <div className="flex flex-col gap-3 font-regular">
                            <Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Usecases</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Company</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Work with us</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Legal</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                </div>
				*/}
                <div className="w-full py-[30px] flex items-center justify-center">
                    <div className="flex items-center gap-[20px] text-gray-800">
						<img className="w-28" src="/logos/finallogo.svg"></img>
                        <p className="text-[14px] text-gray-600">&copy; Copyright {new Date().getFullYear()} toolbird. All rights reserved</p>
                    </div>
					{/*
					                <div className="py-[50px] flex justify-between font-[300] text-gray-800">
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Platform</h1>
                        <div className="flex flex-col gap-3 font-regular">
                            <Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Usecases</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Company</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Work with us</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="mb-4 text-xl font-medium text-gray-800">Legal</h1>
                        <div className="flex flex-col gap-3">
							<Link className="text-gray-600" href={"/"}>Waitlits</Link>
                            <Link className="text-gray-600" href={"/"}>Workflow Analytics</Link>
                            <Link className="text-gray-600" href={"/"}>Cron Jobs</Link>
                            <Link className="text-gray-600" href={"/"}>Testimonials</Link>
                            <Link className="text-gray-600" href={"/"}>Chat Embed</Link>
                            <Link className="text-gray-600" href={"/"}>Blogs</Link>
                            <Link className=" text-gray-600" href={"/"}>Integrations</Link>
                        </div>
                    </div>
                </div>*/}
                </div>
            </div>
        </footer>
        </>
    )
}