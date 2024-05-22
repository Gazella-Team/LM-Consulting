import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import BlurSection from '@/components/blur-section'
import CustomerSlider from '@/components/customer-slider'
import DashboardDisplay from '@/components/dashboarddisplay'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero02 />
				<SectionIntro
					heading="The all-in-one cockpit for your SaaS startup"
					description="With our all-in-one platform we ensure better overview and higher productivity"
					hook="Save time and get better overview"
				>
					<BentoGridComponent />
				</SectionIntro>
			<SectionIntro
					bottomMargin={true}
					heading="Get all answers"
					hook="Frequently Asked Questions"
			>
				<BentoGridComponent />
			</SectionIntro>
		</Layout>
	)
}
