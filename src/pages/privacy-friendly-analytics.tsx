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
import BlurDashboard from '@/components/blur-dashboard'

export default function GoogleAnalyticsAlternative() {
	return (
		<Layout whiteBeforeScroll={true} noCta={true} white={true}>
			<Meta title={`Toolbird vs Plausible: The #1 Plausible Alternative`} />
			<PageIntro
				buttons={[
								{
									text: 'Start 14-day free trial',
									path: 'https://app.toolbird.io/auth/register',
								},
								{
									text: 'Live demo',
									path: 'https://app.toolbird.io/share/toolbird.io',
									target: '_blank',
								},
				]}
				hook="Toolbird Analytics"
				highlighted="analytics"
				heading="Privacy-focused website"
				paragraph="Looking for the best Plausible Alternative? See why others prefer using Toolbird."
			/>
			<BlurDashboard  image="/showcases/analysis.webp" />
			<section style={{background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4976584383753502) 10%, rgba(255,255,255,0.8954175420168067) 15%, rgba(255,255,255,0.9514399509803921) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9458377100840336) 80%, rgba(255,255,255,0.8982186624649859) 85%, rgba(255,255,255,0.5032606792717087) 90%, rgba(255,255,255,0) 100%)"}} className='py-40'>
				<div className='w-[86%] relative mx-auto max-w-2xl flex flex-col gap-20'>
					<div className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold text-gray-800'>An Ergonomic Dashboard</h2>
						<p className='text-gray-600 paragraph text-lg'>Our single-page dashboard provides actionable statistics. Dive deeper into what is going on with stackable filters. Switching between as many websites as you want makes Pirsch a good choice for web agencies and freelancers.</p>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold text-gray-800'>Privacy over everything</h2>
						<p className='text-gray-600 paragraph text-lg'>Our single-page dashboard provides actionable statistics. Dive deeper into what is going on with stackable filters. Switching between as many websites as you want makes Pirsch a good choice for web agencies and freelancers.</p>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold text-gray-800'>Integrate with t </h2>
						<p className='text-gray-600 paragraph text-lg'>Our single-page dashboard provides actionable statistics. Dive deeper into what is going on with stackable filters. Switching between as many websites as you want makes Pirsch a good choice for web agencies and freelancers.</p>
					</div>
				</div>
			</section>
			<section className="mt-24 pb-0 relative">
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
						to Toolbird in 2 clicks
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
