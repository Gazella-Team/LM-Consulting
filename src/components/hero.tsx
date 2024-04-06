import Link from "next/link";
import DashboardDisplay from "./dashboarddisplay";
import Features from "./features";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";

export default function Hero() {
    return (
        <section   className="py-[100px]">
            <div className="">
                <div className="max-w-[1000px] w-[96%] mx-auto flex flex-col gap-6 text-center">
                    <RevealLight delayTime={0.3}>
                        <div>
                            <div className="inline-block mx-auto bg-slate-50 py-2 text-gray-600 px-6 rounded-full border border-gray-600/10">
                                <p>Built with 💜 by Gazella Team</p>
                            </div>
                        </div>
                    </RevealLight >
                    <Reveal delayTime={0.1}>
                        <h1 className="text-[50px] font-semibold text-gray-800 leading-[100%] heading mx-auto">The ultimate toolbox for <span className="text-main heading">SaaS developers</span> to get better overview and <span className="heading">save time</span></h1>
                    </Reveal>
                    <Reveal delayTime={0.2}>
                        <p className="text-xl font-light max-w-[800px] mx-auto text-gray-600">Manage web analytics, feature flags, cron jobs, webhooks, automation, waitlists and more within just one platform. ToolBird makes building MVP&apos;s faster and easier.</p>
                    </Reveal>
                    <RevealLight delayTime={0.4}>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <Link className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"https://app.toolbird.io/auth/login"}>Log in</Link>
                        </div>
                    </RevealLight>
                </div>
                <DashboardDisplay />
            </div>
        </section>
    )
}