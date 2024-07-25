import { Reveal } from "./Animations/Reveal";
import { RevealLight } from "./Animations/RevealLight";

export default function Hero() {
    return (
        <section className="py-20 lg:py-36 lg:pb-20">
            <div className="w-[90%] mx-auto flex flex-col gap-8 max-w-7xl">
                <Reveal delayTime={0.3}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light">Unlock Direct Access to over $1 Trillion in Investor Funds</h1>
                </Reveal>
                <div className="flex items-center justify-end">
                    <RevealLight delayTime={0.5}>
                        <p className="text-lg sm:text-xl lg:text-2xl max-w-lg font-light mx-auto text-gray-600">LM Capital specializes in digital-first advisory services, focusing on cross-sector capital raising and private placements globally</p>
                    </RevealLight>
                </div>
            </div>
        </section>
    )
}