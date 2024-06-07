import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/landing-bento-grid'
import DashboardDisplay from '@/components/dashboarddisplay'
import FeatureBox from '@/components/feature-box'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero02 />
			<div className="mt-[-130px]">
				<FeatureBox />
			</div>
		</Layout>
	)
}
