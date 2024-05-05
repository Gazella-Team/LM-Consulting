import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/20/solid"
import { FireIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { GiFlame } from "react-icons/gi"
import { Reveal } from "./Animations/Reveal"

export default function PricingTable() {
    return (
        <section className=" text-gray-800">
            <div className="w-[96%] mx-auto max-w-[1100px]">
                <div className="grid grid-cols-2 gap-10 rounded-2xl bg-white border border-gray-600/10 p-4 text-left">
                    <div className="p-8 flex flex-col gap-8 opacity-60">
                        <div>
                            <p>The old way from</p>
                        </div>
                        <h1 className="text-5xl font-bold">$219<span className="text-xl font-medium ml-2 text-gray-600">/mo</span></h1>
                        <div className="border-t border-t-gray-600/10">
                            <p>j</p>
                        </div>
                    </div>
                    <div style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(94,23,235,0.03667804621848737) 100%)"}}  className="rounded-xl border border-gray-600/10 p-8 flex flex-col gap-8 shadow-sm w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.04]">
                        <div>
                            <p>The ToolBird way</p>
                        </div>
                        <h1 className="text-5xl font-bold">$219<span className="text-xl font-medium ml-2 text-gray-600">/mo</span></h1>
                        <div className="border-t pt-6 border-t-gray-600/10">
                            <div className="grid grid-cols-2 gap-y-4 pb-10">
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon width={20} />
                                    <p className="font-medium">Complete access</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon width={20} />
                                    <p className="font-medium">Complete access</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon width={20} />
                                    <p className="font-medium">Complete access</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckBadgeIcon width={20} />
                                    <p className="font-medium">Complete access</p>
                                </div>
                            </div>
                            <div className="static">
                                <Link className="bg-main py-2 px-4 rounded-full static w-full text-white font-semibold text-sm" href={"/"}>Join waitlist</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
