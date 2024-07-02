import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CustomerSlider from '@/components/customer-slider'
import CurvePageIntro from '@/components/CurvePageIntro'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import Tooltip from '@/components/ui/Tooltip'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import Cta from '@/components/Layout/Cta'
import { CheckCircle2 } from 'lucide-react'

export default function ComparePlausible() {
	return (
		<Layout whiteBeforeScroll={true} noCta={true} white={true}>
			<Meta title={`Toolbird vs Plausible: The #1 Plausible Alternative`} />
			<CurvePageIntro
				hook="The #1 Plausible Alternative"
				highlighted=""
				heading="Toolbird vs Plausible"
				paragraph="Looking for the best Plausible Alternative? See why others prefer using Toolbird."
			>
			<section className="mt-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl w-[86%] gap-14 lg:gap-6">
					<div
						style={{
							background:
								'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
						}}
						className="bg-white relative rounded-3xl border-2 border-main text-gray-800 shadow-main/30 shadow-clean"
					>
						<div>
							<div className="flex flex-col gap-2 pb-12 px-7 pt-10 bg-white rounded-t-3xl">
								<Link href={'/'}> <img className="w-[140px]" src="/logos/finallogo.svg" /> </Link>
							</div>
							<div className="px-7 pb-14 bg-white">
								<h1 className="text-5xl font-extrabold">
									$19
									<span className="ml-1 text-base paragraph font-[400] text-gray-600">
										/ month
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
										Start 14-day free trial
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
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white relative rounded-3xl border border-gray-600/10 text-gray-800 shadow-sm">
						<div className="flex relative flex-col gap-2 pb-12 px-7 pt-10">
							<div className="flex items-center gap-3">
								<Link href={'/'}> <img className="w-[140px]" src="/logos/finallogo.svg" /> </Link>
							</div>
						</div>
						<div className="px-7 pb-14 bg-white">
								<h1 className="text-5xl font-extrabold">
									$19
									<span className="ml-1 text-base paragraph font-[400] text-gray-600">
										/ month
									</span>
								</h1>
							</div>
						<div className="bg-slate-50 paragraph border-y py-5 px-7 border-gray-600/10">
							<div className="flex">
								<Link
									target="_blank"
									href="https://cal.com/lasseosmann/toolbird-demo"
									className="bg-gray-800 text-center w-full border-[3px] border-gray-800 text-sm font-medium text-white px-6 py-2 rounded-full"
								>
									Migrate from Plausible
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
			</CurvePageIntro>
			<BlurSection
					bottomMargin={true}
					heading="Toolbird provides the best experience"
					hook="Frequently Asked Questions"
				>
				<div className="grid grid-cols-1 lg:grid-cols-2 paragraph gap-x-32 gap-y-16 w-[90%] mt-12 mx-auto">
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Privacy friendly (GDPR)
							</h2>
							<p className="text-gray-600">
								Your data is stored securely in Europe. We never
								share your data or sell it to a third-party. All
								tracked personal data is anonymised and can not
								be traced back. All data is aggregated.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Realtime data
							</h2>
							<p className="text-gray-600">
								We offer realtime insights with live visitors.
								See exactly where visitors come from and what
								pages they visit when they do.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Geographic data
							</h2>
							<p className="text-gray-600">
								Track exactly what country, city and region your
								visitors visit you from.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Referer data
							</h2>
							<p className="text-gray-600">
								Track exactly where your visitors are referred
								to your website from.
							</p>
						</div>
					</div>
				</div>
			</BlurSection>
			<SectionIntro
				heading="Dive into the best Plausible Alternatives"
				hook="The Best Competitors"
			>
				<section className='max-w-3xl flex flex-col gap-6 mx-auto'>
					<div style={{ background: 'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)', }} className='rounded-[25px] border-main shadow-clean p-10 border-2 flex flex-col gap-6'>
						<h1 className='text-xl font-semibold text-gray-800'>1. Piwik Pro</h1>
						<p className='paragraph text-gray-600'>UserEcho is a tool to deal with your clients, their wishes, ideas and requirements. UserEcho is feedback and request system for websites and products. It captures user feedback and requests which can be used by developers to improve their products.<br></br><br></br>UserEcho allows sharing of the information with other people in an organization who might not otherwise have access to it. This makes it easier for project managers, product managers and marketers to see what customers want.</p>
					</div>
					<div className='bg-white rounded-[25px] border-gray-600/10 shadow-clean p-10 border flex flex-col gap-6'>
						<h1 className='text-xl font-semibold text-gray-800'>1. Piwik Pro</h1>
						<p className='paragraph text-gray-600'>UserEcho is a tool to deal with your clients, their wishes, ideas and requirements. UserEcho is feedback and request system for websites and products. It captures user feedback and requests which can be used by developers to improve their products.</p>
					</div>
					<div className='bg-white rounded-[25px] border-gray-600/10 shadow-clean p-10 border flex flex-col gap-6'>
						<h1 className='text-xl font-semibold text-gray-800'>1. Piwik Pro</h1>
						<p className='paragraph text-gray-600'>UserEcho is a tool to deal with your clients, their wishes, ideas and requirements. UserEcho is feedback and request system for websites and products. It captures user feedback and requests which can be used by developers to improve their products.</p>
					</div>
					<div className='bg-white rounded-[25px] border-gray-600/10 shadow-clean p-10 border flex flex-col gap-6'>
						<h1 className='text-xl font-semibold text-gray-800'>1. Piwik Pro</h1>
						<p className='paragraph text-gray-600'>UserEcho is a tool to deal with your clients, their wishes, ideas and requirements. UserEcho is feedback and request system for websites and products. It captures user feedback and requests which can be used by developers to improve their products.</p>
					</div>
					<div className='bg-white rounded-[25px] border-gray-600/10 shadow-clean p-10 border flex flex-col gap-6'>
						<h1 className='text-xl font-semibold text-gray-800'>1. Piwik Pro</h1>
						<p className='paragraph text-gray-600'>UserEcho is a tool to deal with your clients, their wishes, ideas and requirements. UserEcho is feedback and request system for websites and products. It captures user feedback and requests which can be used by developers to improve their products.</p>
					</div>
				</section>
			</SectionIntro>
			<section className="py-16 mt-24 pb-0 relative">
				<div className="w-[86%] relative mx-auto max-w-6xl mb-20 text-center">
					<div className="flex items-center justify-center mb-10">
						<div className="shadow-clean p-1 shadow-main/50 bg-white rounded-full border border-gray-600/10">
							<img
								className="w-12"
								src="/logos/birdlogo.png"
							></img>
						</div>
					</div>
					<h2 className="text-[35px] md:text-[45px] xl:text-[50px] leading-[110%] max-w-[600px] mb-4 mx-auto font-extrabold text-gray-800">
						<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
							Make the switch{' '}
						</span>{' '}
						from Plausbile in 2 clicks
					</h2>
					<p className="text-base md:text-lg xl:text-lg paragraph max-w-[350px] mx-auto text-gray-600">
						Increase your project overview today with the ultimate
						toolbox for SaaS developers.
					</p>
					<div className="flex items-center paragraph relative justify-center gap-3 mt-8 font-medium">
						<Link
							href={'https://app.toolbird.io/auth/register'}
							className="bg-gray-800 border-[3px] border-gray-800 font-normal text-sm text-white px-4 py-1 rounded-full"
						>
							Migrate from Plausible
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	)
}