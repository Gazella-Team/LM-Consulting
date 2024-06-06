import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import ToolHero from '@/components/toolpage/ToolHero'
import PricingTable from '@/components/pricingtable'
import SectionIntro from '@/components/SectionIntro'
import Features from '@/components/toolpage/Features'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import DashboardDisplay from '@/components/dashboarddisplay'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import BlurSection from '@/components/blur-section'
import BlurDashboard from '@/components/blur-dashboard'

export default function Privacy() {
	return (
		<Layout white={true}>
			<div className='w-[86%] mx-auto max-w-6xl py-32 text-center'>
				<h1 className='text-gray-800 text-6xl font-semibold'>Privacy Policy</h1>
			</div>
			<section className='border-y paragraph border-gray-600/10 py-16' style={{background: "linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)"}}>
				<div className='mx-auto max-w-xl flex flex-col gap-14 leading-8 text-gray-600'>
					
				</div>
			</section>
		</Layout>
	)
}
