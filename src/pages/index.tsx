import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grid'
import DashboardDisplay from '@/components/dashboarddisplay'
import Hero from '@/components/hero'
import PricingTable from '@/components/pricingtable'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero />
			<DashboardDisplay />
			<div id="products">
				<SectionIntro
					heading="All tools in one place"
					description="With our all-in-one platform we ensure better overview and higher productivity"
					hook="Save time and get better overview"
				>
					<BentoGridComponent />
				</SectionIntro>
			</div>
		</Layout>
	)
}
