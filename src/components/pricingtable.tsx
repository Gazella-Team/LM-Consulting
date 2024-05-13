import { CheckCheckIcon, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function PricingTable() {
	return (
		<section className="mb-24">
			<div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl gap-6">
			<div className="bg-white rounded-2xl border border-gray-600/10 text-gray-800 shadow-sm">
					<div className="flex flex-col gap-2 mb-10 px-7 pt-10">
						<div className="flex items-center gap-3">
							<div className="bg-gray-600 rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Free</h3>
						</div>
						<p className="text-gray-600">For hobby & side projects</p>
					</div>
					<div className="px-7 mb-10">
						<h1 className="text-5xl font-bold">$29<span className="ml-1 text-lg font-medium text-gray-600">/ month</span></h1>
					</div>
					<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
						<button
							className="bg-main w-full border-[3px] border-main text-sm font-medium text-white px-6 py-2 rounded-full"
						>
							Get started with professional
						</button>
					</div>
					<div>
						<h3 className="p-7 pb-0 text-gray-500 font-medium">Everything in free, plus</h3>
						<div className="py-10 pt-6 px-7 flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
						</div>
					</div>
				</div>
				<div style={{background: "linear-gradient(350deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 54%)"}} className="bg-white rounded-2xl border-2 border-main text-gray-800 shadow-main/10 shadow-xl">
					<div className="flex flex-col gap-2 pb-10 px-7 pt-10 bg-white rounded-t-2xl">
						<div className="flex items-center gap-3 bg-white">
							<div className="bg-main rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Professional</h3>
						</div>
						<p className="text-gray-600">For hobby & side projects</p>
					</div>
					<div className="px-7 pb-10 bg-white">
						<h1 className="text-5xl font-bold">$29<span className="ml-1 text-lg font-medium text-gray-600">/ month</span></h1>
					</div>
					<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
						<button
							className="bg-main w-full border-[3px] border-main text-sm font-medium text-white px-6 py-2 rounded-full"
						>
							Get started with professional
						</button>
					</div>
					<div>
						<h3 className="p-7 pb-0 text-gray-500 font-medium">Everything in free, plus</h3>
						<div className="py-10 pt-6 px-7 flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-2xl border border-gray-600/10 text-gray-800 shadow-sm">
					<div className="flex flex-col gap-2 mb-10 px-7 pt-10">
						<div className="flex items-center gap-3">
							<div className="bg-main rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Professional</h3>
						</div>
						<p className="text-gray-600">For hobby & side projects</p>
					</div>
					<div className="px-7 mb-10">
						<h1 className="text-5xl font-bold">$29<span className="ml-1 text-lg font-medium text-gray-600">/ month</span></h1>
					</div>
					<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
						<button
							className="bg-main w-full border-[3px] border-main text-sm font-medium text-white px-6 py-2 rounded-full"
						>
							Get started with professional
						</button>
					</div>
					<div>
						<h3 className="p-7 pb-0 text-gray-500 font-medium">Everything in free, plus</h3>
						<div className="py-10 pt-6 px-7 flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle size={18} className="text-main" />
								<h2 className="text-gray-600">Complete tool access</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}