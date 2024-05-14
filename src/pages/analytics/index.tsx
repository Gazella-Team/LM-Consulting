import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import ToolHero from '@/components/toolpage/ToolHero'
import PricingTable from '@/components/pricingtable'
import SectionIntro from '@/components/SectionIntro'
import Features from '@/components/toolpage/Features'
import { ChartBarIcon } from '@heroicons/react/24/outline'

export default function Analytics() {
	return (
		<Layout white={true}>
			<ToolHero heading='One place, all your data' description='d' image='' />
			<SectionIntro heading='Epic feature included' description='Discover, collaborate, and grow, our all-in-one platform empowers you to build and scale your influencer marketing with thousands of verified influencers.' hook='Everything needed'>
				<Features featureData={[{icon:<ChartBarIcon width={30} />, image: "/web-analytics/sources.webp", heading:"Country-based data", description:"Access insights into more than 300 million influencers and simplify"}, {icon:<ChartBarIcon width={30} />, heading:"Country-based data", image: "/web-analytics/sources.webp", description:"Access insights into more than 300 million influencers and simplify"}, {icon:<ChartBarIcon width={30} />, heading:"Country-based data", image: "/web-analytics/sources.webp", description:"Access insights into more than 300 million influencers and simplify"}]} />
			</SectionIntro>
		</Layout>
	)
}
