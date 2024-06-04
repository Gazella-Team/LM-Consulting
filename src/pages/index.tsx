import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/landing-bento-grid'
import DashboardDisplay from '@/components/dashboarddisplay'
import Hero from '@/components/hero'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero />
			<DashboardDisplay src="/showcases/platform.webp" />
			<div className="mt-[-100px]">
				<SectionIntro
					heading="The all-in-one cockpit for your SaaS startup"
					description="With our all-in-one platform we ensure better overview and higher productivity"
					hook="Save time and get better overview"
				>
					<BentoGridComponent />
				</SectionIntro>
			</div>
		</Layout>
	)
}
