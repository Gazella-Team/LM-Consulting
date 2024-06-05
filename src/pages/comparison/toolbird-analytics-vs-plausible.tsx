import { Reveal } from '@/components/Animations/Reveal'
import { RevealLight } from '@/components/Animations/RevealLight'
import Layout from '@/components/Layout'
import CompareHero from '@/components/compare/Hero'
import {
	CheckCheckIcon,
	CheckCircle,
	CheckCircleIcon,
	X,
	XCircle,
	XCircleIcon,
	XSquareIcon,
} from 'lucide-react'
import { FaCheckCircle } from 'react-icons/fa'

export default function ComparePlausible() {
	return (
		<Layout>
			<CompareHero
				company="Plausible"
				iconPath="/"
				paragraph="Learn how Dub.co compares to Rebrandly and why Dub.co is the best Rebrandly."
			/>
			<RevealLight delayTime={0.1}>
				<div
					style={{
						background:
							'linear-gradient(329deg, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 67%)',
					}}
					className="flex pr-4 paragraph rounded-[40px] border py-10 bg-white/0 backdrop-blur-2xl overflow-x-auto border-gray-600/10 mb-24 shadow-main/30 shadow-clean relative justify-center w-[86%] mx-auto max-w-4xl"
				>
					<table className="min-w-full rounded-[40px] border-collapse overflow-x-auto">
						<thead className="rounded-2xl">
							<tr className="rounded-2xl">
								<th className="rounded-tl-2xl w-[400px] px-4 pt-8"></th>
								<th className="py-8 flex items-center justify-center bg-transparent">
									<div className="flex justify-center items-center">
										<img
											className="w-24"
											src="/logos/finallogo.svg"
										></img>
									</div>
								</th>
								<th className="py-8  rounded-tr-2xl pt-8 bg-transparent">
									<div className="flex justify-center items-center">
										<img
											className="w-24"
											src="/compare/plausible.svg"
										></img>
									</div>
								</th>
							</tr>
						</thead>
						<tbody className="rounded-[30px]">
							<tr className="border-b border-b-gray-600/10 pb-10">
								<td className="bg-transparent pl-14 py-8">
									<div className="flex flex-col gap-1">
										<h2 className="font-semibold text-gray-800">
											Advanced analytics
										</h2>
										<p className="text-sm text-gray-600">
											Create branded short links with your
											own domain
										</p>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<FaCheckCircle
											className="text-gray-800"
											size={18}
										/>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<XCircle
											className="text-gray-500"
											size={18}
										/>
									</div>
								</td>
							</tr>
							<tr className="border-b border-b-gray-600/10 pb-10">
								<td className="bg-transparent pl-14 py-8">
									<div className="flex flex-col gap-1">
										<h2 className="font-semibold text-gray-800">
											Advanced analytics
										</h2>
										<p className="text-sm text-gray-600">
											Create branded short links with your
											own domain
										</p>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<FaCheckCircle
											className="text-gray-800"
											size={18}
										/>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<XCircle
											className="text-gray-500"
											size={18}
										/>
									</div>
								</td>
							</tr>
							<tr className="border-b border-b-gray-600/10 pb-10">
								<td className="bg-transparent pl-14 py-8">
									<div className="flex flex-col gap-1">
										<h2 className="font-semibold text-gray-800">
											Advanced analytics
										</h2>
										<p className="text-sm text-gray-600">
											Create branded short links with your
											own domain
										</p>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<FaCheckCircle
											className="text-gray-800"
											size={18}
										/>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<XCircle
											className="text-gray-500"
											size={18}
										/>
									</div>
								</td>
							</tr>
							<tr className="border-b border-b-gray-600/10 pb-10">
								<td className="bg-transparent pl-14 py-8">
									<div className="flex flex-col gap-1">
										<h2 className="font-semibold text-gray-800">
											Advanced analytics
										</h2>
										<p className="text-sm text-gray-600">
											Create branded short links with your
											own domain
										</p>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<FaCheckCircle
											className="text-gray-800"
											size={18}
										/>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<XCircle
											className="text-gray-500"
											size={18}
										/>
									</div>
								</td>
							</tr>
							<tr className="border-b border-b-gray-600/10 pb-10">
								<td className="bg-transparent pl-14 py-8">
									<div className="flex flex-col gap-1">
										<h2 className="font-semibold text-gray-800">
											Advanced analytics
										</h2>
										<p className="text-sm text-gray-600">
											Create branded short links with your
											own domain
										</p>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<FaCheckCircle
											className="text-gray-800"
											size={18}
										/>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<XCircle
											className="text-gray-500"
											size={18}
										/>
									</div>
								</td>
							</tr>
							<tr className="rounded-b-[30px] border-b-gray-600/10 pb-10">
								<td className="bg-transparent rounded-bl-[30px] pl-14 py-8">
									<div className="flex flex-col gap-1">
										<h2 className="font-semibold text-gray-800">
											Advanced analytics
										</h2>
										<p className="text-sm text-gray-600">
											Create branded short links with your
											own domain
										</p>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<FaCheckCircle
											className="text-gray-800"
											size={18}
										/>
									</div>
								</td>
								<td className="bg-transparent">
									<div className="flex items-center justify-center">
										<XCircle
											className="text-gray-500"
											size={18}
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</RevealLight>
		</Layout>
	)
}
