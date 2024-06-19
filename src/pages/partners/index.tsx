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
import Meta from '@/components/Layout/Meta'

export default function Partners() {
	return (
		<Layout white={true}>
			<Meta
				title={`Partners - Toolbird.io`}
				description="Toolbird Analytics is a simple privacy-first web analytics tool. Track where your users come from, what device they are using and where in the world they are located. All completely anonymous."
				keywords='Privacy, Analytics, Web, Traffic, Web Analytics'
			/>
			<PageIntro
				buttons={[
					{
						text: 'Become a partner',
						path: 'https://app.toolbird.io/share/toolbird.io',
						target: '_blank',
					},
				]}
				hook="Who we work with"
				highlighted="Partners"
				heading="Toolbird"
				paragraph="Learn more about the companies we work with on a day-to-day basis to provide as much value for our users as possible"
			/>
		</Layout>
	)
}
