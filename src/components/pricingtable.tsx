import { CheckCheckIcon, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Reveal } from "./Animations/Reveal";

export default function PricingTable() {
	return (
		<section className="mb-24">
			<div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-6xl w-[86%] gap-6">
			<div>
				<div className="bg-white h-full rounded-2xl border border-gray-600/10 text-gray-800 shadow-sm">
					<div className="flex flex-col gap-2 mb-12 px-7 pt-10">
						<div className="flex items-center gap-3">
							<div className="bg-gray-600 rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Free</h3>
						</div>
						<p className="text-gray-600">For hobby & side projects</p>
					</div>
					<div className="px-7 mb-14">
						<h1 className="text-5xl font-semibold">$0<span className="ml-1 text-base font-medium text-gray-600">/ forever</span></h1>
					</div>
					<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
						<button
							className="bg-gray-600 w-full border-[3px] border-gray-600 text-sm font-medium text-white px-6 py-2 rounded-full"
						>
							Get started
						</button>
					</div>
					<div>
						<h3 className="p-7 pb-0 text-gray-500 font-medium">What's included:</h3>
						<div className="py-10 pt-6 px-7 flex flex-col gap-6 text-gray-600">
						<div className="flex items-center gap-4">
								<FaCheckCircle size={18}  />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18}  />
								<h2 className="text-gray-600 underline decoration-dotted">+45 web analytics events</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18}  />
								<h2 className="text-gray-600 underline decoration-dotted">Unlimited waitlists</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} />
								<h2 className="text-gray-600">24/7 support</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18}  />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
				<div style={{background: "linear-gradient(350deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 54%)"}} className="bg-white relative rounded-2xl border-2 border-main text-gray-800 shadow-main/10 shadow-xl">
					<div className="absolutew-full h-[40px] flex items-center justify-center mt-[-20px]">
						<p className="bg-main select-none text-white px-8 rounded-full py-2 text-xs font-semibold">Popular</p>
					</div>
					<div className="mt-[-20px]">
					<div className="flex flex-col gap-2 pb-12 px-7 pt-10 bg-white rounded-t-2xl">
						<div className="flex items-center gap-3 bg-white">
							<div className="bg-main rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Pro</h3>
						</div>
						<p className="text-gray-600">For ambitious SaaS startups</p>
					</div>
					<div className="px-7 pb-14 bg-white">
						<h1 className="text-5xl font-semibold">$29<span className="ml-1 text-base font-medium text-gray-600">/ month</span></h1>
					</div>
					<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
						<button
							className="bg-main w-full border-[3px] border-main text-sm font-medium text-white px-6 py-2 rounded-full"
						>
							Get started
						</button>
					</div>
					<div>
						<h3 className="pt-7 px-8 pb-0 text-gray-500 font-medium">Everything in free, plus:</h3>
						<div className="py-10 pt-6 px-8 flex flex-col gap-6 font-regular">
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600 underline decoration-dotted">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">+45 web analytics events</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Unlimited waitlists</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600 underline decoration-dotted">24/7 support</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600 underline decoration-dotted">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600 underline decoration-dotted">+45 web analytics events</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Unlimited waitlists</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">24/7 support</h2>
							</div>
						</div>
					</div>
					</div>
				</div>
				<div className="bg-white rounded-2xl border border-gray-600/10 text-gray-800 shadow-sm">
					<div className="flex flex-col gap-2 pb-12 px-7 pt-10">
						<div className="flex items-center gap-3">
							<div className="bg-gray-800 rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Enterprise</h3>
						</div>
						<p className="text-gray-600">For larger organizations</p>
					</div>
					<div className="px-7 pb-14">
						<h1 className="text-5xl font-semibold">Let's talk</h1>
					</div>
					<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
						<button
							className="bg-gray-800 w-full border-[3px] border-gray-800 text-sm font-medium text-white px-6 py-2 rounded-full"
						>
							Contact sales
						</button>
					</div>
					<div>
						<h3 className="p-7 pb-0 text-gray-500 font-medium">Everything in professional, plus:</h3>
						<div className="py-10 pt-6 px-7 flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800 underline decoration-dotted">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800 underline decoration-dotted">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800 underline decoration-dotted">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-gray-800" />
								<h2 className="text-gray-800">Complete tool access</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}