import HeroDashboard from '@/components/HeroDashboard'
import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import CustomerSlider from '@/components/customer-slider'
import AnalyticsFeatureBox from '@/components/feature-boxes/analytics-feature-box'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'
import Mission from '@/components/mission'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero />
			<HeroDashboard />
			<Mission />
			<AnalyticsFeatureBox />
			{/*
			<SectionIntro hook='The all-in-one solution' heading='Quit paying for several providers. We have all you need'>
				<p>hey</p>
			</SectionIntro>
			 */}
		</Layout>
	)
}
