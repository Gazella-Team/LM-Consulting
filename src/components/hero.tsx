import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";
import { cn } from "utils/cs";

export default function Hero() {
    return (
        <section style={{background: "linear-gradient(90deg, rgba(9,25,48,1) 0%, rgba(29,58,93,1) 100%)"}} className="py-20 lg:h-[100vh] flex flex-col justify-center">
            <div className="w-[90%] mx-auto flex text-white flex-col gap-8 max-w-7xl">
                <Reveal delayTime={0.3}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light">Unlock Direct Access to over $1 Trillion in Investor Funds</h1>
                </Reveal>
                <RevealLight delayTime={0.5}>
                    <p className="text-lg sm:text-xl lg:text-2xl max-w-lg font-light text-gray-200">LM Capital specializes in digital-first advisory services, focusing on cross-sector capital raising and private placements globally</p>
                 </RevealLight>
                 <div className="flex">
                    <RevealLight delayTime={0.7}>
                        <Link
                            className={cn("hidden border mt-5 text-white hover:bg-white hover:text-black transition-all px-5 py-2 rounded-md border-gray-500 font-normal text-base lg:flex")}
                            href="/"
                        >
                            Contact
                        </Link>
                    </RevealLight>
                 </div>
            </div>
        </section>
    )
}