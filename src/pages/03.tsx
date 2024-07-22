import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Link from "next/link";

export default function Design03() {
    return (
        <>
        <nav className="h-24 flex items-center">
            <div className="w-[94%] mx-auto flex items-center justify-between">
                <img className="w-10" src="/03/logo.png"></img>
                <div className="flex items-center gap-4">
                    <Link className="bg-[#0b2424] rounded-full text-white px-5 py-1.5 text-sm" href={"/"}>
                        Book a meeting
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
        <section>
            <div className="h-[700px] p-16 relative w-[95%] bg-center bg-cover rounded-3xl mx-auto">
                <div className="z-[999] relative flex flex-col gap-10 justify-end h-full">
                    <Reveal delayTime={0.3}>
                        <h2 className="tracking-tighter times-new-font max-w-3xl font-semibold z-[999] text-7xl text-white">Helping founders raise capital through systematic outreach</h2>
                    </Reveal>
                    <div className="flex flex-col items-end">
                        <div className="flex flex-col gap-10">
                            <Reveal delayTime={0.5}>
                                <p className="text-gray-100 font-light text-xl max-w-lg">We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics. We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics.</p>
                            </Reveal>
                            <RevealLight delayTime={0.7}>
                                <div className="flex items-center gap-3">
                                    <Link className="bg-transparent border border-white rounded-full text-white px-5 py-1.5 text-sm" href={"/"}>
                                        Book a meeting
                                    </Link>
                                    <Link className="bg-transparent border border-white rounded-full text-white px-5 py-1.5 text-sm" href={"/"}>
                                        Learn more
                                    </Link>
                                </div>
                            </RevealLight>
                        </div>
                    </div>
                </div>
                <div style={{background: "linear-gradient(243deg, rgba(20,55,55,1) 0%, rgba(11,36,36,1) 71%)"}} className="absolute inset-0 rounded-3xl"></div>
            </div>
        </section>
        </>
    )
}