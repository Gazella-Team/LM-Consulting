import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";
import { cn } from "utils/cs";

export default function Hero() {
    return (
        <section className="py-[200px] pb-[130px] relative h-[100vh] flex flex-col justify-center bg-[url(/hero.webp)] bg-center bg-cover">
            <div className="w-[90%] items-center z-10 mx-auto grid grid-cols-1 lg:grid-cols-1 gap-40 text-white max-w-7xl">
                <div className="flex max-w-sm sm:max-w-none flex-col gap-8">
                    <Reveal delayTime={0.3}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light">Unlock Direct Access to over $1 Trillion in Investor Funds</h1>
                    </Reveal>
                    <RevealLight delayTime={0.5}>
                        <p className="text-lg mb-10 sm:text-xl lg:text-2xl max-w-lg font-light text-gray-200">LM Capital specializes in digital-first advisory services, focusing on cross-sector capital raising and private placements globally</p>
                    </RevealLight>
                    <div className="flex">
                        <RevealLight delayTime={0.7}>
                            <Link
                                className={cn("border mt-20 text-white hover:bg-white hover:text-black transition-all px-5 py-2 rounded-md border-gray-500 font-normal text-base")}
                                href="https://cal.com/libanm94"
                                target="_blank"
                            >
                                Schedule a Consultation
                            </Link>
                        </RevealLight>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 " style={{background: "linear-gradient(90deg, rgba(9,25,48,1) 0%, rgba(29,58,93,0.85) 100%)"}}></div>
        </section>
    )
}