import { Check, CheckCircle } from "lucide-react";

export default function Benefits() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-6xl w-[86%]">
                <div className="border-2 border-main rounded-2xl flex flex-col gap-8 bg-white p-8 shadow-main/30 shadow-clean">
                    <h2 className="heading text-xl text-gray-800 flex items-center gap-4">Choosing<span className="w-24"><img src="/logos/finallogo.svg"></img></span></h2>
                    <div className="flex flex-col gap-4 paragraph text-gray-800">
                        <div className="flex items-center gap-3">
                            <Check className="text-main" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-main" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-main" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-main" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-main" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-600/10 rounded-2xl flex flex-col gap-8 bg-white p-8 shadow-sm">
                    <h2 className="heading text-xl text-gray-800">Choosing the outdated way</h2>
                    <div className="flex flex-col gap-4 paragraph text-gray-600">
                        <div className="flex items-center gap-3">
                            <Check className="text-gray-500" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-gray-500" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-gray-500" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-gray-500" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Check className="text-gray-500" size={22} />
                            <h2>Only one platform</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}