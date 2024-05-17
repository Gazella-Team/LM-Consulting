import { Check, CheckCircle } from "lucide-react";

export default function Benefits() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-6xl w-[86%]">
                <div className="border border-main rounded-2xl flex flex-col gap-6 bg-white p-8 shadow-main/30 shadow-clean">
                    <h2 className="heading text-xl text-gray-800">Choosing Toolbird</h2>
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
                <div className="border border-gray-600/10 rounded-2xl flex flex-col gap-6 bg-white p-8 shadow-sm">
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