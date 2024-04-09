import Link from "next/link";
import DashboardDisplay from "./dashboarddisplay";
import Features from "./features";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";

export default function Hero() {
    return (
        <section className="py-[100px] pb-[0px]">
        <div className="w-[96%] mx-auto max-w-[1300px] flex flex-col gap-5 text-center">
          <Reveal delayTime={0.1}>
            <h1 className="text-[40px] md:text-[50px] xl:text-[60px] leading-[100%] font-bold text-gray-800 heading">
            Empowering SaaS developers
            </h1>
          </Reveal>
          <Reveal delayTime={0.2}>
            <p className="text-base md:text-lg xl:text-xl font-regular max-w-[800px] mx-auto text-gray-600">
            Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building MVPs easier
            </p>
          </Reveal>
          <RevealLight delayTime={0.4}>
            <div className="flex items-center justify-center gap-2 mt-4 font-medium">
                <Link target="_blank" className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"https://app.toolbird.io/auth/login"}>Join waitlist</Link>
             </div>
        </RevealLight>
        </div>
      </section>
    )
}