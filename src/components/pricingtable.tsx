import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/20/solid"
import { FireIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { GiFlame } from "react-icons/gi"
import { Reveal } from "./Animations/Reveal"

export default function PricingTable() {
    return (
        <section style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(94,23,235,0.04667804621848737) 100%)"}} className="py-24 text-gray-800">
            <div className="w-[96%] mx-auto max-w-[1100px] text-center">
                <Reveal delayTime={0.1}>
                <p className="font-[Caveat] text-main text-2xl mb-2">#1 toolbox for SaaS developers</p>
                </Reveal>
                <h1 className="font-bold text-4xl mx-auto text-center mb-14">Startup friendly pricing</h1>
                <div className="grid grid-cols-2 gap-10 rounded-2xl bg-white border border-gray-600/10 p-4 text-left">
                    <div className="p-8 flex flex-col gap-8 opacity-50">
                        <div>
                            <p>The old way</p>
                        </div>
                        <h1 className="text-5xl font-bold">$219<span className="text-xl font-medium ml-2 text-gray-600">/mo</span></h1>
                        <div className="border-t border-t-gray-600/10">
                            <p>j</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl border border-gray-600/10 p-8 flex flex-col gap-8">
                        <div>
                            <p>The ToolBird way</p>
                        </div>
                        <h1 className="text-5xl font-bold">$219<span className="text-xl font-medium ml-2 text-gray-600">/mo</span></h1>
                        <div className="border-t border-t-gray-600/10">
                            <p>j</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
