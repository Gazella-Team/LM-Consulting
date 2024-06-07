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

export default function Analytics() {
	return (
		<Layout white={true}>
			<Meta
				title={`Privacy-friendly analysis of all your website data - Toolbird.io`}
				description="Latest news and updates from Toolbird aswell as guides."
			/>
			<PageIntro
				buttons={[
					{
						text: 'Get started for free',
						path: 'https://app.toolbird.io/auth/register',
					},
					{
						text: 'Live demo',
						path: 'https://app.toolbird.io/share/toolbird.io',
						target: '_blank',
					},
				]}
				hook="Toolbird Analytics"
				highlighted="website data"
				heading="Privacy-friendly analysis of all your"
				paragraph="Keep track of all traffic going through your website. Analyze visitors, sources, devices and other essential data points."
			/>
			<BlurDashboard image="/showcases/analysis.webp" />
			<SectionIntro
				bottomMargin={true}
				heading="Powerful insights"
				description="Track where your visitors come from, what device they are using and where in the world they are located."
				hook="Features Included"
			>
				<BentoGridComponent />
			</SectionIntro>
		</Layout>
	)
}
