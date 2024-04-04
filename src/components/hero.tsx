import Link from "next/link";
import DashboardDisplay from "./dashboarddisplay";

export default function Hero() {
    return (
        <section className="py-[100px]">
            <div className="">
                <div className="max-w-[1200px] w-[96%] mx-auto flex flex-col gap-6 text-center mb-20">
                    <div>
                        <div className="inline-block mx-auto bg-slate-50 py-2 text-gray-600 px-6 rounded-full border border-gray-600/10">
                            <p>Built with 💜 by SaaS developers</p>
                        </div>
                    </div>
                    <h1 className="text-[70px] font-[500] text-gray-800 leading-[100%] tracking-tighter mx-auto">The ultimate toolbox for <span className="text-main">SaaS developers</span> to get better overview and save time</h1>
                    <p className="text-xl font-[400] max-w-[770px] mx-auto text-gray-600">Discover, collaborate, and grow, our all-in-one platform empowers you to build and scale your influencer marketing with thousands of verified influencers.</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <Link className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"/waitlist"}>Join waitlist</Link>
                        <Link className="bg-white border-[3px] border-main text-main px-6 py-2 rounded-full" href={"/waitlist"}>Hear our story</Link>
                    </div>
                </div>
                <DashboardDisplay />
            </div>
        </section>
    )
}