import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import ToolHero from '@/components/toolpage/ToolHero'
import PricingTable from '@/components/pricingtable'
import SectionIntro from '@/components/SectionIntro'
import Features from '@/components/toolpage/Features'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import DashboardDisplay from '@/components/dashboarddisplay'

export default function Analytics() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Analytics"
				highlighted="traffic"
				heading="Privacy friendly website analytics of your"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere."
			/>
			<DashboardDisplay />
			<SectionIntro heading='Epic feature included' description='Discover, collaborate, and grow, our all-in-one platform empowers you to build and scale your influencer marketing with thousands of verified influencers.' hook='Everything needed'>
				<Features featureData={[{icon:<ChartBarIcon width={30} />, image: "/web-analytics/sources.webp", heading:"Country-based data", description:"Access insights into more than 300 million influencers and simplify"}, {icon:<ChartBarIcon width={30} />, heading:"Country-based data", image: "/web-analytics/sources.webp", description:"Access insights into more than 300 million influencers and simplify"}, {icon:<ChartBarIcon width={30} />, heading:"Country-based data", image: "/web-analytics/sources.webp", description:"Access insights into more than 300 million influencers and simplify"}]} />
			</SectionIntro>
		</Layout>
	)
}
