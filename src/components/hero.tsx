import Link from "next/link";
import DashboardDisplay from "./dashboarddisplay";
import Features from "./features";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";

export default function Hero() {
    return (
        <section className="py-[100px] pb-[0px]">
        <div className="w-[96%] mx-auto max-w-[1300px] flex flex-col gap-6 text-center">
            <RevealLight delayTime={0.4}>
              <div>
                <div className="inline-block text-sm mx-auto bg-slate-50 py-2 text-gray-600 px-6 rounded-full border border-gray-600/10">
                  <p>⚡️ A Gazella Team product</p>
                </div>
              </div>
            </RevealLight>
          <Reveal delayTime={0.1}>
            <h1 className="text-[50px] md:text-[60px] xl:text-[70px] leading-[100%] font-semibold text-gray-800 heading">
            ToolBird
            </h1>
          </Reveal>
          <Reveal delayTime={0.2}>
            <p className="text-base md:text-lg xl:text-xl font-light max-w-[870px] mx-auto text-gray-600">
            Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy.
            </p>
          </Reveal>
          <RevealLight delayTime={0.4}>
            <div className="flex items-center justify-center gap-2 mt-4">
                <Link className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"https://app.toolbird.io/auth/login"}>Log in</Link>
                <Link className="bg-main border-[3px] border-main text-white px-6 py-2 rounded-full" href={"https://app.toolbird.io/auth/login"}>Learn more</Link>
             </div>
        </RevealLight>
        </div>
      </section>
    )
}