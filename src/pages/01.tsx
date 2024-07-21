import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Link from "next/link";

export default function Design01() {
    return (
        <>
        <nav className="h-16 border-b border-gray-600/10 flex items-center">
            <div className="w-[94%] mx-auto flex items-center justify-between">
                <h2 className="uppercase text-xl">LM Capital</h2>
                <div className="flex items-center gap-4">
                    <Link className="bg-gradient-to-r from-[#0b2542] to-[#091a33] rounded-full text-white px-5 py-1.5 text-sm" href={"/"}>
                        Book a meeting
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
        <section className="py-24">
            <div className="w-[90%] mx-auto flex flex-col gap-8 max-w-6xl text-center">
                <Reveal delayTime={0.2}>
                    <h1 className="text-9xl tracking-tighter times-new-font heading mx-auto leading-[100%] max-w-3xl font-bold"><span className="text-[#8c8c8c] font-extralight">Helping founders</span><br></br> raise capital</h1>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <p className="text-xl max-w-lg mx-auto text-gray-600">We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics.</p>
                </Reveal>
            </div>
        </section>
        <section className="w-[98%] mx-auto gap-4">
            <img className="h-[800px] w-full object-cover" src="/01/grid01.webp"></img>
        </section>
        </>
    )
}