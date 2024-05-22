import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import ToolHero from '@/components/toolpage/ToolHero'
import PricingTable from '@/components/pricingtable'
import SectionIntro from '@/components/SectionIntro'
import Features from '@/components/toolpage/Features'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import DashboardDisplay from '@/components/dashboarddisplay'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import Hero02 from '@/components/hero-02'

export default function Analytics() {
	return (
		<Layout white={true}>
			<Hero02 />
			<SectionIntro bottomMargin={true} heading='Powerful insights' description='Discover, collaborate, and grow, our all-in-one platform empowers you to build.' hook='Features Included'>
				<BentoGridComponent />
			</SectionIntro>
		</Layout>
	)
}
