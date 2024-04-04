import Link from "next/link";
import DashboardDisplay from "./dashboarddisplay";
import Features from "./features";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";

export default function Hero() {
    return (
        <section style={{ backgroundImage: 'linear-gradient(3deg, rgba(94,23,235,0.3435968137254902) 0%, rgba(255,255,255,1) 76%)' }}  className="py-[100px]">
            <div className="">
                <div className="max-w-[1200px] w-[96%] mx-auto flex flex-col gap-6 text-center">
                    <div>
                        <div className="inline-block mx-auto bg-slate-50 py-2 text-gray-600 px-6 rounded-full border border-gray-600/10">
                            <p>Built with 💜 by SaaS developers</p>
                        </div>
                    </div>
                    <Reveal delayTime={0.1}>
                        <h1 className="text-[70px] font-[500] text-gray-800 leading-[100%] tracking-tighter mx-auto">The ultimate toolbox for <span className="text-main">SaaS developers</span> to get better overview and <span className="underline decoration-solid">save time</span></h1>
                    </Reveal>
                    <Reveal delayTime={0.2}>
                        <p className="text-xl font-[400] max-w-[770px] mx-auto text-gray-600">Discover, collaborate, and grow, our all-in-one platform empowers you to build and scale your influencer marketing with thousands of verified influencers.</p>
                    </Reveal>
                    <RevealLight delayTime={0.4}>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <Link className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"/waitlist"}>Join waitlist</Link>
                            <Link className="bg-transparent border-[3px] border-main text-main px-6 py-2 rounded-full" href={"/waitlist"}>Hear our story</Link>
                        </div>
                    </RevealLight>
                </div>
                <DashboardDisplay />
            </div>
        </section>
    )
}