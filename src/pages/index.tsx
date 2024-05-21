import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import CustomerSlider from '@/components/customer-slider'
import DashboardDisplay from '@/components/dashboarddisplay'
import Hero from '@/components/hero'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero />
			<DashboardDisplay src={"/showcases/analysis.webp"} />
				<SectionIntro
					heading="The cockpit for your SaaS"
					description="With our all-in-one platform we ensure better overview and higher productivity"
					hook="Save time and get better overview"
				>
					<BentoGridComponent />
				</SectionIntro>
		</Layout>
	)
}
