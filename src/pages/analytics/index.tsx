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

export default function Analytics() {
	return (
		<Layout white={true}>
			<PageIntro
				buttons={[{text: "Get started", path: "/"}, {text:"Live demo", path: "/"}]}
				hook="Analytics"
				highlighted="website data"
				heading="Privacy-friendly analysis of all your"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere."
			/>
			<BlurDashboard image='/showcases/analysis.webp' />
			<SectionIntro bottomMargin={true} heading='Powerful insights' description='Discover, collaborate, and grow, our all-in-one platform empowers you to build.' hook='Features Included'>
				<BentoGridComponent />
			</SectionIntro>
		</Layout>
	)
}
