import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import { HiCurrencyDollar } from 'react-icons/hi'
import Tooltip from './ui/Tooltip'

export default function PricingTable() {
	const [pricingRuntime, setPricingRuntime] = useState('yearly')
	return (
		<section className="mb-24 mt-6">
			<div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-6xl w-[86%] gap-14 lg:gap-6">
				<div className="relative">
					<div className="bg-white relative h-full rounded-3xl border border-gray-600/10 text-gray-800 shadow-sm">
						<div className="flex flex-col gap-2 mb-12 px-7 pt-10">
							<div className="flex items-center gap-3">
								<div className="bg-gray-600 rounded-full h-4 w-4"></div>
								<h3 className="font-semibold text-2xl text-gray-800">
									Free
								</h3>
							</div>
							<p className="text-gray-600 paragraph">
								For hobby & side projects
							</p>
						</div>
						<div className="px-7 mb-14">
							<h1 className="text-5xl font-extrabold">
								$0
								<span className="ml-1 paragraph text-base font-[400] text-gray-600">
									/ forever
								</span>
							</h1>
						</div>
						<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
							<div className="flex">
								<Link
									target="_blank"
									href="https://app.toolbird.io/auth/register"
									className="bg-gray-600 text-center paragraph w-full border-[3px] border-gray-600 text-sm font-medium text-white px-6 py-2 rounded-full"
								>
									Get started
								</Link>
							</div>
						</div>
						<div className="paragraph">
							<h3 className="p-7 pb-0 text-gray-500 font-medium">
								What&apos;s included:
							</h3>
							<div className="py-10 pt-6 px-7 flex flex-col gap-6 text-gray-600">
								<div className="flex items-center gap-4">
									<FaCheckCircle size={18} />
									<h2 className="text-gray-600">
										2 team seats
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle size={18} />
									<Tooltip
										jsx={
											<span>
												Only able to see 6 months of
												data analytics.
											</span>
										}
									>
										<h2 className="text-gray-600 underline decoration-dotted hover:cursor-help">
											6 month data retention
										</h2>
									</Tooltip>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle size={18} />
									<h2 className="text-gray-600">
										2.500 page views
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle size={18} />
									<h2 className="text-gray-600">
										500 custom events
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle size={18} />
									<h2 className="text-gray-600">1 website</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						background:
							'linear-gradient(350deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 54%)',
					}}
					className="bg-white relative rounded-3xl border-2 border-main text-gray-800 shadow-main/30 shadow-clean"
				>
					<div className="w-full h-[40px] flex items-center justify-center mt-[-20px]">
						<p className="bg-main select-none heading text-white px-8 rounded-full py-2 text-xs font-semibold">
							Popular
						</p>
					</div>
					<div className="mt-[-20px]">
						<div className="flex flex-col gap-2 pb-12 px-7 pt-10 bg-white rounded-t-3xl">
							<div className="flex items-center gap-3 bg-white">
								<div className="bg-main rounded-full h-4 w-4"></div>
								<h3 className="font-semibold text-2xl text-gray-800">
									Pro
								</h3>
							</div>
							<p className="text-gray-600 paragraph">
								For ambitious SaaS startups
							</p>
						</div>
						<div className="px-7 pb-14 bg-white">
							<h1 className="text-5xl font-extrabold">
								$19
								<span className="ml-1 text-base paragraph font-[400] text-gray-600">
									/{' '}month
								</span>
							</h1>
						</div>
						<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
							<div className="flex">
								<Link
									target="_blank"
									href="https://app.toolbird.io/auth/register"
									className="bg-main text-center paragraph w-full border-[3px] border-main text-sm font-medium text-white px-6 py-2 rounded-full"
								>
									Get started
								</Link>
							</div>
						</div>
						<div className="paragraph">
							<h3 className="pt-7 px-8 pb-0 text-gray-500 font-medium">
								Everything in free, plus:
							</h3>
							<div className="py-10 pt-6 px-8 flex flex-col gap-6 font-regular">
								<div className="flex items-center gap-4">
									<FaCheckCircle
										size={18}
										className="text-main"
									/>
									<Tooltip
										jsx={
											<span>
												$10 per additional user{' '}
											</span>
										}
									>
										<h2 className="text-gray-600 underline decoration-dotted hover:cursor-help">
											3 team seats
										</h2>
									</Tooltip>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle
										size={18}
										className="text-main"
									/>
									<h2 className="text-gray-600">
										Custom support
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle
										size={18}
										className="text-main"
									/>
									<h2 className="text-gray-600">
										Unlimited data retention
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle
										size={18}
										className="text-main"
									/>
									<h2 className="text-gray-600">
										100.000 page views*
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle
										size={18}
										className="text-main"
									/>
									<h2 className="text-gray-600">
										10.000 custom events*
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<FaCheckCircle
										size={18}
										className="text-main"
									/>
									<h2 className="text-gray-600">
										10 websites
									</h2>
								</div>
								<p className="text-gray-700 text-sm">
									* Unlimited while Toolbird is in Beta.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white relative rounded-3xl border border-gray-600/10 text-gray-800 shadow-sm">
					<div className="flex relative flex-col gap-2 pb-12 px-7 pt-10">
						<div className="flex items-center gap-3">
							<div className="bg-gray-800 rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">
								Enterprise
							</h3>
						</div>
						<p className="text-gray-600 paragraph">
							For larger organizations
						</p>
					</div>
					<div className="px-7 pb-14">
						<h1 className="text-5xl font-extrabold">
							Let&apos;s talk
						</h1>
					</div>
					<div className="bg-slate-50 paragraph border-y py-5 px-7 border-gray-600/10">
						<div className="flex">
							<Link
								target="_blank"
								href="https://cal.com/lasseosmann/toolbird-demo"
								className="bg-gray-800 text-center w-full border-[3px] border-gray-800 text-sm font-medium text-white px-6 py-2 rounded-full"
							>
								Contact sales
							</Link>
						</div>
					</div>
					<div>
						<h3 className="p-7 pb-0 paragraph text-gray-500 font-medium">
							Custom specifications:
						</h3>
						<div className="py-10 pt-6 px-7 paragraph flex flex-col gap-6">
							<div className="flex items-center gap-4">
								<FaCheckCircle
									size={18}
									className="text-gray-800"
								/>
								<h2 className="text-gray-800">Custom seats</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle
									size={18}
									className="text-gray-800"
								/>
								<h2 className="text-gray-800">
									Prioritized support
								</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle
									size={18}
									className="text-gray-800"
								/>
								<h2 className="text-gray-800">
									Unlimited page views
								</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle
									size={18}
									className="text-gray-800"
								/>
								<h2 className="text-gray-800">
									Unlimited custom events
								</h2>
							</div>
							<div className="flex items-center gap-4">
								<FaCheckCircle
									size={18}
									className="text-gray-800"
								/>
								<h2 className="text-gray-800">
									Unlimited websites
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}