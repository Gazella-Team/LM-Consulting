import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import { BlurHero } from "@/components/blur-hero";
import Link from "next/link";

export default function Design02() {
    return (
        <>
        <BlurHero>
            <nav className="h-16 z-[999] fixed w-full flex items-center">
                <div className="w-[94%] mx-auto flex text-white items-center justify-between">
                    <h2 className="uppercase text-xl">LM Capital</h2>
                    <div className="flex items-center gap-4">
                        <Link className="bg-transparent border rounded-full text-white px-5 py-1.5 text-sm" href={"/"}>
                            Book a meeting
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </div>
                </div>
            </nav>
            <section className="flex absolute h-full items-center z-[999]">
                <div className="w-[90%] mx-auto flex justify-center gap-8 flex-col h-full max-w-6xl">
                    <RevealLight delayTime={0.2}>
                        <h2 className="text-5xl font-semibold max-w-3xl text-white">On a mission to help ambitious founders raise capital through systematic outreach.</h2>
                    </RevealLight>
                    <RevealLight delayTime={0.4}>
                        <p className="text-gray-300 font-light max-w-md text-lg">We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics.</p>
                    </RevealLight>
                </div>
            </section>
        </BlurHero>
        </>
    )
}